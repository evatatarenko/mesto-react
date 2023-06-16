import React, { useState } from "react";
import Header from "../components/Header.js";
import Main from "../components/Main.js";
import Footer from "../components/Footer.js";
import PopupWithForm from "../components/PopupWithForm.js";
import ImagePopup from "../components/ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Обновить аватар"
        name="popup-avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={() => setIsEditAvatarPopupOpen(false)}
      >
        <input
          id="link-avatar"
          className="form__text form__text_type_avatar"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          required
        />
        <span className="link-avatar-error form__input-error"></span>{" "}
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-popup"
        isOpen={isEditProfilePopupOpen}
        onClose={() => setIsEditProfilePopupOpen(false)}
      >
        <input
          className="form__text form__text_type_name"
          placeholder="Имя"
          type="text"
          id="profile-name"
          minLength="2"
          maxLength="40"
          name="name"
          required
        />
        <span class="form__input-error profile-name-error"></span>
        <input
          className="form__text form__text_type_job"
          placeholder="Профессия"
          type="text"
          id="job-input"
          name="job"
          minLength="2"
          maxLength="200"
          required
        />
        <span class="form__input-error job-input-error"></span>{" "}
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="newcard"
        isOpen={isAddPlacePopupOpen}
        onClose={() => setIsAddPlacePopupOpen(false)}
      >
        <input
          className="form__text form__text_type_title"
          minLength="2"
          maxLength="30"
          id="title-input"
          type="text"
          name="name"
          placeholder="Название"
          required
        />
        <span className="form__input-error title-input-error"></span>
        <input
          className="form__text form__text_type_link"
          id="link-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="form__input-error link-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
    </div>
  );
}

export default App;
