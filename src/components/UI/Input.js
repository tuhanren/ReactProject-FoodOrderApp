import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* spread operator made sure that all the key-value pairs of the props are added to <input /> as a prop*/}
    </div>
  );
};

export default Input;
