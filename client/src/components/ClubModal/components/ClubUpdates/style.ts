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
    marginBottom: "24px",
  },
  reviewCard: {
    borderWidth: 0,
    marginTop: "12px",
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
  largeText: {
    fontWeight: 500,
    fontSize: "16px",
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
    color: "#6B7178",
    marginBottom: "8px",
  },
}));

export default useStyles;
