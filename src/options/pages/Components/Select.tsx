import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type Obj = { name: string; value: string };
type Props = {
  dropDown: Obj[];
  type: string;
};

export default function SelectSmall({ dropDown, type }: Props) {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl size="small">
      <InputLabel id="demo-select-small">{type}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label={type}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {dropDown.map((element, index) => {
          return (
            <MenuItem value={element.value} key={index}>
              {element.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
