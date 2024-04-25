import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import { useState, useEffect } from "react";
// import top_albums from "../data/top_albums.json";
// import songsJson from "../data/songs.json";
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

const fetchSongs = async (setSongs) => {
    try{
        const res = await fetch("https://qtify-backend-labs.crio.do/songs");
        const data = await res.json();
        console.log(data);
        setSongs(data);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

const fetchGenre = async (setGenre) => {
    try{
        const res = await fetch("https://qtify-backend-labs.crio.do/genres");
        const data = await res.json();
        console.log(data);
        setGenre(data);
        return data;
    } catch (err) {
        console.log(err);
        return [];
    }
}

function Home() {
    const [topAlbums, setTopAlbums] = useState([]);
    const [newAlbums, setNewAlbums] = useState([]);
    const [songs, setSongs] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        fetchTopAlbums(setTopAlbums);
        fetchNewAlbums(setNewAlbums);
        fetchSongs(setSongs);
        fetchGenre(setGenre);
    }, [])

    return (
      <div className="Home">
        <Navbar/>
        <Hero/>
        <Section name="top-albums" songs={topAlbums}/>
        <Section name="new-albums" songs={newAlbums}/>
        <Section name="songs" songs={songs} genre={genre}/>
      </div>
    );
  }
  
  export default Home;