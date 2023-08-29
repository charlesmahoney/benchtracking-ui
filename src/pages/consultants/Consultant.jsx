import classes from "./Consultant.module.css";

function Consultant(props) {
  return (
    <ul>
      <div className={classes.content}>{props.employeeNumber}</div>
      <div className={classes.content}>{props.firstName}</div>
      <div className={classes.content}>{props.lastName}</div>
      <div className={classes.content}>{props.displayName}</div>
      <div className={classes.content}>{props.jobTitle}</div>
      <div className={classes.content}>{props.businessUnit}</div>
      <div className={classes.content}>{props.email}</div>
      <div className={classes.content}>{props.phoneNumber}</div>
      <div className={classes.content}>{props.phoneType}</div>
      <div className={classes.content}>{props.lastUtilDate}</div>
      <div className={classes.content}>{props.isPermanent}</div>
      <div className={classes.content}>{props.gender}</div>
      <div className={classes.content}>{props.resumeLink}</div>
      <div className={classes.content}>{props.comment}</div>
      <div className={classes.content}>{props.skillSet}</div>
    </ul>
  );
}

export default Consultant;
