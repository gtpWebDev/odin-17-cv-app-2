import styles from "./Display.module.css";

function Display(props) {
  return (
    <div className={styles.container}>
      <DisplayPersonal displayData={props.personalDetails} />
      <DisplayEducation displayData={props.educationDetails} />
      <DisplayEmployment displayData={props.employmentDetails} />
    </div>
  );
}

function DisplayPersonal({ displayData }) {
  return (
    <section className={styles.personalContainer}>
      <h2>Personal Details</h2>
      <p>{displayData.name}</p>
      <p>{displayData.email}</p>
      <p>{displayData.phone}</p>
    </section>
  );
}

function DisplayEducation({ displayData }) {
  return (
    <section className={styles.educationContainer}>
      <h2>Education</h2>
      <h3>{displayData.school}</h3>
      <p>Subject: {displayData.subject}</p>
      <p>
        {displayData.startDate} to {displayData.endDate}
      </p>
    </section>
  );
}

function DisplayEmployment({ displayData }) {
  return (
    <section className={styles.employmentContainer}>
      <h2>Employment</h2>
      <h3>{displayData.company}</h3>
      <p>Position: {displayData.position}</p>
      <p>Responsibilities: {displayData.responsibilities}</p>
      <p>
        {displayData.startDate} to {displayData.endDate}
      </p>
    </section>
  );
}

export default Display;
