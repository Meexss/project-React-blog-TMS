import React from 'react';
import classes from "./miniCard.module.css";

interface props {
    title: string;
    img?: string;
    text: string;
    id: any;
}

const MiniCard = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.side_wrapper}>
                <span className={classes.date}>27.10.2022</span>
                <h2 className={classes.title}>Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </h2>
                <div className={classes.like_wrapper}>
                    <img className={classes.like} src="./Icon-Thumbs-Up.png"/>
                    <span className={classes.colLike}>20</span>
                    <img className={classes.dislike} src="./Icon-Thumbs-Down.png"/>
                    <span></span>
                </div>
            </div>
            <div>
                <img className={classes.photo} src="./Rectangle-39.jpg"/>
                <div className={classes.more}>
                    <img src="./Bookmark.png"/>
                    <img className={classes.correct} src='./More-Horizontal.png'/>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MiniCard;