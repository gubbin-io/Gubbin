import React, { useState } from "react";
import useStyles from "./style";

export interface SocialMediaProp {
  clubColor: string;
}

const ClubSocialMedia: React.FC<SocialMediaProp> = ({ clubColor }) => {
  const classes = useStyles();

  return (
    <>
      <span className={classes.sectionHeading}>{`Social Media`}</span>
      <hr className={classes.divider} />
      <span> To be completed ... </span>
    </>
  );
};

export default ClubSocialMedia;
