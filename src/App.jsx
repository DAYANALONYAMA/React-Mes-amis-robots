import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Info from "./Infos";
import Searched from "./Searched";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Searched />} />
          <Route path="/:id" element={<Info />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
