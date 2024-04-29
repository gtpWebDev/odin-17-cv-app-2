import { useState } from "react";
import GTP_TextInput from "./GTP_TextInput.jsx";
import GTP_DateInput from "./GTP_DateInput.jsx";
import { GTP_Button } from "./GTP_Button.jsx";
import styles from "./EditPersonal.module.css";
import caretImg from "../assets/menu-down.svg";

function EditEmployment({ data, updateData }) {
  const [company, setCompany] = useState(data.company);
  const [position, setPosition] = useState(data.position);
  const [responsibilities, setResponsibilities] = useState(
    data.responsibilities
  );
  const [startDate, setStartDate] = useState(data.startDate);
  const [endDate, setEndDate] = useState(data.endDate);

  const cbfn_companyInput = (text) => setCompany(text);
  const cbfn_positionInput = (text) => setPosition(text);
  const cbfn_responsibilitiesInput = (text) => setResponsibilities(text);
  const cbfn_startDateInput = (text) => setStartDate(text);
  const cbfn_endDateInput = (text) => setEndDate(text);

  const [showInputs, setShowInputs] = useState(false);

  const cbfn_enableEdit = () => {
    setShowInputs(!showInputs);
  };

  const buttonOnClickFn = () =>
    updateData(company, position, responsibilities, startDate, endDate);

  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.selectorBar} ${
          showInputs ? styles.editOpen : styles.editClosed
        }`}
        onClick={cbfn_enableEdit}
      >
        <div id={styles.selectorText}>Employment details</div>
        <img id={styles.selectorCaret} src={caretImg} alt="Menu down caret" />
      </div>

      {showInputs && (
        <div className={styles.editSection}>
          <GTP_TextInput
            label="Company"
            initialValue={company}
            onChangeFn={cbfn_companyInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_TextInput
            label="Position"
            initialValue={position}
            onChangeFn={cbfn_positionInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_TextInput
            label="Responsibilities"
            initialValue={responsibilities}
            onChangeFn={cbfn_responsibilitiesInput}
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

export default EditEmployment;
