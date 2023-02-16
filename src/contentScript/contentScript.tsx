import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./overlay.css";
import Draggable from "react-draggable";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { Button, Select, SelectChangeEvent } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { axiosPrivate } from "../api/axios";

type Props = {};

const ContentScript = (props: Props) => {
  const [popup, setPopup] = useState(true);
  const [loading, setLoading] = useState(false);
  const [age, setAge] = React.useState("");

  const handleEmailInjection = async () => {
    const element = document.getElementsByClassName("editable");
    setLoading(true);
    try {
      const res = await axiosPrivate.get("/compose");
      element[0].innerHTML = res.data.email;
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const handlePopupClose = () => {
    setPopup(!popup);
  };
  return (
    <Draggable defaultPosition={{ x: 10, y: 400 }}>
      <div className="__overlay">
        <AttachEmailIcon fontSize="medium" onClick={handlePopupClose} />
        {popup && (
          <>
            <div className="__prompt">
              <div id="pad">
                <p>Prompt</p>
                <textarea className="textarea"></textarea>
                <Button
                  sx={{ m: 2 }}
                  variant="contained"
                  onClick={handleEmailInjection}
                >
                  Create
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Draggable>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);

ReactDOM.render(<ContentScript />, root);
