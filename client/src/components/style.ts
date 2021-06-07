import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
  "@global": {
    body: {
      margin: "0",
      fontFamily:
        'Inter, "Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",\n    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n    "Helvetica Neue", sans-serif',
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      overflow: "hidden",
    },
    code: {
      fontFamily:
        'source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace',
    },
  },
  outerContainer: {
    display: `grid`,
    height: `calc(100vh - 53px)`,
    gridTemplateColumns: `240px auto`,
  },
}));

export default useStyles;
