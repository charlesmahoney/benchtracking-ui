import React from "react";
import { TextField } from "@material-ui/core";

export default function Input(props) {
  const {
    name,
    maxRows,
    tabIndex,
    multiline,
    label,
    value,
    onChange,
    ...other
  } = props;

  return (
    <div>
      <TextField
        // variant="outlined"
        label={label}
        name={name}
        multiline={multiline}
        size="small"
        value={value}
        tabIndex={tabIndex}
        margin="normal"
        maxRows={maxRows}
        onChange={onChange}
        {...other}
      />
    </div>
  );
}
