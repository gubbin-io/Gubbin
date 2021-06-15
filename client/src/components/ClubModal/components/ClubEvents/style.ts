import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  sectionHeading: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "29px",
    letterSpacing: "-1.25px",
  },
  divider: {
    marginTop: "8px",
    marginBottom: "16px",
  },
}));

export default useStyles;
