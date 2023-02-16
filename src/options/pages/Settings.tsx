import { FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { Android12Switch } from "./Components/AndroidThemeSwitch";

function Switches() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Compose Emails"
      />
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Summarize Emails"
      />
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Encrypt Emails"
      />
    </FormGroup>
  );
}

type Props = {};

function Settings({}: Props) {
  return (
    <div className="__component_wrapper">
      <h3>Settings</h3>
      <Switches />
    </div>
  );
}

export default Settings;
