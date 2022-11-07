import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import BigCard from "../../Cards/BigCard/BigCard";
import MidleCard from "../../Cards/MidleCard/MidleCard";
import MiniCard from "../../Cards/MiniCard/MiniCard";
import OpenCard from "../../../Pages/OpenCard";
import classes from './atyleTab.module.css'

export interface Items {
    id: number,
    date: string,
    title: string,
    lesson_num: number,
    image: string,
    author?: number,
    text?: string,
}

interface Funct {
    islike: (click: Items) => void,
    like: Items[];
}

const TabContent: FC<Funct> = (props) => {
    const [content, setContent] = useState<Items[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
            .then(response => response.json())
            .then(data => setContent(data.results))
            .then(isDone => setIsLoading(true))
    },[])

    return (

        <div className={classes.wrapper}>
            <div className={classes.bigBlock}>
                {isLoading && <BigCard content={content} islike={props.islike} like={props.like}/>  }
                {content.map((post, index) =>
                    <div key={post.id} className={classes.midleCard}>
                    {index < 4 ? <MidleCard post={post} islike={props.islike} like={props.like}/> : ''}
                    </div>
                )}
            </div>
            <div>
                {content.map((post, index) =>
                            <div key={post.id} className={classes.miniBlock}>
                                {index >= 4 ? <MiniCard post={post} islike={props.islike} like={props.like}/> : ""}
                            </div>
                    )}
            </div>
            </div>
        );


};

export default TabContent;