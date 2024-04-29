import { useState } from "react";
import GTP_TextInput from "./GTP_TextInput.jsx";
import GTP_DateInput from "./GTP_DateInput.jsx";
import { GTP_Button } from "./GTP_Button.jsx";
import styles from "./EditPersonal.module.css";
import caretImg from "../assets/menu-down.svg";

function EditEducation({ data, updateData }) {
  const [school, setSchool] = useState(data.school);
  const [subject, setSubject] = useState(data.subject);
  const [startDate, setStartDate] = useState(data.startDate);
  const [endDate, setEndDate] = useState(data.endDate);

  const cbfn_schoolInput = (text) => setSchool(text);
  const cbfn_subjectInput = (text) => setSubject(text);
  const cbfn_startDateInput = (text) => setStartDate(text);
  const cbfn_endDateInput = (text) => setEndDate(text);

  const [showInputs, setShowInputs] = useState(false);

  const cbfn_enableEdit = () => {
    setShowInputs(!showInputs);
  };

  const buttonOnClickFn = () => updateData(school, subject, startDate, endDate);

  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.selectorBar} ${
          showInputs ? styles.editOpen : styles.editClosed
        }`}
        onClick={cbfn_enableEdit}
      >
        <div id={styles.selectorText}>Education details</div>
        <img id={styles.selectorCaret} src={caretImg} alt="Menu down caret" />
      </div>

      {showInputs && (
        <div className={styles.editSection}>
          <GTP_TextInput
            label="School"
            initialValue={school}
            onChangeFn={cbfn_schoolInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_TextInput
            label="Subject"
            initialValue={subject}
            onChangeFn={cbfn_subjectInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_DateInput
            label="Start Date"
            initialValue={startDate}
            onChangeFn={cbfn_startDateInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_DateInput
            label="End Date"
            initialValue={endDate}
            onChangeFn={cbfn_endDateInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_Button
            buttonText="Submit"
            onClickFn={buttonOnClickFn}
            width="200px"
            height="30px"
            fontSize="20px"
          />
        </div>
      )}
    </div>
  );
}

export default EditEducation;
