import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from "@material-ui/core";
import React from "react";

export default function Select(props) {
  const { name, label, value, onChange, options, ...other } = props;

  return (
    <FormControl style={{ minWidth: 200 }}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect
        name={name}
        label={label}
        value={value}
        size="small"
        fullWidth={true}
        {...other}
        onChange={onChange}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}
