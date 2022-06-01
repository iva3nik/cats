import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

import * as main from "./utils/MainApi";

function App() {
  const [listCats, setListCats] = useState([]);
  const [listLikedCats, setListLikedCats] = useState([]);

  const likeCat = (cat) => {
    const likedCats = JSON.parse(localStorage.getItem("likedCats"));
    console.log("likedCats: ", likedCats);
    likedCats.push(cat);

    setListLikedCats(likedCats);
    localStorage.setItem("likedCats", JSON.stringify(likedCats));
  };

  const deleteCat = (cat) => {
    const newFilteredList = listLikedCats.filter((i) => i.id !== cat.id);
    setListLikedCats(newFilteredList);
    localStorage.setItem("likedCats", JSON.stringify(newFilteredList));
    setListCats(listCats);
  };

  useEffect(() => {
    localStorage.setItem("likedCats", JSON.stringify([]));
    main
      .getCats()
      .then((data) => setListCats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Gallery cats={listCats} likeCat={likeCat} deleteCat={deleteCat} />
          }
        />
        <Route
          path="/favourite-cats"
          element={
            <Gallery
              cats={listLikedCats}
              likeCat={likeCat}
              deleteCat={deleteCat}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
