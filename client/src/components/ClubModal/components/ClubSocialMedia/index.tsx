import React, { useState } from "react";
import SocialMediaCard from "./components/SocialMediaCard";
import SocialMediaFiller from "./components/SocialMediaFiller";
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
      <div className={classes.cards}>
        <SocialMediaCard
          icon={"twitter"}
          title={"Twitter"}
          link={"https://twitter.com"}
          clubColor={clubColor}
        />
        <SocialMediaCard
          icon={"discord"}
          title={"Discord Server"}
          link={"https://discord.com"}
          clubColor={clubColor}
        />
        <SocialMediaCard
          icon={"facebook"}
          title={"Facebook Group"}
          link={"https://facebook.com"}
          clubColor={clubColor}
        />
        <SocialMediaCard
          icon={"instagram"}
          title={"Instagram Profile"}
          link={"https://instagram.com"}
          clubColor={clubColor}
        />
        <SocialMediaCard
          icon={"whatsapp"}
          title={"WhatsApp Group Chat"}
          link={"https://web.whatsapp.com"}
          clubColor={clubColor}
        />
        <SocialMediaCard
          icon={""}
          title={"Website"}
          link={"https://example.com"}
          clubColor={clubColor}
        />
        <SocialMediaFiller />
      </div>
    </>
  );
};

export default ClubSocialMedia;
