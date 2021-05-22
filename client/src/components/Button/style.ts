import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  myButton: {
    backgroundColor: theme.colorPrimary,
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
}));

export default useStyles;
