import React from "react";

function Card({ onCardClick, card }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div id="element">
      <li className="element">
        <img
          class="element__img"
          id="image"
          src={card?.link}
          alt={card?.name}
          onClick={handleClick}
        />
        <div className="element__info">
          <h2 className="element__title">{card?.name}</h2>
          <div className="element__like-container">
            <button type="button" class="element__like"></button>
            <span className="element__count-like">{card?.likes?.length}</span>
          </div>
        </div>
        <button type="button" className="element__remove-btn"></button>
      </li>
    </div>
  );
}

export default Card;
