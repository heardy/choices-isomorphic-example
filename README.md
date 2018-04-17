Choices.js Isomorphic example

```
npm i
npm start
```

Open `http://localhost:3000/`

It works when loading Choices.js using `require()` (which is setup by default).

If you uncomment the Imported version in `/common/App.js` you will get an error `ReferenceError: document is not defined`.

If you look inside `/common/Imported.js` you will notice that the Choices code is wrapped in an if statement checking if there is a DOM before instantiating Choices components. The `import Choices from 'choices.js';` is what is causing the error on the server.

Note: Using require for working version as you can't load `import` dynamically. 