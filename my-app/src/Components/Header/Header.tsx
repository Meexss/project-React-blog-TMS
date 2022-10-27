import React, {useState} from 'react';
import classes from './header.module.css'
import Burger from "../Burger/Burger";
import Search from "../Search/Search";
import LoginIcon from "../LoginIcon/LoginIcon";
import OpenSearch from "../OpenSearch/OpenSearch";
import Button from "../UI/Button/Button";

const Header = () => {
    const [click, setClick] = useState<boolean>(false)

    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }

    return (
        <div className={classes.wrapper}>
                <Burger>
                            <LoginIcon name={"Петр Первый"} />
                            <Button onClick={e => console.log(e)}>Home</Button>
                            <Button onClick={e => console.log(e)}>Add post</Button>
                            <Button onClick={e => console.log(e)}>Log Out</Button>
                </Burger>
                <OpenSearch onClick={() => isClicked()}>{click}</OpenSearch>
                <div className={classes.right__wrapper}>
                    <Search onClick={() => isClicked()}/>
                    <LoginIcon name={"Петр Первый"} />
                </div>
        </div>
    );
};

export default Header;