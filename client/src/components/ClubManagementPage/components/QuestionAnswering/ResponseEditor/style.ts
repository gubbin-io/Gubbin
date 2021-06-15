import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  longButton: ({ clubColor }: any) => ({
    width: "208px",
    backgroundColor: theme.inactive,
    color: theme.text,

    marginBottom: "12px",
    padding: `8px`,

    borderRadius: `${theme.radius} !important`,
    border: 0,

    "&:active": {
      backgroundColor: `${clubColor} !important`,
      color: `${theme.invertText} !important`,
      fontWeight: `500`,
    },

    display: `flex`,
    alignItems: "center",

    fontWeight: `400`,
    fontSize: `15px`,
    textAlign: `left`,

    "&:hover": {
      backgroundColor: theme.inactiveHover,
      color: theme.text,
    },
    "&:focus:hover": {
      backgroundColor: theme.inactiveHover,
      color: theme.text,
    },
    "&:focus": {
      backgroundColor: theme.inactive,
      color: theme.text,
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  }),
  icon: {
    marginRight: "8px",
  },
  submitButton: ({ clubColor }: any) => ({
    backgroundColor: "#000000", //Note: Change later to use theme
    color: "#FFFFFF", // Note: Change later to use theme

    borderRadius: theme.radius,
    borderWidth: 0,
    padding: 8,
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
  label: {
    fontSize: "15px",
    fontWeight: "500",
  },
}));

export default useStyles;
