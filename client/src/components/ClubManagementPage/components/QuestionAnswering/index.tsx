import React from "react";
import { Question } from "../../../../constants/types";
// import useStyles from "./style";

export interface QuestionAnsweringProp {
  clubId: string;
  questions: Question[];
}

const QuestionAnswering: React.FC<QuestionAnsweringProp> = ({
  clubId,
  questions,
}) => {
  // const classes = useStyles();

  console.log(questions);
  return <p>clubId: {clubId}</p>;
};

export default QuestionAnswering;
