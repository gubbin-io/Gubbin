import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  header: {
    width: `100%`,
    height: `35%`,
    backgroundColor: `transparent`,
    display: "grid",
    gridTemplate: `
      ". .    .       options ." 52px
      ". .    .       .       ." 1fr 
      ". icon .       .       ." 64px
      ". icon details join    ." 64px
      / 16px 128px 1fr 128px 16px
      `,
  },
  iconBox: {
    gridArea: "icon",
    backgroundColor: theme.background,
    boxShadow: `0px 4px 8px rgba(0, 0, 0, 0.04), 
                0px 0px 2px rgba(0, 0, 0, 0.06), 
                0px 0px 1px rgba(0, 0, 0, 0.04)`,
    borderRadius: theme.radius,
    display: `flex`,
    justifyContent: `center`,
    padding: `16px`,
  },
  icon: {
    width: `96px`,
    height: `96px`,
  },
  details: {
    gridArea: "details",
    padding: "12px 12px 0px 12px",
  },
  options: {
    gridArea: "options",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  background: {
    display: "flex",
    overflowX: "auto",
    overflowY: "hidden",
    minWidth: "0",
    minHeight: "0",
    gridColumnStart: 1,
    gridColumnEnd: 6,
    gridRowStart: 1,
    gridRowEnd: 4,
  },
  backgroundImage: {
    width: `100%`,
    height: `100%`,
    objectFit: `cover`,
    flex: "0 0 100%",
  },
  clubName: {
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "30px",
  },
  tagline: {
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "20px",
  },
  join: {
    gridArea: "join",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  joinButton: ({ clubColor }: any) => ({
    height: "36px",
    width: "72px",

    backgroundColor: "#000000", //Note: Change later to use theme
    color: "#FFFFFF", // Note: Change later to use theme

    borderRadius: "18px",
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
      backgroundColor: `${clubColor} !important`,
      color: "#FFFFFF",
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: clubColor,
      color: "#FFFFFF",
    },
    "&:focus": {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  }),
  closeButton: ({ clubColor }: any) => ({
    height: "36px",
    width: "36px",
    padding: `8px`,

    backgroundColor: theme.inactive,
    color: theme.text,

    borderRadius: theme.radius,
    border: 0,

    display: `flex`,
    alignItems: `center`,

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
      boxShadow: `0 0 0 0.2rem ${clubColor}7F !important`,
    },

    transition: `0.2s background`,
    WebkitTransition: `0.2s background`,
    MozTransition: `0.2s background`,
  }),
}));

export default useStyles;
