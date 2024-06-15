npm init -y
npm install --save-dev vscode
npm run compile
npm install -g vsce
vsce package

# then install the .vsix file in vscode
