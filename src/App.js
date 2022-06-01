import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

import * as main from "./utils/MainApi";

function App() {
  const [listCats, setListCats] = useState([]);

  const likeCat = (cat) => {
    const newList = listCats.map((i) =>
      i.id === cat.id ? { ...i, liked: !i.liked } : i
    );
    setListCats(newList);
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
          element={<Gallery cats={listCats} likeCat={likeCat} />}
        />
        <Route
          path="/favourite-cats"
          element={
            <Gallery cats={listCats.filter((i) => i.liked)} likeCat={likeCat} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
