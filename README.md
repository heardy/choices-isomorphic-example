Choices.js Isomorphic example

```
npm i
npm start
```

Open `http://localhost:3000/`

It works using whe loading Choices.js using `require()`.

If you uncomment the Imported version in `/common/App.js` you will get an error `ReferenceError: document is not defined`.

Notice that the Choices code is wrapped in an if statement checking if there is a DOM before instantiating Choices components.