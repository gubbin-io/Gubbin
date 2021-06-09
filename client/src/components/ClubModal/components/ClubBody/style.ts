import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  contentColumn: {
    overflowX: `hidden`,
    overflowY: `scroll`,
    height: "100%",
    marginRight: "4px",
    paddingRight: "7px",
    scrollbarWidth: "thin",
    scrollbarColor: `${theme.background} ${theme.background}`,
    "&::-webkit-scrollbar": {
      width: `8px`,
    },
    "&::-webkit-scrollbar-track": {
      background: `${theme.background}`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.background}`,
      borderRadius: "8px",
    },
    "&:hover": {
      scrollbarColor: `${theme.separator} ${theme.background}`,
    },
    "&:hover::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.separator}`,
    },
  },
}));

export default useStyles;
