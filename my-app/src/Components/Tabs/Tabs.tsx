import React, {useState} from 'react';
import TabContent from './FirstTab/TabContent';
import classes from './tab.module.css'

const Tabs = () => {

    const items = [
        { title: 'All', content: <TabContent/> },
        { title: 'My favorite', content: 'Paris is the capital of France.' },
        { title: 'Popular', content: 'Tokyo is the capital of Japan.' },
    ];
//https://jsfiddle.net/0dhaojze/
        const [ active, setActive ] = useState<any>(0);

        return (
            <div>
                <div className="tab">
                    {items.map((n, index) => (
                        <button
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