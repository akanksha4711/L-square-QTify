import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { useState, useEffect } from "react";
// import top_albums from "../data/top_albums.json"
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

const fetchNewAlbums = async (setNewAlbums) => {
    try{
        const res = await fetch("https://qtify-backend-labs.crio.do/albums/new");
        const data = await res.json();
        setNewAlbums(data);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

function Home() {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);

    useEffect(() => {
        fetchTopAlbums(setTopAlbums);
        fetchNewAlbums(setNewAlbums);
    }, [])

    return (
      <div className="Home">
        <Navbar/>
        <Hero/>
        <Section name="top-albums" songs={topAlbums}/>
        <Section name="new-albums" songs={newAlbums}/>
      </div>
    );
  }
  
  export default Home;