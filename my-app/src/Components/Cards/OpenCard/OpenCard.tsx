import React, {FC} from 'react';
import classes from './openCars.module.css'

interface props {
    title: string;
    img?: string;
    text: string;
    id: any
}

const OpenCard = () => {
    return (
        <div>
            <div>
                <span className={classes.span_one}>Home</span>
                <span>|</span>
                <span className={classes.span_two}>Post 14278</span>
            </div>
            <h1 className={classes.title}>Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
            <img className={classes.photo} src="./Rectangle 42.png"/>
            <div className={classes.wrapper}>
                <p className={classes.text}>Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
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
            <div className={classes.block__footer}>
                <div className={classes.low__wrapper}>
                    <div className={classes.next}>
                        <img src='./Vector-1.png'/>
                    </div>
                    <div>
                        <h3 className={classes.low__title}>Prev</h3>
                        <span className={classes.low__text}>10 Things to Know About Salvador Dalí</span>
                    </div>
                </div>
                <div className={classes.low__wrapper}>
                    <div>
                        <h3 className={classes.wrapper__prev}>Next</h3>
                        <span className={classes.low__text}>8 Beautiful Villas Belonging to Artists You Need to See</span>
                    </div>
                    <div className={classes.prev}>
                        <img src='./Vector-1.png'/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OpenCard;