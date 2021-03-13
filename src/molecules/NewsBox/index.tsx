import classes from "*.module.css";
import React from "react";
import { Image, Typography } from "../../atoms";
import { createUseStyles, useTheme } from "react-jss";

interface Props {
  image?: string;
  heading: string;
  description: string;
  className?: any;
  onClick?: any;
}

const useStyles = createUseStyles((theme: any) => ({
  imageStyle: {
    minWidth: 180,
    height: 120,
  },
  newsBoxWrapper: {
    margin: "5px auto",
    height: "max-content",
    textAlign: "center",
    // border: "1px solid #fff",
    padding: "4px 6px",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  description: {
    "&>span": {
      display: "-webkit-box",
      overflow: "hidden",
      "-webkit-line-clamp": 4,
      textOverflow: "ellipsis",
      "-webkit-box-orient": "vertical",
    },
  },
  heading: {
    "&>span": {
      display: "-webkit-box",
      overflow: "hidden",
      "-webkit-line-clamp": 2,
      textOverflow: "ellipsis",
      "-webkit-box-orient": "vertical",
    },
  }
}));
const NewsBox: React.FC<Props> = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div
      className={` ${props.className} ${classes.newsBoxWrapper} `}
      onClick={() => props.onClick()}
    >
      {props.image && (
        <Image
          image={props.image || ""}
          backgroundSize="cover"
          className={classes.imageStyle}
        />
      )}
      <div>
        <div className={classes.heading}>
          <Typography type="h2" color="primary">
            {" "}
            {props.heading}
          </Typography>
        </div>
        <div className={classes.description}>
          <Typography type="h5" color="light">
            {props.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export { NewsBox };
