import { useState } from "react";
import { Button } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { useTheme } from "@emotion/react";
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "./Section.css";

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}
CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BasicTabs({songs, genre}) {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {/* <Tab label="Item One" {...a11yProps(0)} className="tab"/>
            <Tab label="Item Two" {...a11yProps(1)} className="tab"/>
            <Tab label="Item Three" {...a11yProps(2)} className="tab"/> */}
            <Tab label="All" {...a11yProps(0)} className="tab"/>
            {genre.data.map((item, idx) => <Tab label={item.label} {...a11yProps(1+idx)} className="tab" key={idx}/>)}
          </Tabs>
        </Box>
        {/* <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel> */}
        <CustomTabPanel value={value} index={0} className="tab">
            <Carousel data={songs} likes={true}/>
        </CustomTabPanel>
        {genre.data.map((item,idx) => {
            return <CustomTabPanel value={value} index={1+idx} className="tab" key={idx}>
                <Carousel data={songs.filter((song) => song.genre.key === item.key)} key={idx} likes={true}/>
            </CustomTabPanel>
        })}
      </Box>
    );
}

export default function Section ({songs, name, genre}) {
    const [showAll, setShowAll] = useState(true);
    const theme = useTheme();

    const header = () => {
        return <div className="header">
            <span>{name === "top-albums" ? "Top Albums": "New Albums"}</span>
            <Button onClick={() => setShowAll(!showAll)} style={{"color": theme.palette.primary.main, "backgroundColor": theme.palette.secondary.main}} className="showall-btn">{!showAll? "Collapse" : "Show All"}</Button>
        </div>
    }

    if(genre){
        return <div className="songs">
            <div className="songs-heading">Songs</div>
            <BasicTabs songs={songs} genre={genre}/>
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