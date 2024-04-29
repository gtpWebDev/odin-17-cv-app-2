/*

  A general input text component.
  
  Receives props:
  - a label
  - an onChangeFn which will be called on the input text being changed
  - style parameters to customise within the general consistent style of the component

  Uses local variables to set the general layout style:
  - these should reference site-wide constants if appropriate


*/

import { useState } from "react";

const localStyles = {
  backgroundColor: "rgb(255,200,250)",
  inputBackgroundColor: "rgb(251, 240, 250)",
  fontColor: "rgb(0,0,0)",
  borderStyle: "2px solid black",
  borderRadius: "15px",
  containerMargin: "5px",
  containerPadding: "5px 10px",
};

const GTP_DateInput = (props) => {
  const containerStyle = {
    // internal values
    display: "grid",
    alignItems: "center",
    border: localStyles.borderStyle,
    borderRadius: localStyles.borderRadius,
    padding: localStyles.containerPadding,
    margin: localStyles.containerMargin,
    backgroundColor: localStyles.backgroundColor,
    //prop values
    minWidth: props.totalWidth,
    height: props.height,
    gridTemplateColumns: `${props.labelWidth} 1fr`,
    fontSize: props.fontSize,
  };

  const labelStyle = {
    color: localStyles.fontColor,
    textAlign: "left",
  };

  const inputStyle = {
    backgroundColor: localStyles.inputBackgroundColor,
    color: localStyles.fontColor,
    paddingLeft: "5px",
    height: `calc(0.8*${props.height})`,
    fontSize: props.fontSize,
  };

  const [dateValue, setDateValue] = useState(props.initialValue);

  const handleChange = (event) => {
    const val = event.target.value;
    setDateValue(val);
    props.onChangeFn(val);
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle} htmlFor="">
        {props.label}:
      </label>
      <input
        style={inputStyle}
        value={dateValue}
        onChange={handleChange}
        type="date"
      />
    </div>
  );
};

export { GTP_DateInput as default };
