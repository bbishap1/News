import React from "react";
import { createUseStyles, useTheme } from "react-jss";

interface Props {
  children: React.ReactChildren | String;
  type?: "submit" | "button";
  size?: "small" | "medium" | "large";
  onClick: any;
  borderRadius?: Number;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
}

const useStyles = createUseStyles((theme: any) => ({
  button: {
    borderRadius: (data) => {
      return data.borderRadius;
    },
    cursor: "pointer",
    background: theme.buttonPrimary,
    border: `1px solid ${theme.buttonPrimary}`,
    padding: (data) => {
      switch (data.size) {
        case "small":
          return "6px 12px";
        case "medium":
          return "9px 18px";
        case "large":
          return "12px 22px";
        default:
          return "9px 18px";
      }
    },
    "&:active, &:focus, &:hover": {
      border: `1px solid ${theme.hoverPrimary}`,
      outline: "none",
      background: theme.hoverPrimary,
    },
  },
  text: {
    color: theme.textPrimary,
    fontSize: (data) => {
      switch (data.size) {
        case "small":
          return 12;
        case "medium":
          return 15;
        case "large":
          return 18;
        default:
          return 15;
      }
    },
    fontWeight: 600,
  },
}));

const Button: React.FC<Props> = ({
  children,
  type = "submit",
  size = "medium",
  borderRadius = 10,
  className,
  onClick,
  disabled,
  loading
}) => {
  const theme = useTheme();
  const classes = useStyles({ borderRadius, size, theme });
  return (
    <>
      <button className={`${classes.button} ${className}`} type={type} onClick={()=> onClick()} disabled={disabled}>
        <span className={classes.text}>{loading? children : "Loading..."}</span>
      </button>
    </>
  );
};

export { Button };
