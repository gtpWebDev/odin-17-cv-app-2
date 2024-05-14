import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/*
To do:
  - Improve accessibility - colours, make drop downs clickable, check semantic tags
  - Media queries - needs a max width for large screens, and likely both tablet and phone layouts
  - Display layout - needs to deal with long inputs in personal details section
  - tidy up components - first attempt was to use generalised inputs with quite
      a bit of layout structure, but may need a rethink with a bit more experience of react
  - replace down caret with up caret when edit is opened


*/
