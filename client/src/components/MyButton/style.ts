import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  myButton: {
    backgroundColor: theme.colorPrimary,
    borderWidth: 0,
    borderRadius: theme.borderRadius,
    margin: {
      top: 5,
      right: 0,
      bottom: 0,
      left: "1rem",
    },
  },
}));

export default useStyles;
