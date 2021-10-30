import * as vscode from 'vscode';
import * as fs from 'fs';

export abstract class Convert {

  private static mapSelection(doMapping: (data: string | Buffer) => string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // No open text editor
    }
    const selection = editor.selection;
    if (this.fileExists(editor.document.fileName)) { // If a specific file is opened, then we read it as binary to avoid issues with VSCode converting the characters to unicode
      fs.readFile(editor.document.fileName, null, (err, data) => {
        if (selection === undefined || selection.isEmpty) {
          const convertedText = doMapping(data);
          editor.edit(editBuilder => {
            const firstLine = editor.document.lineAt(0);
            const lastLine = editor.document.lineAt(editor.document.lineCount - 1);
            const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
            editBuilder.replace(textRange, convertedText);
          });
        } else {
          const selectionData = data.slice(selection.start.character, selection.end.character);
          const convertedText = doMapping(selectionData);
          editor.edit(editBuilder => {
            editBuilder.replace(selection, convertedText);
          });
        }
      });
    } else { // If no file is opened we fetch the text from the editor
      if (selection === undefined || selection.isEmpty) {
        const firstLine = editor.document.lineAt(0);
        const lastLine = editor.document.lineAt(editor.document.lineCount - 1);
        const textRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
        const text = editor.document.getText(textRange);
        const convertedText = doMapping(text);
        editor.edit(editBuilder => {
          editBuilder.replace(textRange, convertedText);
        });
      } else {
        const text = editor.document.getText(selection);
        const convertedText = doMapping(text);
        editor.edit(editBuilder => {
          editBuilder.replace(selection, convertedText);
        });
      }
    }
  }

  public static EbcdicSelectionToAscii(mappingArray: string[]) {
    Convert.mapSelection((data) => {
      let convertedText: string = '';
      if (typeof (data) === 'string') {
        for (let i = 0; i < data.length; i++) {
          const charCode: number = data.charCodeAt(i);
          convertedText += mappingArray[charCode];
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          const charCode: number = data[i];
          convertedText += mappingArray[charCode];
        }
      }
      return convertedText;
    });
  }

  public static AsciiSelectionToEbcdic(mappingArray: number[]) {
    Convert.mapSelection((data) => {
      let convertedText: string = '';
      if (typeof (data) === 'string') {
        for (let i = 0; i < data.length; i++) {
          const charCode: number = data.charCodeAt(i);
          if (charCode !== 0xd) { // The conversion will mess up if we convert both \r (0xd) and \n (0xa), that is why we dont convert \r
            convertedText += String.fromCharCode(mappingArray[charCode]);
          }
        }
      } else {
        for (let i = 0; i < data.length; i++) {
          const charCode: number = data[i];
          if (charCode !== 0xd) { // The conversion will mess up if we convert both \r (0xd) and \n (0xa), that is why we dont convert \r
            convertedText += String.fromCharCode(mappingArray[charCode]);
          }
        }
      }
      return convertedText;
    });
  }
  public static fileExists(filename: string): boolean {
    try {
      return fs.lstatSync(filename).isFile();
    } catch {
      return false;
    }
  }
}
