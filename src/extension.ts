import * as vscode from 'vscode';
import { AsciiToEbcdic } from './AsciiToEbcdic';
import { Convert } from './Convert';
import { EbcdicToAscii } from './EbcdicToAscii';

export function activate(context: vscode.ExtensionContext) {

  const cmdPrefix = 'vscode-ebcdicconverter';

  const commands = [
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0037ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0037ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0037Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0037Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0273ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0273ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0273Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0273Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0277ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0277ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0277Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0277Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0278ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0278ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0278Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0278Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0280ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0280ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0280Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0280Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0284ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0284ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0284Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0284Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0285ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0285ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0285Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0285Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0297ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0297ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0297Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0297Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0500ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0500ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0500Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0500Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0871ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0871ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0871Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0871Mapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic1047ToAsciiName}`, () => { Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic1047ToAsciiMapping); }),
    vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic1047Name}`, () => { Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic1047Mapping); }),
  ];
  commands.forEach(command => context.subscriptions.push(command));
};

// this method is called when your extension is deactivated
export function deactivate() { }

