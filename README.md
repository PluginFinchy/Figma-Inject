# Figma-Inject
A proof of concept that injects plugin code over websockets into a Figma file via node 

Need to set a launch argument to Figma `remote-debugging-port=7575`

Mac:
```
cd applications

open -n path/to/Figma.app --args --remote-debugging-port=7575
```

Windows:
```
Figma.exe --args --remote-debugging-port=7575
```

```
npm install

yarn install
```

```
node app.js
```
