import React from "react";
import { SocialMedia } from "../../../../constants/types";
import SocialMediaCard from "./components/SocialMediaCard";
import SocialMediaFiller from "./components/SocialMediaFiller";
import useStyles from "./style";

export interface SocialMediaProp {
  clubColor: string;
  socialMedia?: SocialMedia;
}

const ClubSocialMedia: React.FC<SocialMediaProp> = ({
  clubColor,
  socialMedia,
}) => {
  const classes = useStyles();
  let body = <p>No social media provided.</p>;

  if (socialMedia) {
    const {
      facebook,
      twitter,
      instagram,
      website,
      discord,
      whatsapp,
      messager,
    } = socialMedia;

    body = (
      <>
        {twitter && (
          <SocialMediaCard
            icon={"twitter"}
            title={"Twitter"}
            link={twitter}
            clubColor={clubColor}
          />
        )}
        {discord && (
          <SocialMediaCard
            icon={"discord"}
            title={"Discord"}
            link={discord}
            clubColor={clubColor}
          />
        )}
        {facebook && (
          <SocialMediaCard
            icon={"facebook"}
            title={"Facebook"}
            link={facebook}
            clubColor={clubColor}
          />
        )}
        {instagram && (
          <SocialMediaCard
            icon={"instagram"}
            title={"Instagram"}
            link={instagram}
            clubColor={clubColor}
          />
        )}
        {whatsapp && (
          <SocialMediaCard
            icon={"whatsapp"}
            title={"WhatsApp"}
            link={whatsapp}
            clubColor={clubColor}
          />
        )}
        {messager && (
          <SocialMediaCard
            icon={""}
            title={"Messenger"}
            link={messager}
            clubColor={clubColor}
          />
        )}
        {website && (
          <SocialMediaCard
            icon={""}
            title={"Website"}
            link={website}
            clubColor={clubColor}
          />
        )}
      </>
    );
  }
  return (
    <>
      <span className={classes.sectionHeading}>{`Social Media`}</span>
      <hr className={classes.divider} />
      <div className={classes.cards}>
        {body}
        <SocialMediaFiller />
      </div>
    </>
  );
};

export default ClubSocialMedia;
