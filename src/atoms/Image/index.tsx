import React from 'react';
import { createUseStyles, useTheme } from "react-jss";

interface Props {
    image : String;
    backgroundSize: "contain" | "cover";
    className: string;
}
const useStyles = createUseStyles((theme: any) => ({
  imageStyle: {
    backgroundImage:(data)=> `url(${data.image})`,
    backgroundSize: (data)=> data.backgroundSize,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    margin: "auto"
  }
  }));

const Image: React.FC<Props> = ({image, backgroundSize, className}) => {
    const theme = useTheme();
  const classes = useStyles({image, backgroundSize, theme });
    return (
        <div className={`${classes.imageStyle} ${className}`}>      
        </div>
    )
}

export {Image}
