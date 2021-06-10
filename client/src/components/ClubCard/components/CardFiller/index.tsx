import React from "react";
import useStyles from "./style";

export interface ComponentProp {}

const Component: React.FC<ComponentProp> = ({}) => {
  const classes = useStyles();

  return <div className={classes.emptyFiller} />;
};

export default Component;
