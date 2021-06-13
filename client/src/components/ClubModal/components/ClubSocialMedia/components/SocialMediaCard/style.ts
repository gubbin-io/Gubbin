import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  container: {
    flex: "1 0 40%",
  },
  icon: {
    marginRight: "8px",
  },
  socialButton: ({ clubColor }: any) => ({
    backgroundColor: theme.inactive,
    color: theme.text,

    width: "100%",
    padding: `8px`,

    borderRadius: theme.radius,
    borderWidth: 0,

    display: `flex`,
    alignItems: "center",
    justifyContent: "center",

    fontWeight: `400`,
    fontSize: `15px`,

    "&:active": {
      backgroundColor: `${clubColor} !important`,
      color: `${theme.invertText} !important`,
      fontWeight: `500`,
    },
    "&.active": {
      backgroundColor: `${clubColor} !important`,
      color: `${theme.invertText} !important`,
      fontWeight: `500`,
    },
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
}));

export default useStyles;
