import React, {FC} from 'react';
import classes from './sideBlock.module.css'

interface props {
    children: React.ReactNode,
    click: boolean
}

const SideBlock: FC<props> = ({children, click}) => {
    return (
        <div className={click ? classes.burger__module : classes.close__module}>
            {children}

        </div>
    );
};

export default SideBlock;