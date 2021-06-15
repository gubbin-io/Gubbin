import React from "react";
import { Card } from "react-bootstrap";
import { Question } from "../../../../constants/types";
import ResponseEditor from "./ResponseEditor";
import useStyles from "./style";

export interface QuestionAnsweringProp {
  clubId: string;
  questions: Question[];
  themeColor: string;
}

const QuestionAnswering: React.FC<QuestionAnsweringProp> = ({
  clubId,
  questions,
  themeColor,
}) => {
  const classes = useStyles();

  console.log(questions);
  return (
    <>
      {questions.map(({ questionId, title, body, questionTime, answer }) => (
        <>
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
                  <span className={classes.mediumText}>Member</span>
                </div>
              </div>
              <Card.Text className={classes.bodyText}>{body}</Card.Text>
            </Card.Body>
          </Card>
          <ResponseEditor response={answer} themeColor={themeColor} />
        </>
      ))}
    </>
  );
};

export default QuestionAnswering;
