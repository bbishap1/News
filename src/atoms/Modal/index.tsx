import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { Image } from "../Image";
import { Typography } from "../Typography";

interface Props {
  className?: any;
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
  show: boolean;
  data: any;
}
const useStyles = createUseStyles((theme: any) => ({
  modalWrapper: {
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 1,
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "auto",
    paddingTop: 80,
  },
  modalContent: {
    backgroundColor: "#fff",
    width: "70%",
    maxWidth: "640px",
    height: "70%",
    margin: "auto",
    padding: 20,
    border: "1px solid #000",
    borderRadius: 20,
  },
  closeButton: {
    color: "#aaaaaa",
    float: "right",
    fontSize: 40,
    fontWeight: 600,
    position: "relative",
    top: "-20px",
    right: "-5px",
    cursor: "pointer",
    "&:hover": {
      color: "#b8180d",
    },
  },
  modalImage: {
    width: "100%",
    height: "180px",
    borderRadius: 10
  },
  contentWrapper: {
    marginTop: 20,
    textAlign: "center",
    height: "100%",
    overflowY: "auto"
  },
  marginText: {
    marginTop: 20,
    padding: "0px 10px"
  }
}));

const Modal: React.FC<Props> = (props) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <>
      {props.show && (
        <div
          className={`${classes.modalWrapper} ${props.className}`}
          onClick={(e: any) => props.onClose(e)}
        >
          <div
            className={classes.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span
              className={classes.closeButton}
              onClick={(e: any) => props.onClose(e)}
            >
              &times;
            </span>
            <div className={classes.contentWrapper}>
              <Image image={props.data?.image} backgroundSize="cover" className={classes.modalImage}/>
              <div className={classes.marginText}>
              <Typography type="h2" color="secondary">{props.data?.title}</Typography>
              </div>
              <div className={classes.marginText}>
              <Typography type="h4" color="light">{props.data?.description || ""}</Typography>
              <Typography type="h4" color="light">{props.data?.description || ""}</Typography>
              <Typography type="h4" color="light">{props.data?.description || ""}</Typography>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
