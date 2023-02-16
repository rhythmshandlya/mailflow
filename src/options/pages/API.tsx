import {
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  Button,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";

type Props = {};

export default function General({}: Props) {
  const [gptAPIKey, setGptAPIKey] = useState("");
  return (
    <div className="__component_wrapper">
      <h3>API Keys</h3>
      <FormControl fullWidth variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">
          ChatGPT API key
        </InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              <KeyIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained">
        <SaveIcon fontSize="small" sx={{ mr: 1 }} />
        Save
      </Button>
    </div>
  );
}
