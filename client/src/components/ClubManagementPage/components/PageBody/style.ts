import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  body: {
    marginTop: "32px",
    display: "flex",
    alignItems: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: "0px 16px",
  },
}));

export default useStyles;
