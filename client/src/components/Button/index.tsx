import React from "react";
import Button from "react-bootstrap/Button";
import useStyles from "./style";

const MyButton: React.FC<any> = ({ children }) => {
  const classes = useStyles();
  return (
    <Button className={classes.myButton} variant="primary">
      {children}
    </Button>
  );
};

export default MyButton;
