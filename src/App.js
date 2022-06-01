import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [listCats, setListCats] = useState([]);
  const [listLikedCats, setListLikedCats] = useState([]);

  const likeCat = (cat) => {
    const likedCats = JSON.parse(localStorage.getItem("likedCats")) || [];
    console.log("likedCats: ", likedCats);
    likedCats.push(cat);

    setListLikedCats(likedCats);
    localStorage.setItem("likedCats", JSON.stringify(likedCats));
  };

  useEffect(() => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?limit=18&mime_types=&order=Random&size=small&page=2&category_ids=15&sub_id=demo-c0e1a4",
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          mode: "no-cors",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setListCats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Gallery cats={listCats} likeCat={likeCat} />}
        />
        <Route
          path="/favourite-cats"
          element={<Gallery cats={listLikedCats} />}
        />
      </Routes>
    </div>
  );
}

export default App;
