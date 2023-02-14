import React from "react";
import ReactDOM from "react-dom";
type Props = {};

const ContentScript = (props: Props) => {
  return (
    <div>
      <img src="icon.png" />
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(<ContentScript />, root);
