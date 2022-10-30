import React, {FC} from 'react';
import classes from './button.module.css'

interface Props {
    children: React.ReactNode;
}


const Button:FC<Props> = ({children}) => {
    return (
        <button className={classes.btn}>{children}</button>
    );
};

export default Button;