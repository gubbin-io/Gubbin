import React from "react";
import { render } from "react-dom";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    color: "green",
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: "1rem",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const Button = ({ children }: any) => {
  const classes = useStyles();
  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{children}</span>
    </button>
  );
};

export default Button;
