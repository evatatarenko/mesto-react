import React, { useEffect, useState } from "react";
import Card from "./Card";
import api from "../utils/api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    api
      .getUser()
      .then((profileUserInfo) => {
        setUser(profileUserInfo);
      })
      .catch((error) => console.log(error));

    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" onClick={onEditAvatar}>
          <div className="profile__avatar-vector"></div>
          <img src={user?.avatar} className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{user?.name}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button popup-link"
          ></button>
          <p className="profile__subtitle">{user?.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
