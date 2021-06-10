import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  card: {
    flex: "1 0 26%",
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
  },
  joinButton: {
    marginLeft: "auto",
    height: "28px",
    width: "70px",

    backgroundColor: "#000000", //Note: Change later to use theme
    color: "#FFFFFF", // Note: Change later to use theme

    borderRadius: "14px",
    borderWidth: 0,
    padding: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "1px",
    lineHeight: "18px",
    textTransform: "uppercase",

    "&:active": {
      backgroundColor: `#FF0000 !important`,
      color: "#FFFFFF",
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: "#343A40",
      color: "#FFFFFF",
    },
    "&:focus": {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      boxShadow: `0 0 0 0.2rem #FF00007F !important`,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  },
}));

export default useStyles;
