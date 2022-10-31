import React from 'react';
import {Link} from "react-router-dom";
import Title from "../Components/UI/title/Title";
import classes from './signIn.module.css';

const SignIn = () => {
    return (
        <div>
            <Link to={'/'}><span>Back to home</span></Link>
            <Title>Sign In</Title>
            <div className={classes.wrapper}>
                <form>
                    <span className={classes.text}>Email</span>
                    <input className={classes.input} placeholder={'Your email'}/>
                    <span className={classes.text}>Password</span>
                    <input className={classes.input} placeholder={'Your password'}/>

                    <Link to={'/reset-pass'}>Forgot password?</Link>

                    <button className={classes.btn}>Sign In</button>

                    <span className={classes.low_text}>Already have an account? <Link to={'/sign-up'}>Sign Up</Link></span>


                </form>
            </div>

        </div>
    );
};

export default SignIn;