import React from "react";
import cn from "classnames";

import s from "./Card.module.scss";

const Card = ({ cat }) => {
  return (
    <div className={s.card}>
      <img
        className={s.card__image}
        src={cat.url}
        alt="Ещё один котик"
        key={cat.id}
      />
      <div className={s.card__like}></div>
    </div>
  );
};

export default Card;
