/*
  Generic button component. Receives props:
  - a buttonText
  - an onClickFn
  - width, height and fontSize
*/

import styles from "./GTP_Button.module.css";

const GTP_Button = (props) => {
  const buttonStyle = {
    width: props.width,
    minHeight: props.height,
    fontSize: props.fontSize,
  };

  // console.log(`Re-rendering input text with label ${props.label}`);

  return (
    <button
      className={styles.templateButton}
      style={buttonStyle}
      onClick={props.onClickFn}
    >
      {props.buttonText}
    </button>
  );
};

export { GTP_Button };
