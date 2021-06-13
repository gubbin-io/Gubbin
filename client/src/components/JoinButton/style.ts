import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
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
    "&:hover, &:disabled, &.disabled": {
      backgroundColor: "#343A40",
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
}));

export default useStyles;
