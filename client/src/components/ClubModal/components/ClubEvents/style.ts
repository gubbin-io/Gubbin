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
  eventCard: {
    marginTop: "24px",
    "& .react_tinylink_card": {
      borderRadius: `${theme.radius} !important`,
      borderColor: theme.separator,
      boxShadow: "none",
      marginTop: "6px",
      maxWidth: "800px",
    },
  },
  largeText: {
    fontWeight: 600,
    fontSize: "18px",
    letterSpacing: "0.1px",
    lineHeight: "100%",
    marginBottom: "8px",
  },
}));

export default useStyles;
