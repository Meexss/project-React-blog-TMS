import React, {FC} from 'react';
import classes from './midleCars.module.css'
import {Items} from "../../Tabs/FirstTab/TabContent";
import {Link, Route} from "react-router-dom";

interface ItemBig {
    post: Items,
    islike: (click: Items) => void
}


const MidleCard: FC<ItemBig> = (props) => {
    return (
        <div className={classes.wrapper}>
            <Link to={`/post/${props.post.id}`} className={classes.link}>
            <img className={classes.photo} src={props.post.image}/>
            <span className={classes.date}>{props.post.date}</span>
            <h2 className={classes.title}>{props.post.title}</h2>
            </Link>
            <div className={classes.wrapper_likes}>
                <div >
                    <img className={classes.like} src="./Icon-Thumbs-Up.png"/>
                    <span className={classes.colLike}>20</span>
                    <img className={classes.dislike} src="./Icon-Thumbs-Down.png"/>
                    <span></span>
                </div>
                <div>
                    <img onClick={() => props.islike(props.post)} className={classes.favorite} src="./Bookmark.png"/>
                    <img className={classes.more} src='./More-Horizontal.png'/>
                </div>
            </div>

        </div>
    );
};

export default MidleCard;