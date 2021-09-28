# Ebcdic Converter

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/coderAllan.vscode-ebcdicconverter) ![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/coderAllan.vscode-ebcdicconverter) ![GitHub top language](https://img.shields.io/github/languages/top/CoderAllan/vscode-ebcdicconverter.svg) ![GitHub last commit](https://img.shields.io/github/last-commit/CoderAllan/vscode-ebcdicconverter.svg) ![GitHub](https://img.shields.io/github/license/CoderAllan/vscode-ebcdicconverter.svg)

Ebcdic Converter is a Visual Studio Code extension that can convert from Ebcdic to Ascii or from Ascii to Ebcdic.

The extension will convert the characters that are selected in the active text editor. If no characters are selected then the entire content af the active text editor is converted.

Ebcdic as described on [Wikipedia](https://en.wikipedia.org/wiki/EBCDIC): Extended Binary Coded Decimal Interchange Code is an eight-bit character encoding used mainly on IBM mainframe and IBM midrange computer operating systems. It descended from the code used with punched cards and the corresponding six-bit binary-coded decimal code used with most of IBM's computer peripherals of the late 1950s and early 1960s.

Ascii as described on [Wikipedia](https://en.wikipedia.org/wiki/ASCII): Abbreviated from American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices. Most modern character-encoding schemes are based on ASCII, although they support many additional characters.

## Convert entire file

If you don't select anything in the currently open file then the entire file will be converted.

![Convert entire file](https://github.com/CoderAllan/vscode-ebcdicconverter/raw/main/images/Convert.gif)

## Convert selection

If you select a range of characters in the currently open file then only the selection will be converted.

![Convert selection](https://github.com/CoderAllan/vscode-ebcdicconverter/raw/main/images/ConvertSelection.gif)

## Supported codepages

* Ebcdic 0037
* Ebcdic 0273
* Ebcdic 0277
* Ebcdic 0278
* Ebcdic 0280
* Ebcdic 0284
* Ebcdic 0285
* Ebcdic 0297
* Ebcdic 0500
* Ebcdic 0871
* Ebcdic 1047

Complete list of codepages on [Wikipedia](https://en.wikipedia.org/wiki/Code_page#EBCDIC-based_code_pages)
