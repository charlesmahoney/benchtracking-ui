import Consultant from "./Consultant";
import classes from "./ConsultantList.module.css";

function ConsultantList(props) {
  return (
    <ul className={classes.list}>
      {props.conslist.map((consultant) => (
        <Consultant
          key={consultant._id}
          employeeNumber={consultant.employeeNumber}
          firstName={consultant.firstName}
          lastName={consultant.lastName}
          displayName={consultant.displayName}
          jobTitle={consultant.jobTitle}
          businessUnit={consultant.businessUnit}
          email={consultant.email}
          phoneNumber={consultant.phoneNumber}
          phoneType={consultant.phoneType}
          gender={consultant.gender}
          isPermanent={consultant.isPermanent}
          lastUtilDate={consultant.lastUtilDate}
          skillSet={consultant.skillSet}
          resumeLink={consultant.resumeLink}
          comment={consultant.comment}
        />
      ))}
    </ul>
  );
}

export default ConsultantList;
