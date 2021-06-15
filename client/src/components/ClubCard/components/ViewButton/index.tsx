import React from "react";
import { Button } from "react-bootstrap";
import useStyles from "./style";

export interface ViewButtonProp {
  onClick: () => void;
  clubColor: string;
}

const ViewButton: React.FC<ViewButtonProp> = ({ onClick, clubColor }) => {
  const classes = useStyles({ clubColor });

  return (
    <Button
      className={classes.joinButton}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      style={{
        flexShrink: 0,
        marginLeft: "auto",
        height: "28px",
        width: "70px",
      }}
    >
      View
    </Button>
  );
};

export default ViewButton;
