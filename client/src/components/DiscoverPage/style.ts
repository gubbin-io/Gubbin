import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  mainContainer: {
    overflowY: "scroll",
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
