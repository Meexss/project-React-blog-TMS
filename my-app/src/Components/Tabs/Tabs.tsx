import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import TabContent, {Items} from './FirstTab/TabContent';
import classes from './tab.module.css'
import PopularTab from "./PopulaTab/PopularTab";
import LikeTab from "./LikeTab/LikeTab";

interface like extends Items{
}

interface superlike {
    data: (post: Items[]) => void
}






const Tabs:FC<superlike> = (props) => {
    const [data, setData] = useState<like[]>([]);
    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?lesson_num=50&limit=20')
            .then(response => response.json())
            .then(data => setData(data.results))
    },[])

    {data && props.data(data)}

    const [like, setLike] = useState<like[]>([])

    console.log(like)
    function islike(click: like): void {
      like.length !== 0 ? setLike([...like, click]) : setLike([click])

    }

    const items = [
        { title: 'All', content: <TabContent islike={islike} /> },
        { title: 'My favorite', content: <LikeTab like={like} islike={islike}/> },
        { title: 'Popular', content: <PopularTab islike={islike}/> },
    ];
//https://jsfiddle.net/0dhaojze/
        const [ active, setActive ] = useState<any>(0);

        return (
            <div>
                <div className="tab">
                    {items.map((n, index) => (
                        <button
                            key={n.title}
                            className={index === active ?  classes.tabLinks_active : classes.tabLinks}
                            onClick={() => setActive(index)}
                            data-index={index}
                        >{n.title}</button>
                    ))}
                </div>
                <div>
                    {items[active].content}
                </div>
            </div>
        );


};

export default Tabs;