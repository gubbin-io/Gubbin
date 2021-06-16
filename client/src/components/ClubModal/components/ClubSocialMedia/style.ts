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
    marginTop: "8px",
    gap: "8px",
    "@media ( max-width: 880px)": {
      // One item per row
      "& > div": {
        flexBasis: "100%",
      },
    },
  },
  largeText: {
    fontWeight: 600,
    fontSize: "18px",
    letterSpacing: "0.1px",
    lineHeight: "100%",
  },
  committeeSection: {
    marginTop: "20px",
  },
  committeeBody: {
    marginTop: "8px",
  },
  reviewCard: {
    borderWidth: 0,
    marginTop: "12px",
    width: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  reviewBody: {
    backgroundColor: theme.inactive,
    borderRadius: theme.radius,
    padding: 12,
  },
  bodyHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
  },
  headerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  bodyText: {
    fontSize: "15px",
  },
  extraLargeText: {
    fontWeight: 500,
    letterSpacing: "0.1px",
    fontSize: "18px",
    lineHeight: "100%",
    marginBottom: "8px",
  },
  mediumText: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "14px",
    color: "#ADB5BD",
  },
  smallText: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "15px",
    textTransform: "uppercase",
    color: "#ADB5BD",
  },
}));

export default useStyles;
