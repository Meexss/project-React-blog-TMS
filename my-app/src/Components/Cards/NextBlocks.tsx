import React, {FC} from 'react';
import MiniCard from "./MiniCard/MiniCard";
import MidleCard from "./MidleCard/MidleCard";
import classes from './firstBlock.module.css'

interface props {
    title: string;
    img?: string;
    text: string;
    id: any
}


const NextBlocks = () => {
    return (
        <div className={classes.major_wrapper}>
            <div className={classes.next__wrapper}>
                <MidleCard/>
                <MidleCard/>
            </div>
                <div>
                    <MiniCard/>
                    <div className={classes.space}></div>
                    <MiniCard/>
                </div>
        </div>
    );
};

export default NextBlocks;