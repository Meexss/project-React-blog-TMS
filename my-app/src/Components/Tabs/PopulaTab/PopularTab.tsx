import React, {FC, useEffect, useState} from 'react';
import {Items} from "../FirstTab/TabContent";
import classes from "./popularTab.module.css";
import MidleCard from "../../Cards/MidleCard/MidleCard";


interface Funct {
    islike: (click: Items) => void,
}

const PopularTab: FC<Funct> = (props) => {
    const [content, setContent] = useState<Items[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=12')
            .then(response => response.json())
            .then(data => setContent(data.results))
            .then(isDone => setIsLoading(true))
    },[])

    return (
        <div className={classes.wrapper}>
            {content.map((post, index) =>
                <div key={post.id} className={classes.midleCard}>
                    {index ? <MidleCard  post={post} islike={props.islike}/> : ''}
                </div>
            )}
        </div>
    );
};

export default PopularTab;