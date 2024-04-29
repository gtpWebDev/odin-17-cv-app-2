import { useState } from "react";
import GTP_TextInput from "./GTP_TextInput.jsx";
import { GTP_Button } from "./GTP_Button.jsx";
import styles from "./EditPersonal.module.css";
import caretImg from "../assets/menu-down.svg";

// const inputLabels = ["Name", "E-mail", "Phone Number"];
function EditPersonal({ personalDetails, updateData }) {
  const [name, setName] = useState(personalDetails.name);
  const [email, setEmail] = useState(personalDetails.email);
  const [phone, setPhone] = useState(personalDetails.phone);

  const [showInputs, setShowInputs] = useState(false);

  const cbfn_nameInput = (text) => setName(text);
  const cbfn_emailInput = (text) => setEmail(text);
  const cbfn_phoneInput = (text) => setPhone(text);

  const cbfn_enableEdit = () => {
    setShowInputs(!showInputs);
  };

  const buttonOnClickFn = () => updateData(name, email, phone);

  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.selectorBar} ${
          showInputs ? styles.editOpen : styles.editClosed
        }`}
        onClick={cbfn_enableEdit}
      >
        <div id={styles.selectorText}>Personal details</div>
        <img id={styles.selectorCaret} src={caretImg} alt="Menu down caret" />
      </div>

      {showInputs && (
        <div className={styles.editSection}>
          <GTP_TextInput
            label="Name"
            initialValue={name}
            onChangeFn={cbfn_nameInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />

          <GTP_TextInput
            label="E-mail"
            initialValue={email}
            onChangeFn={cbfn_emailInput}
            labelWidth="100px"
            totalWidth="300px"
            height="40px"
            fontSize="14px"
          />
          <GTP_TextInput
            label="Phone"
            initialValue={phone}
            onChangeFn={cbfn_phoneInput}
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

export default EditPersonal;
