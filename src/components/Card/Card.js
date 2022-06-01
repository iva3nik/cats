import React, { useState } from "react";
import cn from "classnames";

import s from "./Card.module.scss";

const Card = ({ cat, likeCat, deleteCat }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeCat = (cat) => {
    if (isLiked) {
      deleteCat(cat);
    } else {
      setIsLiked(true);
      likeCat(cat);
    }
  };

  return (
    <div className={s.card}>
      <img
        className={s.card__image}
        src={cat.url}
        alt="Ещё один котик"
        key={cat.id}
      />
      <button
        className={cn(s.card__like, { [s.card__like_liked]: isLiked })}
        onClick={() => handleLikeCat(cat)}
      ></button>
    </div>
  );
};

export default Card;
