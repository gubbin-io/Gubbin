import React from "react";
import { Card } from "react-bootstrap";
import { checkProperties } from "../../../../constants/functions";
import { Committee, SocialMedia } from "../../../../constants/types";
import SocialMediaCard from "./components/SocialMediaCard";
import SocialMediaFiller from "./components/SocialMediaFiller";
import useStyles from "./style";

export interface SocialMediaProp {
  clubColor: string;
  socialMedia?: SocialMedia;
  committee: Committee[];
}

const ClubSocialMedia: React.FC<SocialMediaProp> = ({
  clubColor,
  socialMedia,
  committee,
}) => {
  const classes = useStyles();
  let body = <p>No social media provided.</p>;

  const keys = [
    "facebook",
    "twitter",
    "instagram",
    "website",
    "discord",
    "whatsapp",
    "messager",
  ];

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
      <span className={classes.sectionHeading}>{`Contact`}</span>
      <hr className={classes.divider} />
      {socialMedia && checkProperties(socialMedia, keys) && (
        <>
          <span className={classes.largeText}>Social Media</span>
          <div className={classes.cards}>
            {body}
            <SocialMediaFiller />
          </div>
        </>
      )}
      {committee.length > 0 && (
        <div className={classes.committeeSection}>
          <span className={classes.largeText}>Committee</span>
          <div className={classes.committeeBody}>
            {committee.length > 0 &&
              committee.map(({ name, role, contactInfo }, index) => (
                <Card className={classes.reviewCard} key={index}>
                  <Card.Body className={classes.reviewBody}>
                    <div className={classes.bodyHeader}>
                      <div className={classes.headerLeft}>
                        <span className={classes.extraLargeText}>{name}</span>
                        <span className={classes.smallText}>{role}</span>
                      </div>
                    </div>
                    <Card.Text className={classes.bodyText}>
                      {contactInfo}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      )}
      {!(socialMedia && checkProperties(socialMedia, keys)) &&
        committee.length === 0 && <p>No contact info provided. </p>}
    </>
  );
};

export default ClubSocialMedia;
