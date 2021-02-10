import React, { useState } from "react";
import { render } from "react-dom";
import "./style.scss";

function App() {
    const [state, setState] = useState("Click me");
    return <button onClick={() => setState("Clicked")}>{state}</button>;
}

render(<App />, document.getElementById("root"));
