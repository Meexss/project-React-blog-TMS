import React, {FC} from 'react';
import classes from "./miniCard.module.css";
import {Items} from "../../Tabs/FirstTab/TabContent";
import {Link} from "react-router-dom";

interface ItemBig {
    post: Items,
    islike: (click: Items) => void
    like: Items[];
}

const MiniCard: FC<ItemBig> = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.side_wrapper}>
                <Link to={`/post/${props.post.id}`} className={classes.link}>
                <span className={classes.date}>{props.post.date}</span>
                <h2 className={classes.title}>{props.post.title}</h2>
                </Link>
                <div className={classes.like_wrapper}>
                    <img className={classes.like} src="./Icon-Thumbs-Up.png"/>
                    <span className={classes.colLike}>20</span>
                    <img className={classes.dislike} src="./Icon-Thumbs-Down.png"/>
                    <span></span>
                </div>
            </div>
            <div>
                <Link to={`/post/${props.post.id}`} className={classes.link}>
                <img className={classes.photo} src={props.post.image}/>
                </Link>
                <div className={classes.more}>
                    {props.like.find(item => item.id === props.post.id) ? <img className={classes.favorite} src="./Icon-Bookmark-dark.png"/> : <img onClick={() => props.islike(props.post) } className={classes.favorite} src="./Bookmark.png"/>}
                    <img className={classes.correct} src='./More-Horizontal.png'/>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default MiniCard;