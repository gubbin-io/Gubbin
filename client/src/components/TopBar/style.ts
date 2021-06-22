import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  icon: {
    padding: 0,
    margin: 0,
  },
  brand: {
    padding: 0,
    margin: 0,
    height: `100%`,

    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
  },
  container: {
    height: `28px`,
    padding: 0,
  },
  navbar: {
    background: theme.primary,
    borderBottom: `1px solid ${theme.separator}`,
    height: `53px`,
    padding: `12px 20px`,
  },
  dropdownMenu: {
    borderRadius: "8px",
    padding: "8px",
    WebkitBoxShadow: "0px 2px 10px 0px rgba(0,0,0,0.1)",
    boxShadow: "0px 2px 10px 0px rgba(0,0,0,0.1)",
    border: "1px solid #ced4da",
    backgroundColor: theme.background,
    "&.show": {
      marginTop: "16px !important",
    },
  },
  dropdownItem: {
    borderRadius: "6px",
    background: theme.inactive,
    color: theme.text,
    fontSize: "15px",
    textAlign: "center",
    transition: "0.2s background",
    WebkitTransition: "0.2s background",
    MozTransition: "0.2s background",
    "&:not(:last-child)": { marginBottom: "0.5rem" },
    "&:hover": {
      background: theme.inactiveHover,
      color: theme.text,
    },
    "&:active": {
      color: theme.invertText,
      fontWeight: 500,
      background: theme.active,
    },
    "&.active": {
      color: theme.invertText,
      fontWeight: 500,
      background: theme.active,
    },
  },
  usernameText: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: "15px",
  },
  divider: {
    marginTop: "4px",
  },
}));

export default useStyles;
