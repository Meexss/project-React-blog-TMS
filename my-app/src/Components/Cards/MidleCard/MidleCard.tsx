import React, {FC} from 'react';
import classes from './midleCars.module.css'

interface props {
    title: string;
    img?: string;
    text: string;
    id: any
}


const MidleCard = () => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.photo} src="./Rectangle-39.jpg"/>
            <span className={classes.date}>27.10.2022</span>
            <h2 className={classes.title}>fdlkhdfg fjgsjdlg dfslfgds;ljg sdjdljf</h2>
            <div className={classes.wrapper_likes}>
                <div >
                    <img className={classes.like} src="./Icon-Thumbs-Up.png"/>
                    <span className={classes.colLike}>20</span>
                    <img className={classes.dislike} src="./Icon-Thumbs-Down.png"/>
                    <span></span>
                </div>
                <div>
                    <img src="./Bookmark.png"/>
                    <img className={classes.more} src='./More-Horizontal.png'/>
                </div>
            </div>
        </div>
    );
};

export default MidleCard;