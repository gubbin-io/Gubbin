import React from "react";
import useStyles from "./style";

export interface SocialMediaFillerProp {}

const SocialMediaFiller: React.FC<SocialMediaFillerProp> = () => {
  const classes = useStyles();

  return <div className={classes.emptyFiller}></div>;
};

export default SocialMediaFiller;
