import React from "react";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";
import useStyles from "./style";

export interface StarBoxProps {
  score: number;
}

const StarBox: React.FC<StarBoxProps> = ({ score }) => {
  const classes = useStyles();

  const stars = [];

  for (let i = 0; i < 5; i++) {
    let nextStar = <Star size={14} key={i} />;

    if (score >= 1) {
      nextStar = <StarFill size={14} key={i} />;
    } else if (score > 0) {
      nextStar = <StarHalf size={14} key={i} />;
    }
    score--;
    stars.push(nextStar);
  }

  return <div className={classes.starsBox}>{stars}</div>;
};

export default StarBox;
