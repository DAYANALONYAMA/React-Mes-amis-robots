import { useState } from "react";

function Search({ search, setSearch }) {
  return (
    <div>
      <h1
        style={{
          color: "aquamarine",
          fontFamily: "SEGA LOGO FONT",
        }}
      >
        Mes amis Robots
      </h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name="search"
        value={search}
      />
    </div>
  );
}

export default Search;
