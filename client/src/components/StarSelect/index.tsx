import React from "react";
import useStyles from "./style";
import { StarFill, Star } from "react-bootstrap-icons";

export interface StarSelectProps {
  rating: number;
  setRating: (rating: number) => void;
}
const StarSelect: React.FC<StarSelectProps> = ({ rating, setRating }) => {
  const classes = useStyles();

  return (
    <div className={classes.starBox}>
      {Array(5)
        .fill(null)
        .map((_, i) => {
          const handleClick = () => {
            setRating(i + 1);
          };

          if (rating >= 1) {
            rating--;
            return <StarFill size={24} key={i} onClick={handleClick} />;
          }
          rating--;
          return <Star size={24} key={i} onClick={handleClick} />;
        })}
    </div>
  );
};

export default StarSelect;
