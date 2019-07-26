import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => setLocation(res.data.results));
  }, []);

  return (
    <div>
      {location.map((places, index) => {
        return <LocationCard key={index} places={places} />;
      })}
    </div>
  );
}
