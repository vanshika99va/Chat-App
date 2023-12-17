import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//remove ReactStrictMode , cuz it doesn't play well with websockets which are needed for chat apps
