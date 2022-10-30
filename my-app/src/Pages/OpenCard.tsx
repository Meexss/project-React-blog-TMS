import React, {FC, useEffect, useState} from 'react';
import classes from './openCars.module.css'
import {Items} from "../Components/Tabs/FirstTab/TabContent";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

type QuizParams = {
    id: string;
};



const OpenCard = () => {
    const {id} = useParams<QuizParams>()
    const [content, setContent] = useState<Items[]>([]);

    useEffect(() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=200`)
            .then(response => response.json())
            .then(data => setContent(data.results))
    },[])

    let ind = content.findIndex(item => item.id === Number(id))

    return (
        <div>
            {content.map((item, index) =>
                item.id == Number(id) &&
            <div>
                <div>
                    <a href={'/'}><span className={classes.span_one}>Home</span></a>
                    <span>|</span>
                    <span className={classes.span_two}>Post {item.id}</span>
                </div>
                <h1 className={classes.title}>{item.title}</h1>
                <img className={classes.photo} src={item.image}/>
                <div className={classes.wrapper}>
                    <p className={classes.text}>{item.text}</p>
                    <div className={classes.wrapper__icon}>
                        <div>
                            <div className={classes.like}>
                            <img className={classes.icon}  src="./Icon-Thumbs-Up.png"/>
                            </div>
                            <div className={classes.dislike}>
                            <img className={classes.icon} src="./Icon-Thumbs-Down.png"/>
                            </div>
                        </div>
                        <div className={classes.favorite}>
                            <img className={classes.img_icon} src="./Bookmark.png"/>
                            <span className={classes.test__icon}>Add to favorites</span>
                        </div>
                    </div>
                </div>
            </div> )}
            <div className={classes.block__footer}>
                {content.map((item, index) => index === ind - 1 &&
                <Link to={`/post/${item.id}`} className={classes.low__wrapper}>
                    <div className={classes.next}>
                        <img src='./Vector-1.png'/>
                    </div>

                        <div>
                            <h3 className={classes.low__title}>Prev</h3>
                            <span className={classes.low__text}>{item.id} {item.title}</span>
                        </div>
                </Link>)}

                {content.map((item, index) => index === ind + 1 &&
                <Link to={`/post/${item.id}`} className={classes.low__wrapper}>
                    <div>
                        <h3 className={classes.wrapper__prev}>Next</h3>
                        <span className={classes.low__text}>8 Beautiful Villas Belonging to Artists You Need to See</span>
                    </div>
                    <div className={classes.prev}>
                        <img src='./Vector-1.png'/>
                    </div>
                </Link>
                )}
            </div>
        </div>
    );
};

export default OpenCard;