import React, {FC, useState} from 'react';
import classes from './burger.module.css'
import SideBlock from "../SideBlock/SideBlock";

interface Props {
    children: React.ReactNode;
}

const Burger: FC<Props> = ({children}) => {
    const [click, setClick] = useState<boolean>(false)

    const isClicked = () => {
        click
        ? setClick(false)
        : setClick(true)
    }

    return (
        <div onClick={isClicked} className={  classes.burger__wrapper }>
            {/*<div onClick={(e) => e.stopPropagation()}>*/}
                <span className={click ? classes.burger__active : classes.burger}></span>
                <SideBlock click={click}>{children}</SideBlock>
            {/*</div>*/}

        </div>
    );
};

export default Burger;