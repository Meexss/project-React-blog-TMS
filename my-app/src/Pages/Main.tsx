import React, {FC} from 'react';
import Title from "../Components/UI/title/Title";
import Tabs from "../Components/Tabs/Tabs";
import {Items} from "../Components/Tabs/FirstTab/TabContent";

interface props {
    data: (post: Items[]) => void,
}

const Main: FC<props> = (props) => {
    return (
        <div>
            <Title>Blog</Title>
            <Tabs data={props.data}/>
        </div>
    );
};

export default Main;