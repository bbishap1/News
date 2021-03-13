import React from "react";
import { createUseStyles, useTheme } from "react-jss";

interface Props {
  children: any;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: "normal" | "bold";
  color: "primary" | "secondary" | "light"
}

const useStyles = createUseStyles((theme: any) => ({
  textStyle: {
    fontSize: (data) => {
      switch (data.type) {
        case "h1":
          return 32;
        case "h2":
          return 24;
        case "h3":
          return 18;
        case "h4":
          return 16;
        case "h5":
          return 14;
        case "h6":
          return 12;
        default:
          return 16;
      }
    },
    fontWeight: (data) => data.fontWeight || "normal",
    color: (data) => {
        switch (data.color) {
          case "primary":
            return "#000";
          case "secondary":
            return "#b50021";
          case "light":
            return "#b0aeaf";
          default:
            return "#000";
        }
      },
  },
}));

const Typography: React.FC<Props> = ({ children, type, fontWeight, color }) => {
  const theme = useTheme();
  const classes = useStyles({ fontWeight, type, color, theme });
  return <span className={classes.textStyle}>{children}</span>;
};
export { Typography };
