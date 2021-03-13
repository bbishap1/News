import React from 'react'
import { createUseStyles, useTheme } from "react-jss";


interface Props {

}
const useStyles = createUseStyles((theme: any) => ({
    row: {
        width: "100%"
    }
  }));
export const Divider: React.FC<Props> = (props) => {
    const theme = useTheme();
  const classes = useStyles({ theme });
    return (
        <hr className={classes.row}/>
    )
}
