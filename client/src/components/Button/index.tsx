import React from "react";
import Button from "react-bootstrap/Button";
import useStyles from "./style";
import { useTheme } from "react-jss";

const MyButton: React.FC<any> = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Button className={classes.myButton} variant="primary">
      {children}
    </Button>
  );
};

export default MyButton;
