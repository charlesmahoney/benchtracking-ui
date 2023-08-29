import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Card from "../../components/ui/Card";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/ui/useForm";

const businessUnits = [
  { id: "0", title: "Select a Business Unit" },
  { id: "CPS", title: "CPS" },
  { id: "HR", title: "Human Resources" },
  { id: "IT", title: "Information Technology" },
];

const phoneTypes = [
  { id: "H", title: "Home" },
  { id: "M", title: "Mobile" },
];

const gender = [
  { id: "M", title: "Male" },
  { id: "F", title: "Female" },
  { id: "O", title: "Other" },
];

const employeeStatus = [
  { id: "true", title: "Active" },
  { id: "false", title: "InActive" },
];

var initialValues = {
  _id: "",
  employeeNumber: "",
  firstName: "",
  lastName: "",
  displayName: "",
  jobTitle: "",
  isPermanent: "",
  email: "",
  gender: "M",
  phoneNumber: "",
  phoneType: "M",
  businessUnit: "0",
  skillSet: "",
  resumeLink: "",
  comments: "",
  lastUtilDate: Date.now,
  status: true,
};

export default function NewConsultantForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const { values, setValues, handleInputChange, resetForm } =
    useForm(initialValues);

  const onSubmit = () => {
    addOrEdit(values, resetForm);
  };

  useEffect(() => {
    if (recordForEdit != null) {
      setValues(recordForEdit);
    }
  }, [recordForEdit]);

  return (
    <Form onSubmit={onSubmit}>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Controls.Input
              name="employeeNumber"
              label="Employee Number:"
              fullWidth={false}
              tabIndex={1}
              value={values.employeeNumber}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="firstName"
              label="First Name:"
              fullWidth={true}
              tabIndex={3}
              value={values.firstName}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="jobTitle"
              label="Job Title:"
              fullWidth={true}
              tabIndex={5}
              value={values.jobTitle}
              onChange={handleInputChange}
            />
            <Controls.Select
              label="Business Unit:"
              name="businessUnit"
              options={businessUnits}
              fullWidth={true}
              tabIndex={7}
              value={values.businessUnit}
              onChange={handleInputChange}
            />
            <Grid item sm></Grid>
            <Controls.CheckBox
              name="isPermanent"
              label="Permanent Employee"
              value={values.isPermanent}
              fullWidth={false}
              tabIndex={9}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="resumeLink"
              label="Resume Link:"
              fullWidth={true}
              tabIndex={11}
              value={values.resumeLink}
              onChange={handleInputChange}
            />
            <Controls.RadioGroup
              name="phoneType"
              options={phoneTypes}
              value={values.phoneType}
              fullWidth={false}
              tabIndex={10}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="skillSet"
              label="Skill Set:"
              fullWidth={true}
              multiline={true}
              tabIndex={13}
              rows={6}
              value={values.skillSet}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <Controls.Input
              name="displayName"
              label="Display Name:"
              fullWidth={false}
              tabIndex="2"
              value={values.displayName}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="lastName"
              label="Last Name:"
              fullWidth={true}
              tabIndex={4}
              value={values.lastName}
              onChange={handleInputChange}
            />
            <Grid item sm></Grid>
            <Controls.Input
              name="email"
              label="Email:"
              type="email"
              tabIndex={6}
              value={values.email}
              fullWidth={true}
              onChange={handleInputChange}
            />
            <Grid item sm></Grid>
            <Controls.Select
              label="Status"
              name="status"
              options={employeeStatus}
              fullWidth={true}
              tabIndex={7}
              value={values.status}
              onChange={handleInputChange}
            />
            <Controls.RadioGroup
              name="gender"
              options={gender}
              value={values.gender}
              fullWidth={false}
              tabIndex={10}
              onChange={handleInputChange}
            />
            <Controls.DatePicker
              name="lastUtilDate"
              label="Last Util Date:"
              fullWidth={true}
              tabIndex={8}
              value={values.lastUtilDate}
              onChange={handleInputChange}
            />
            <Controls.Input
              name="phoneNumber"
              label="Phone Number:"
              value={values.phoneNumber}
              defaultCountry="us"
              fullWidth={false}
              tabIndex={12}
              onChange={handleInputChange}
            />
            <Grid item></Grid>
            <Controls.Input
              label="Comment"
              name="comments"
              fullWidth={true}
              multiline={true}
              tabIndex={14}
              rows={6}
              value={values.comments}
              onChange={handleInputChange}
            />
            <Grid container justify="flex-end">
              <Controls.Button type="submit" text="Save" />
              <Controls.Button text="Reset" color="default" />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Form>
  );
}
