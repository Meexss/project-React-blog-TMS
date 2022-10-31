import React, {FC, useState} from 'react';
import classes from './header.module.css'
import Burger from "../Burger/Burger";
import Search from "../Search/Search";
import LoginIcon from "../LoginIcon/LoginIcon";
import OpenSearch from "../OpenSearch/OpenSearch";
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

interface Props {
    sign: boolean,
}

const Header: FC<Props> = (props) => {
    const [click, setClick] = useState<boolean>(false)

    const isClicked = () => {
        click
            ? setClick(false)
            : setClick(true)
    }

    const [black, setBlack] = useState<boolean>(false)

    return (
        <div className={classes.wrapper}>
                <Burger>
                    {props.sign
                        && <LoginIcon name={"Петр Первый"} />
                    }
                    <Link to={'/'} className={classes.link}><Button>Home</Button></Link>
                    {props.sign
                        && <Link to={'/'}><Button >Add post</Button></Link>}
                    <div className={classes.lowBlock}>
                        <div className={classes.wrapper_image}>
                            <div className={classes.image_team} onClick={() => setBlack(false)}>
                                {black
                                    ? <img className={classes.image_icon} src='/Light-dis.png'/>
                                    : <img className={classes.image_icon} src='/Light.png'/>
                                }
                            </div>
                            <div className={classes.image_team_next} onClick={() => setBlack(true)}>
                                {black
                                    ? <img className={classes.image_icon} src='/Dark.png'/>
                                    : <img className={classes.image_icon} src='/Dark-dis.png'/>
                                }
                            </div>
                        </div>
                        {props.sign
                            ? <Link to={'/'}><Button >Log Out</Button></Link>
                            : <Link to={'/sign-in'}><Button >Sign In</Button></Link>
                        }
                    </div>

                </Burger>
                <OpenSearch onClick={() => isClicked()}>{click}</OpenSearch>
                <div className={classes.right__wrapper}>
                    <Search onClick={() => isClicked()}/>
                    {props.sign
                        ? <div >
                            <LoginIcon name={"Петр Первый"} />
                        </div>
                        :   <Link to={'/sign-in'}>
                            <div className={classes.icon}>
                            <img className={classes.img} src='/Frame-1572.png' alt={'login'}/>
                             </div></Link>
                    }
                </div>




        </div>
    );
};

export default Header;