import React, {FC} from 'react';
import classes from './bigCard.module.css';

interface props {
    title: string;
    img?: string;
    text: string;
    id: any
}

const BigCard = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.right_side}>
                <span className={classes.date}>27.10.2022</span>
                <p className={classes.title}>офавшпрsdf ырвпоывлпывоплот  ызщшовпзыв зщпзщшы зщпыщвпщывзпыж длврплывтпывртплтывпызвтпылв  тцывтпзш ызщвопзщыв олпыозвшпыз</p>
                <p className={classes.text}>kshfdgpnskdgskdgknsdkng spdkngpkasdng</p>
                <div className={classes.like_block}>
                    <img className={classes.like} src="./Icon-Thumbs-Up.png"/>
                    <span className={classes.colLike}>20</span>
                    <img className={classes.dislike} src="./Icon-Thumbs-Down.png"/>
                    <span></span>
                </div>
            </div>
            <div>
                <img className={classes.photo} src="./Rectangle-39.jpg"/>
                <div className={classes.lowBlock}>
                    <img src="./Bookmark.png"/>
                    <img className={classes.more} src='./More-Horizontal.png'/>
                </div>

            </div>

        </div>
    );
};

export default BigCard;