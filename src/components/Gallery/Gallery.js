import React from "react";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";
import { useLocation } from "react-router-dom";

const Gallery = ({ cats, likeCat, addNewCats }) => {
  const location = useLocation();

  return (
    <section className={s.gallery}>
      <div className={s.gallery__container}>
        {cats &&
          cats.map((cat) => <Card key={cat.id} cat={cat} likeCat={likeCat} />)}
      </div>
      {location.pathname === "/" && (
        <p className={s.gallery__load}>...загружаем еще котиков...</p>
      )}
    </section>
  );
};

export default Gallery;
