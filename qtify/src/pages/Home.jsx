import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";
import { useState, useEffect } from "react";
import "./Home.css"

const fetchTopAlbums = async (setTopAlbums) => {
    try{
        const res = await fetch("https://qtify-backend-labs.crio.do/albums/top");
        const data = await res.json();
        setTopAlbums(data);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

function Home() {
    const [topAlbums, setTopAlbums] = useState([]);

    useEffect(() => {
        fetchTopAlbums(setTopAlbums);
    }, [])

    return (
      <div className="Home">
        <Navbar/>
        <Hero/>
        <Section name="top-albums" songs={topAlbums}/>
      </div>
    );
  }
  
  export default Home;