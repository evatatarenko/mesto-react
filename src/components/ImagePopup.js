function ImagePopup(){
    return (
        <div className="popup image-popup">
      <figure className="image-popup__container">
        <img className="image-popup__image" src="#" alt="#" />
        <figcaption className="image-popup__caption">#</figcaption>
        <button
          type="button"
          className="popup__close-btn"
          aria-label="Закрыть"
        ></button>
      </figure>
    </div>
    )
}

export default ImagePopup;