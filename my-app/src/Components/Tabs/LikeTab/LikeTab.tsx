import React, {FC} from 'react';
import {Items} from "../FirstTab/TabContent";
import classes from "../PopulaTab/popularTab.module.css";
import MidleCard from "../../Cards/MidleCard/MidleCard";

interface ArryLike {
    like: Items[];
    islike: (click: Items) => void,

}

const LikeTab: FC<ArryLike> = (props) => {
    return (
        <div>
            <div className={classes.wrapper}>
                {props.like.map((post, index) =>
                    <div className={classes.midleCard}>
                        {index / 2 ? <MidleCard key={post.id} post={post} islike={props.islike}/> : ''}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LikeTab;