import React, {FC} from 'react';
import BigCard from "../../Cards/BigCard/BigCard";
import MidleCard from "../../Cards/MidleCard/MidleCard";
import MiniCard from "../../Cards/MiniCard/MiniCard";
import OpenCard from "../../Cards/OpenCard/OpenCard";
import Footer from "../../Footer/Footer";
import FirstBlock from "../../Cards/FirstBlock";
import NextBlocks from "../../Cards/NextBlocks";



const TabContent = () => {
    const info = {
        id: 1,
        title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
        text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
        img:"./Rectangle 42.png",
    }

    return (
            <div className="tabcontent">
                <FirstBlock />
                <NextBlocks />
                <NextBlocks />
                <NextBlocks />
                <NextBlocks />
                <OpenCard />
            </div>
        );
};

export default TabContent;