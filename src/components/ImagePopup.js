function ImagePopup({ card, onClose }) {
  return (
    <div class={`popup image-popup ${card ? "popup_opened" : ""}`}>
      <figure class="image-popup__container">
        <img class="image-popup__image" src={card?.link} alt={card?.name} />
        <figcaption class="image-popup__caption">{card?.name}</figcaption>
        <button
          type="button"
          class="popup__close-btn"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}

export default ImagePopup;
