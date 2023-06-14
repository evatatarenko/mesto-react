function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" onClick={onEditAvatar}>
          <div className="profile__avatar-vector"></div>
          <img className="profile__avatar" />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">Жак-Ив Кусто</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="profile__edit-button popup-link"
          ></button>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button onClick={onAddPlace} type="button" className="profile__add-button"></button>
      </section>
      <section className="elements"></section>
    </main>
  )
}

export default Main;