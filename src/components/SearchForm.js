import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm({ onSearch }) {
  const [query, setQuery] = useState({
    name: ""
  });
  const handleInputChange = event => {
    setQuery({ ...query, name: event.target.value });
  };

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${query.name}`)
      .then(res => console.log(res.data));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  console.log(onSearch);

  return (
    <section className="search-form">
      {/* <form onSubmit={() => onSearch(query)}> */}
      <form onSubmit={() => handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
