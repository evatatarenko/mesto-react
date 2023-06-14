import React from "react";

function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div id="element">
      <li class="element">
        <img
          class="element__img"
          id="image"
          src={card?.link}
          alt={card?.name}
          onClick={handleClick}
        />
        <div class="element__info">
          <h2 class="element__title">{card?.name}</h2>
          <div class="element__like-container">
            <button type="button" class="element__like"></button>
            <span class="element__count-like">{card?.likes?.length}</span>
          </div>
        </div>
        <button type="button" class="element__remove-btn"></button>
      </li>
    </div>
  );
}

export default Card;
