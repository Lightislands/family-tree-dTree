# FamilyTree d3

forked from
- https://jsfiddle.net/tpde0cer/344/
- https://github.com/ErikGartner/dTree
- https://treehouse.gartner.io/ErikGartner/58e58be650453b6d49d7


======= SASS, ES6, LoDash

-------- Install packages:
npm install



-------- Build project:

Prod with Beauty html:
npm run build-and-beautify

Prod:
npm run build

Watch:
npm run watch

Server + Watch:
npm run start

Dev:
npm run dev


----------- Troubleshoot

Error: ENOENT: no such file or directory, scandir 'C:\Working\my-app\node-sass\vendor'
Solution - reinstall sass loader
npm install sass-loader node-sass webpack --save-dev
