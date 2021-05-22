import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    color: "white",
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: "1rem",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
});

export default useStyles;
