import React from "react";
import { Card } from "react-bootstrap";
import { Question } from "../../../../../../constants/types";
import useStyles from "./style";

export interface QAViewerProp {
  questions: Question[];
}

const QAViewer: React.FC<QAViewerProp> = ({ questions }) => {
  const classes = useStyles();

  return (
    <>
      {questions.map(
        ({
          questionId,
          title,
          body,
          questionTime,
          answer,
          anonymousQuestion,
          questioner,
        }) => (
          <Card className={classes.reviewCard} key={questionId}>
            <Card.Body className={classes.reviewBody}>
              <div className={classes.bodyHeader}>
                <div className={classes.headerLeft}>
                  <span className={classes.extraLargeText}>{title}</span>
                  <span className={classes.smallText}>
                    {new Date(questionTime).toLocaleString()}
                  </span>
                </div>
                <div className={classes.headerRight}>
                  <span className={classes.mediumText}>
                    {anonymousQuestion === false && questioner
                      ? questioner.userName
                      : "Anonymous"}
                  </span>
                </div>
              </div>
              <Card.Text className={classes.bodyText}>{body}</Card.Text>
              {answer && (
                <>
                  <hr />
                  <div className={classes.bodyHeader}>
                    <div className={classes.headerLeft}>
                      <span className={classes.largeText}>
                        Committee Response
                      </span>
                    </div>
                    <div className={classes.headerRight}>
                      <span className={classes.mediumText}>Organiser</span>
                    </div>
                  </div>
                  <Card.Text className={classes.bodyText}>{answer}</Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        )
      )}
    </>
  );
};

export default QAViewer;
