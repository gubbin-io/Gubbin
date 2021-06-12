import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
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
    color: "#ADB5BD",
    marginBottom: "8px",
  },
}));

export default useStyles;
