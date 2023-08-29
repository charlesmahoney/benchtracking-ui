import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

export function useForm(initialState, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
  };

  return { values, setValues, errors, setErrors, handleInputChange, resetForm };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl.root": {
      width: "60%",
      margin: theme.spacing(1),
    },
  },
}));

export function Form(props) {
  const classes = useStyles();

  const { children, onSubmit } = props;

  return (
    <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
      {children}
    </form>
  );
}
