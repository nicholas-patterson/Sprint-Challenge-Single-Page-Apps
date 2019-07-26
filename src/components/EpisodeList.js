import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => setEpisodes(res.data.results));
  }, []);

  return (
    <div className="grid-view">
      {episodes.map(episode => {
        return <EpisodeCard episode={episode} />;
      })}
    </div>
  );
};

export default EpisodeList;
