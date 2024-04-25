import { useState } from "react";
import { Button } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { useTheme } from "@emotion/react";
import "./Section.css";

export default function Section ({songs, name}) {
    const [showAll, setShowAll] = useState(true);
    const theme = useTheme();

    const header = () => {
        return <div className="header">
            <span>{name === "top-albums" ? "Top Albums": "New Albums"}</span>
            <Button onClick={() => setShowAll(!showAll)} style={{"color": theme.palette.primary.main, "backgroundColor": theme.palette.secondary.main}} className="showall-btn">{showAll? "Collapse" : "Show All"}</Button>
        </div>
    }

    if(showAll){
        return (
            <div className="Section">
                {header()}
                <div className="container">
                    {songs.map((song, idx) => {
                        return <Card img={song.image} name={song.title} follows={song.follows} className="item" key={idx}/>
                    })}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="Section">
                {header()}
                <div className="carousel">
                    <Carousel data={songs}/>
                </div>
            </div>
        )
    }
}