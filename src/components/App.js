function App() {
  return (
    <div className="App">
      <header className="header">
    </header>
      <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn">
          <div className="profile__avatar-vector"></div>
          <img className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button
            type="button"
            className="profile__edit-button popup-link"
          ></button>
          <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="elements"></section>
      <footer className="footer">
        <p className="footer__copyright">&copy; 2023 Mesto Russia</p>
      </footer>
    </main>
    <div className="popup popup-avatar">
      <button
        type="button"
        className="popup__close-btn popup-avatar__close-btn"
        aria-label="Закрыть"
      ></button>
      <div className="popup__content">
        <form className="form form-avatar">
          <h2 className="popup__title popup-avatar__title">Обновить аватар</h2>
          <div className="form__info">
            <input
              id="link-avatar"
              className="form__text form__text_type_avatar"
              type="url"
              placeholder="Ссылка на картинку"
              name="link"
              required
            />
            <span className="link-avatar-error form__input-error"></span>
          </div>
          <button type="submit" className="form__submit-btn popup-avatar__btn">
            Сохранить
          </button>
        </form>
      </div>
    </div>
    <div className="popup popup-confirm">
      <div className="popup__content">
        <form className="form">
          <button
            className="popup__close-btn popup-confirm__close-btn"
            type="button"
          ></button>
          <h2 className="popup__title popup-confirm__title">Вы уверены?</h2>
          <button type="submit" className="form__submit-btn">Да</button>
        </form>
      </div>
    </div>
    <div className="popup edit-popup">
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          id="edit-cls-btn"
        ></button>
        <div className="popup__content">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="form form-edit"
            name="info-edit"
            method="post"
            novalidate
          >
            <div className="form__info">
              <input
                className="form__text form__text_type_name"
                placeholder="Имя"
                type="text"
                id="profile-name"
                minlength="2"
                maxlength="40"
                name="name"
                required
              />
              <span className="form__input-error profile-name-error"></span>
              <input
                className="form__text form__text_type_job"
                placeholder="Профессия"
                type="text"
                id="job-input"
                name="job"
                minlength="2"
                maxlength="200"
                required
              />
              <span className="form__input-error job-input-error"></span>
            </div>

            <button type="submit" className="form__submit-btn">Сохранить</button>
          </form>
        </div>
      </div>
    </div>
    <div className="popup newcard">
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          id="newcard-cls-btn"
        ></button>
        <div className="popup__content">
          <h2 className="popup__title">Новое место</h2>
          <form
            className="form form-add"
            name="info-add"
            id="addform"
            method="post"
            novalidate
          >
            <div className="form__info">
              <input
                className="form__text form__text_type_title"
                minlength="2"
                maxlength="30"
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
            </div>
            <button type="submit" className="form__submit-btn">Создать</button>
          </form>
        </div>
      </div>
    </div>
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
    </div>
  );
}

export default App;