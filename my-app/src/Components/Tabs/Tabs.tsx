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
    const [like, setLike] = useState<like[]>([])

    function islike(click: like): void {
       setLike([...like, click])
    }

    const items = [
        { title: 'All', content: <TabContent islike={islike} like={like}/> },
        { title: 'My favorite', content: <LikeTab like={like} islike={islike}/> },
        { title: 'Popular', content: <PopularTab islike={islike} like={like}/> },
    ];
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