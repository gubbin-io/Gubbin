import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  mainContainer: {
    overflowY: "scroll",
    maxWidth: "1440px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "32px 16px 32px 32px",
    "&::-webkit-scrollbar": {
      width: `16px`,
    },
    "&::-webkit-scrollbar-track": {
      background: `${theme.background}`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.separator}`,
      borderRadius: "8px",
      border: `4px solid ${theme.background}`,
    },
  },
}));

export default useStyles;
