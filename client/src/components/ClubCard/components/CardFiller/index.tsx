import React from "react";
import useStyles from "./style";

export interface CardFillerProp {}

const CardFiller: React.FC<CardFillerProp> = () => {
  const classes = useStyles();

  return <div className={classes.emptyFiller}></div>;
};

export default CardFiller;
