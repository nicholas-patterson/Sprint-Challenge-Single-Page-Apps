import React from "react";

export default function LocationCard({ places }) {
  // image={image}
  console.log(places);
  return (
    <div>
      <h3>{places.name}</h3>
      <p>{places.dimension}</p>
      <p>{places.residents}</p>
    </div>
  );
}
