import React from "react";
import cn from "classnames";

import Card from "../Card/Card";

import s from "./Gallery.module.scss";

const Gallery = ({ cats, likeCat }) => {
  return (
    <section className={s.gallery}>
      {cats &&
        cats.map((cat) => <Card key={cat.id} cat={cat} likeCat={likeCat} />)}
    </section>
  );
};

export default Gallery;
