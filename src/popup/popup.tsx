import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import AndroidThemeSwitch from "./components/AndroidThemeSwitch";
import "./popup.css";

const App: React.FC<{}> = () => {
  const goToOptionsPage = () => {
    chrome.runtime.openOptionsPage();
  };

  return (
    <div className="__popup_container">
      <div className="__popup_heading">
        <div className="flex-row">
          <img src="icon.png" className="icon" />
          <div className="__heading_container">
            <h1>Mailflow</h1>
            <span className="__pop_subheading">Compose mails instantly</span>
          </div>
        </div>
      </div>
      <hr className="red-hr" />
      <Box sx={{ m: 1.5 }}>
        <Alert sx={{ m: "0 0.5" }} severity="error">
          To compose relevant emails, please provide the details of the sender
          on the options page{" "}
          <Button
            size="small"
            sx={{ m: -0.5 }}
            onClick={goToOptionsPage}
            style={{ textTransform: "none" }}
          >
            options page
          </Button>
          !
        </Alert>
        <AndroidThemeSwitch />
      </Box>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
