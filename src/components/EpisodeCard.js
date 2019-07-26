import React from "react";

const EpisodeCard = ({ episode }) => {
  console.log(episode);
  return (
    <div>
      <h3>Episode Name: {episode.name}</h3>
      <p>Season: {episode.episode}</p>
      <p>Air Date: {episode.air_date}</p>
    </div>
  );
};

export default EpisodeCard;
