import * as vscode from 'vscode';
import { AsciiToEbcdic } from './AsciiToEbcdic';
import { Convert } from './Convert';
import { EbcdicToAscii } from './EbcdicToAscii';

export function activate(context: vscode.ExtensionContext) {

  const cmdPrefix = 'vscode-ebcdicconverter';

  const ebcdic0037Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0037ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0037ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0037Disposable);
  const asciiToEbcdic0037Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0037Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0037Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0037Disposable);

  const ebcdic0273Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0273ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0273ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0273Disposable);
  const asciiToEbcdic0273Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0273Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0273Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0273Disposable);

  const ebcdic0277Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0277ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0277ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0277Disposable);
  const asciiToEbcdic0277Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0277Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0277Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0277Disposable);

  const ebcdic0278Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0278ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0278ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0278Disposable);
  const asciiToEbcdic0278Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0278Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0278Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0278Disposable);

  const ebcdic0280Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0280ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0280ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0280Disposable);
  const asciiToEbcdic0280Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0280Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0280Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0280Disposable);

  const ebcdic0284Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0284ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0284ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0284Disposable);
  const asciiToEbcdic0284Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0284Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0284Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0284Disposable);

  const ebcdic0285Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0285ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0285ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0285Disposable);
  const asciiToEbcdic0285Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0285Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0285Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0285Disposable);

  const ebcdic0297Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0297ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0297ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0297Disposable);
  const asciiToEbcdic0297Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0297Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0297Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0297Disposable);

  const ebcdic0500Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0500ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0500ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0500Disposable);
  const asciiToEbcdic0500Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0500Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0500Mapping);
  });

  const ebcdic0871Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic0871ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic0871ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic0871Disposable);
  const asciiToEbcdic0871Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic0871Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic0871Mapping);
  });
  context.subscriptions.push(asciiToEbcdic0871Disposable);

  const ebcdic1047Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${EbcdicToAscii.ebcdic1047ToAsciiName}`, () => {
    Convert.EbcdicSelectionToAscii(EbcdicToAscii.ebcdic1047ToAsciiMapping);
  });
  context.subscriptions.push(ebcdic1047Disposable);
  const asciiToEbcdic1047Disposable = vscode.commands.registerCommand(`${cmdPrefix}.${AsciiToEbcdic.asciiToEbcdic1047Name}`, () => {
    Convert.AsciiSelectionToEbcdic(AsciiToEbcdic.asciiToEbcdic1047Mapping);
  });
  context.subscriptions.push(asciiToEbcdic1047Disposable);
};

// this method is called when your extension is deactivated
export function deactivate() { }

