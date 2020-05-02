import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"));

const el: HTMLDivElement = document.createElement("div");
el.innerText = "Hello, TypeScript";
el.className = "ts1";
document.body.appendChild(el);
