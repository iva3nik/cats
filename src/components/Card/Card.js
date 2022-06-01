import React, { useState } from "react";
import cn from "classnames";

import s from "./Card.module.scss";

const Card = ({ cat, likeCat }) => {
  return (
    <div className={s.card}>
      <img
        className={s.card__image}
        src={cat.url}
        alt="Ещё один котик"
        key={cat.id}
      />
      <button
        className={cn(s.card__like, { [s.card__like_liked]: cat.liked })}
        onClick={() => likeCat(cat)}
      ></button>
    </div>
  );
};

export default Card;
