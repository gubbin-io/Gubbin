import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  card: {
    flex: "1 0 21%",
    borderRadius: theme.radius,
    backgroundColor: theme.inactive,
    width: "100%",
    borderWidth: 0,
    padding: "12px",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  clubIcon: {
    width: "48px",
    height: "48px",
    marginRight: "12px",
    borderRadius: theme.radius,
  },
  title: {
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: "22px",
  },
  tagline: {
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "17px",
  },
  clubDetails: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "left",
    marginRight: "8px",
  },
}));

export default useStyles;
