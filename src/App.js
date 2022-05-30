import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [listCats, setListCats] = useState([]);

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
      .then((data) => setListCats(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Gallery cats={listCats} />
    </div>
  );
}

export default App;
