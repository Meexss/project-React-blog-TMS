import React, {FC, MouseEventHandler} from 'react';
import classes from './bigCard.module.css';
import {Items} from "../../Tabs/FirstTab/TabContent";
import {Link} from "react-router-dom";

interface ItemBig {
    content: Items[],
    islike: (click: Items) => void
    like: Items[];
}


const BigCard: FC<ItemBig> = (props) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.right_side}>
                <Link to={`/post/${props.content[0].id}`} className={classes.link}>
                <span className={classes.date}>{props.content[0].date}</span>
                <p className={classes.title}>{props.content[0].title}</p>
                <p className={classes.text}>{props.content[0].text}</p>
                </Link>
                <div className={classes.like_block}>
                    <img className={classes.like} src="./Icon-Thumbs-Up.png"/>
                    <span className={classes.colLike}>20</span>
                    <img className={classes.dislike} src="./Icon-Thumbs-Down.png"/>
                    <span></span>
                </div>
            </div>
            <div>
                <Link to={`/post/${props.content[0].id}`} className={classes.link}>
                <img className={classes.photo} src={props.content[0].image}/>
                </Link>
                <div className={classes.lowBlock}>
                    {props.like.find(item => item.id === props.content[0].id) ? <img className={classes.favorite} src="./Icon-Bookmark-dark.png"/> : <img onClick={() => props.islike(props.content[0]) } className={classes.favorite} src="./Bookmark.png"/>}
                    <img className={classes.more} src='./More-Horizontal.png'/>
                </div>

            </div>

        </div>
    );
};

export default BigCard;