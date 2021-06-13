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
  icon: {
    marginRight: "8px",
  },
  cards: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    gap: "8px",
    "@media ( max-width: 880px)": {
      // One item per row
      "& > div": {
        flexBasis: "100%",
      },
    },
  },
}));

export default useStyles;
