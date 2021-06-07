import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  sidebar: {
    width: `100%`,
    height: `100%`,
  },
  sidebarContainer: {
    padding: `20px 20px`,
    height: `calc(100vh - 53px)`,
    overflow: `hidden`,
    background: theme.primary,
    borderRight: `1px solid ${theme.separator}`,
  },
  icon: {
    marginRight: `8px`,
  },
  button: {
    marginBottom: `8px`,
    padding: `8px`,

    borderRadius: theme.radius,
    border: 0,

    backgroundColor: theme.inactive,
    color: theme.text,

    display: `flex`,
    width: `100%`,
    alignItems: `center`,

    fontWeight: `400`,
    fontSize: `15px`,
    textAlign: `left`,

    "&:active": {
      backgroundColor: `${theme.active} !important`,
      color: theme.invertText,
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
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  },
}));

export default useStyles;
