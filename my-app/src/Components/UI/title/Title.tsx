import React, {FC} from 'react';
import classes from './title.module.css'

interface Props {
    children: React.ReactNode;
}


const Title: FC<Props> = ({children}) => {
    return (
        <h1 className={classes.title}>{children}</h1>
    );
};

export default Title;