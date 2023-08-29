import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";
import React from "react";

export default function RadioGroup(props) {
  const { name, label, value, onChange, options } = props;

  return (
    <FormControl>
      <FormLabel label={label}>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel
            key={option.id}
            value={option.id}
            control={<Radio />}
            label={option.title}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
