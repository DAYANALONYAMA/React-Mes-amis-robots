import React from "react";
import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Info({ user }) {
  let { id } = useParams();

  const [Infos, setInfos] = useState("");
  const getInfos = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInfos(data);
      });
  };
  useEffect(() => {
    getInfos();
  }, []);

  return (
    <div className="main-container-2">
      <div className="more">
        <div className="robot">
          <img src={`https://robohash.org/${Infos.id}`}></img>
        </div>
        <p> {Infos?.name} </p>
        <p> {Infos?.email} </p>
        <p> {Infos?.address?.city} </p>
        <p> {Infos?.phone} </p>
        <p> {Infos?.website} </p>
      </div>
    </div>
  );
}
export default Info;
