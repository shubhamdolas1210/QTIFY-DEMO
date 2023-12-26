import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Section from "./Component/Section";

const ENDPOINT = "https://qtify-backend-labs.crio.do/";

function App() {
  const [TopAlbum, setTopAlbum] = useState([]);
  const [NewAlbum, setNewAlbum] = useState([]);

  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`).then(({ data }) => {
      setTopAlbum(data);
    });
    axios.get(`${ENDPOINT}albums/new`).then(({ data }) => {
      setNewAlbum(data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section title="Top Album" data={TopAlbum} />
      <Section title="New Album" data={NewAlbum} />
    </div>
  );
}

export default App;
