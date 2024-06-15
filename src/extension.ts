import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.googleSearch', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            if (text) {
                const query = encodeURIComponent(text);
                const url = `https://www.google.com/search?q=${query}`;
                vscode.env.openExternal(vscode.Uri.parse(url));
            } else {
                vscode.window.showInformationMessage('No text selected');
            }
        }
    });

    context.subscriptions.push(disposable);

    // Register a keybinding
    vscode.commands.registerCommand('extension.triggerGoogleSearch', () => {
        vscode.commands.executeCommand('extension.googleSearch');
    });
}

export function deactivate() {}
