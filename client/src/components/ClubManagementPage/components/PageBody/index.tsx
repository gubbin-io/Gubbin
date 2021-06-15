import React from "react";
import { Tab } from "react-bootstrap";
import { SocialMedia } from "../../../../constants/types";
import BasicInfo from "../BasicInfo";
import PageSideBar from "../PageSideBar";
import SocialMediaPage from "../SocialMedia";
import useStyles from "./style";

export interface PageBodyProp {
  clubId: string;
  clubName: string;
  description: string;
  about: string;
  themeColor: string;
  socialMedia?: SocialMedia;
}

const PageBody: React.FC<PageBodyProp> = ({
  clubId,
  clubName,
  description,
  about,
  themeColor,
  socialMedia,
}) => {
  const classes = useStyles();

  return (
    <>
      <Tab.Container defaultActiveKey="general">
        <div className={classes.body}>
          <PageSideBar clubColor={themeColor} />
          <div className={classes.content}>
            <Tab.Content>
              <Tab.Pane eventKey="general">
                <BasicInfo
                  clubId={clubId}
                  clubName={clubName}
                  description={description}
                  about={about}
                  themeColor={themeColor}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="social">
                <SocialMediaPage
                  socialMedia={socialMedia}
                  themeColor={themeColor}
                />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};

export default PageBody;
