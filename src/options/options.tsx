import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./options.css";
import Sidenav from "./pages/Sidenav";
import { sideBarComponents } from "./pages";

type Props = {};

function Options({}: Props) {
  const [component, setComponent] = useState("General");
  return (
    <div className="__options_container">
      <Sidenav setComponent={setComponent} />
      <div className="__options_body">
        {sideBarComponents.map((e, index) => {
          return component == e.name && <e.Component />;
        })}
      </div>
    </div>
  );
}

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<Options />, root);
