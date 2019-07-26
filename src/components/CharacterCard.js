import React from "react";

export default function CharacterCard({ character }) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <h3>{character.name}</h3>
      <p>
        {character.species} {character.status}
      </p>
      <h5>Locatation: {character.location.name}</h5>
      <h5>Origin: {character.origin.name}</h5>
    </div>
  );
}

// Almost Fininshed
