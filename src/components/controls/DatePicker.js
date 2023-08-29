import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import moment from "moment";

export default function DatePicker(props) {
  const { name, value, label, onChange } = props;

  const convert = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        style={{ minHeight: "20px" }}
        disableToolbar
        variant="inline"
        // inputVariant="outlined"
        label={label}
        value={moment.utc(value).format("MM/DD/yyyy")}
        name={name}
        size="medium"
        margin="normal"
        format="MM/dd/yyyy"
        onChange={(date) => onChange(convert(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}
