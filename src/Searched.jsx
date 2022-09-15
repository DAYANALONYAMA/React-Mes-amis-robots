import React from "react";

import Search from "./Search";
import { useEffect, useState } from "react";
function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  const [search, setSearch] = useState("");
  const getSearched = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSearchedRecipes(data);
        console.log(data);
      });
  };
  useEffect(() => {
    getSearched();
  }, []);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      {searchedRecipes.length > 0 && (
        <div className="search-container">
          {searchedRecipes
            .filter((user) =>
              search.length >= 3
                ? user.name.toLowerCase().includes(search.toLowerCase())
                : true
            )
            .map((user) => {
              return (
                <div key={user.id} className="main-container">
                  <div className="robot">
                    {" "}
                    <img src={`https://robohash.org/${user.id}`}></img>
                  </div>
                  <div className="robot-infos">
                    <p className="name"> {user.name}</p>

                    <p className="email"> {user.email} </p>
                  </div>
                  <div className="more-info">
                    <p> {user.name} </p>
                    <p> {user.email} </p>
                    <p> {user.address.city} </p>
                    <p> {user.phone} </p>
                    <p> {user.website} </p>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Searched;

{
  /* 
   position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, .7);
    z-index: 10;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;


  <div class="more-info">PLus info<div>*/
}
