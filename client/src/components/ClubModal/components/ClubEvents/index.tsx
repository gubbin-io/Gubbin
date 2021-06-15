import React from "react";
import useStyles from "./style";

export interface ClubEventsProp {}

const ClubEvents: React.FC<ClubEventsProp> = ({}) => {
  const classes = useStyles();

  return (
    <>
      <span className={classes.sectionHeading}>{`Recent Events`}</span>
      <hr className={classes.divider} />
    </>
  );
};

export default ClubEvents;
