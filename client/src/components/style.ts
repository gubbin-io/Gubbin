import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    body: {
      margin: "0",
      fontFamily:
        '"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n    "Helvetica Neue", sans-serif',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
    code: {
      fontFamily:
        'source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace',
    },
  },
});

export default useStyles;
