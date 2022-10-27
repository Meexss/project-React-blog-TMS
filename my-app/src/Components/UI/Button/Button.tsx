import React, {FC} from 'react';
import classes from './button.module.css'

interface Props {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLElement>;
}


const Button:FC<Props> = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>{children}</button>
    );
};

export default Button;