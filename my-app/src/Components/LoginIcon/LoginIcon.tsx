import React, {FC, FunctionComponent, ReactElement, ReactNode} from 'react';
import classes from './loginIcon.module.css'

interface props {
    name: string;
}

const LoginIcon: FC<props> = ({name}) => {

    return (
        <div className={classes.login__wrapper}>
            <div className={classes.login__icon}>
                <span>{name.split(" ")[0][0].toUpperCase() + name.split(" ")[1][0].toUpperCase() }</span>
            </div>
            <div className={classes.login__name}>
                <span>{name}</span>
            </div>
        </div>
    )
};

export default LoginIcon;