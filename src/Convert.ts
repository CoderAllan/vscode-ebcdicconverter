import * as vscode from 'vscode';

export abstract class Convert {

  private static mapSelection(doMapping: (text: string) => string) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return; // No open text editor
    }
    const selection = editor.selection;
    if (selection === undefined || selection.isEmpty) {
      var firstLine = editor.document.lineAt(0);
      var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
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

  public static EbcdicSelectionToAscii(mappingArray: string[]) {
    Convert.mapSelection((text) => {
      let convertedText: string = '';
      for (let i = 0; i < text.length; i++) {
        const charCode: number = text.charCodeAt(i);
        convertedText += mappingArray[charCode];
      }
      return convertedText;
    });
  }

  public static AsciiSelectionToEbcdic(mappingArray: number[]) {
    Convert.mapSelection((text) => {
      let convertedText: string = '';
      for (let i = 0; i < text.length; i++) {
        const charCode: number = text.charCodeAt(i);
        if (charCode != 0xd) { // The conversion will mess up if we convert both \r (0xd) and \n (0xa), that is why we dont convert \r
          convertedText += String.fromCharCode(mappingArray[charCode]);
        }
      }
      return convertedText;
    });
  }
}
