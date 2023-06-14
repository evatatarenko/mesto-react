import React from "react";

function PopupWithForm({ name, title, children, isOpen, onClose, onSubmit }) {
  return (
    <section
      className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className="form"
          name={name}
          onSubmit={onSubmit}
        >
          {children}
          <button className="form__submit-btn" type="submit">
            Сохранить
          </button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;