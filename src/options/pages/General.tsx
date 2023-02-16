import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import SelectGender from "./Components/Select";

type Props = {};

const General = (props: Props) => {
  return (
    <div className="__component_wrapper">
      <h3>General</h3>
      <TextField fullWidth label="Name" id="fullWidth" />
      <TextField fullWidth label="Profession" id="fullWidth" />
      <TextField fullWidth label="City" id="fullWidth" />
      <TextField fullWidth label="Phone" id="fullWidth" />
      <TextareaAutosize
        placeholder="Address, Post Script And Phone Number"
        style={{
          width: "100%",
          height: "200px",
          padding: "5px",
          boxSizing: "border-box",
        }}
      />
      <SelectGender
        dropDown={[
          { name: "Male", value: "1" },
          { name: "Female", value: "2" },
        ]}
        type="Gender"
      />
      <SelectGender
        dropDown={[
          { name: "Formal", value: "1" },
          { name: "Informal", value: "2" },
        ]}
        type="Tone"
      />
      <Button variant="contained">
        <SaveIcon fontSize="small" sx={{ mr: 1 }} />
        Save
      </Button>
    </div>
  );
};

export default General;
