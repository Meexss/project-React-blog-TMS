import React from 'react';
import {Link} from "react-router-dom";
import Title from "../Components/UI/title/Title";
import classes from './resetPass.module.css'

const ResetPassword = () => {
    return (
        <div>
            <Link to={'/'}><span>Back to home</span></Link>
            <Title>Reset password</Title>
            <div className={classes.wrapper}>
                <form>
                    <span className={classes.text}>Email</span>
                    <input className={classes.input} placeholder={'Your email'}/>
                    <button className={classes.btn}>Reset</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;