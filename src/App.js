import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Section from "./Component/Section";
import FilterSection from "./Component/FilterSection";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [TopAlbum, setTopAlbum] = useState([]);
  const [NewAlbum, setNewAlbum] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredsongs, setfilteredsongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbum(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then((res) => {
      setNewAlbum(res.data);
    });
    axios.get(`${ENDPOINT}songs`).then((res) => {
      setSongs(res.data);
      setfilteredsongs(res.data);
    });
    axios.get(`${ENDPOINT}genres`).then((res) => {
      setGenres([{ key: "all", label: "All" }, ...res.data.data]);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section navId="ta" title="Top Album" data={TopAlbum} />
      <Section navId="na" title="New Album" data={NewAlbum} />
      <FilterSection
        title="Songs"
        data={filteredsongs}
        filters={genres}
        executeFilter={(genre) => {
          if (genre === "all") {
            setfilteredsongs(songs);
          } else {
            setfilteredsongs(songs.filter((song) => song.genre.key === genre));
          }
        }}
      />
    </div>
  );
}

export default App;
