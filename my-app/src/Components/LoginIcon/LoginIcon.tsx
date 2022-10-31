import React, {FC, FunctionComponent, ReactElement, ReactNode} from 'react';
import classes from './loginIcon.module.css'
import {Link} from "react-router-dom";

interface props {
    name: string;
}

const LoginIcon: FC<props> = ({name}) => {

    return (
        <Link to={'/sign-up'}>
        <div className={classes.login__wrapper}>
            <div className={classes.login__icon}>
                <span className={classes.text}>{name.split(" ")[0][0].toUpperCase() + name.split(" ")[1][0].toUpperCase() }</span>
            </div>
            <div className={classes.login__name}>
                <span className={classes.text}>{name}</span>
            </div>
        </div>
        </Link>
    )
};

export default LoginIcon;