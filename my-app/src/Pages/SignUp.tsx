import React from 'react';
import {Link} from "react-router-dom";
import Title from "../Components/UI/title/Title";
import classes from './signUp.module.css'

const SignUp = () => {
    return (
        <div>
            <Link to={'/'}><span>Back to home</span></Link>
            <Title>Sign Up</Title>
            <div className={classes.wrapper}>
                <form>
                    <span className={classes.text}>Name</span>
                    <input className={classes.input} placeholder={'Your name'}/>
                    <span className={classes.text}>Email</span>
                    <input className={classes.input} placeholder={'Your email'}/>
                    <span className={classes.text}>Password</span>
                    <input className={classes.input} placeholder={'Your password'}/>
                    <span className={classes.text}>Confirm password</span>
                    <input className={classes.input} placeholder={'Confirm password'}/>

                    <button className={classes.btn}>Sign Up</button>

                    <span className={classes.low_text}>Already have an account? <Link to={'/sign-in'}>Sign In</Link></span>


                </form>
            </div>
        </div>
    );
};

export default SignUp;