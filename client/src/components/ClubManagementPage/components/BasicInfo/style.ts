import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  pickerBox: {
    borderRadius: "8px",
    "& > div": {
      borderRadius: "8px !important",
      boxshadow: "none !important",
      WebkitBoxShadow: "none !important",
      backgroundColor: "#F8F9FA !important",
      fontWeight: "600",
      textTransform: "uppercase",
    },
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: "15px",
    fontWeight: "500",
  },
  submitButton: ({ clubColor }: any) => ({
    backgroundColor: "#000000", //Note: Change later to use theme
    color: "#FFFFFF", // Note: Change later to use theme

    borderRadius: theme.radius,
    borderWidth: 0,
    padding: 8,
    marginTop: 16,
    width: "208px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontWeight: `500`,
    fontSize: `15px`,
    textAlign: `left`,

    "&:active": {
      backgroundColor: `${clubColor} !important`, //TODO: Use club colou
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
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`, //TODO: Use club colour
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  }),
}));

export default useStyles;
