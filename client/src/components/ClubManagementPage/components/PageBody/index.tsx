import React from "react";
import { Tab } from "react-bootstrap";
import { Question, SocialMedia } from "../../../../constants/types";
import BasicInfo from "../BasicInfo";
import PageSideBar from "../PageSideBar";
import QuestionAnswering from "../QuestionAnswering";
import Updates from "../Updates";
import SocialMediaPage from "../SocialMedia";
import useStyles from "./style";

export interface PageBodyProp {
  clubId: string;
  clubName: string;
  description: string;
  about: string;
  themeColor: string;
  questions: Question[];
  socialMedia?: SocialMedia;
}

const PageBody: React.FC<PageBodyProp> = ({
  clubId,
  clubName,
  description,
  about,
  themeColor,
  questions,
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
                  clubId={clubId}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="questions">
                <QuestionAnswering
                  questions={questions}
                  clubId={clubId}
                  themeColor={themeColor}
                />
              </Tab.Pane>

              <Tab.Pane eventKey="update">
                <Updates clubId={clubId} themeColor={themeColor} />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </>
  );
};

export default PageBody;
