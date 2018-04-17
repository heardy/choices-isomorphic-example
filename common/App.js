import React from "react";
import Required from './Required'
// import Imported from './Imported'

const style = {
    backgroundColor: "#fff",
    padding: "24px",
    color: "#333",
    maxWidth: "400px",
    margin: "20px auto 0"
};

const App = () => (
    <div style={style}>
        <Required />
        {/*<Imported />*/}
    </div>
);

export default App;
