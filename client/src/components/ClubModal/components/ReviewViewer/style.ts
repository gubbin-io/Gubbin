import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  reviewCard: {
    borderWidth: 0,
    marginTop: "8px",
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
    marginBottom: 16,
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
  starsBox: {},
  largeText: {
    fontWeight: 500,
    fontSize: "17px",
    lineHeight: "100%",
    marginBottom: "8px",
  },
  mediumText: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "14px",
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
