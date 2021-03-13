import React from 'react'
import { createUseStyles, useTheme } from "react-jss";

const useStyles = createUseStyles((theme: any) => ({
    row: {
        width: "100%"
    }
  }));
export const Divider: React.FC = () => {
    const theme = useTheme();
  const classes = useStyles({ theme });
    return (
        <hr className={classes.row}/>
    )
}
