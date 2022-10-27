import React from 'react';
import classes from './footer.module.css'

const Footer = () => {
    return (
        <div className={classes.wrapper}>
            <span className={classes.span_style}>©2022 Blogfolio</span>
            <span className={classes.span_style}>All rights reserved</span>
        </div>
    );
};

export default Footer;