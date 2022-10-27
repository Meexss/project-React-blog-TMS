import React, {FC} from 'react';
import BigCard from "./BigCard/BigCard";
import MiniCard from "./MiniCard/MiniCard";
import classes from './firstBlock.module.css'

interface props {
    title: string;
    img?: string;
    text: string;
    id: number,
    info: object
}

const FirstBlock = () => {
    return (
        <div className={classes.wrapper}>
            <BigCard/>
            <div>
                <MiniCard />
                <div className={classes.space}></div>
                <MiniCard />
            </div>
        </div>
    );
};

export default FirstBlock;