import React from "react";
import { Button } from "react-bootstrap";
import {
  Globe2,
  Twitter,
  Instagram,
  Facebook,
  Discord,
  Whatsapp,
  Messenger,
} from "react-bootstrap-icons";
import useStyles from "./style";

export interface SocialMediaCardProp {
  clubColor: string;
  title: string;
  icon: string;
  link: string;
}

const SocialMediaCard: React.FC<SocialMediaCardProp> = ({
  clubColor,
  title,
  icon,
  link,
}) => {
  const classes = useStyles({ clubColor });
  function iconComponent(icon: string): any {
    switch (icon) {
      case "twitter":
        return <Twitter className={classes.icon} />;
      case "instagram":
        return <Instagram className={classes.icon} />;
      case "facebook":
        return <Facebook className={classes.icon} />;
      case "messenger":
        return <Messenger className={classes.icon} />;
      case "discord":
        return <Discord className={classes.icon} />;
      case "whatsapp":
        return <Whatsapp className={classes.icon} />;
      default:
        return <Globe2 className={classes.icon} />;
    }
  }

  return (
    <>
      <div className={classes.container}>
        <Button
          className={classes.socialButton}
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          {iconComponent(icon)}
          {title}
        </Button>
      </div>
    </>
  );
};

export default SocialMediaCard;
