import { useState, useEffect } from "react";

import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import Main from "../main/Main.js";
import PopupWithForm from "../popupWithForm/PopupWithForm.js";
import ImagePopup from "../imagePopup/ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(undefined);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        button="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          defaultValue="Жак-Ив Кусто"
          className="popup__input"
          id="name"
          required
          minLength={2}
          maxLength={40}
        />
        <span id="name-error" />
        <input
          type="text"
          name="about"
          defaultValue="Исследователь океана"
          className="popup__input"
          id="about"
          required
          minLength={2}
          maxLength={200}
        />
        <span id="about-error" />
        
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        button="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="avatar"
          placeholder="Ссылка на изображение"
          className="popup__input"
          id="avatar"
          required
        />
        <span id="avatar-error" />
        
      </PopupWithForm>

      <PopupWithForm
        title="Новое место"
        name="place"
        button="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="place"
          placeholder="Название"
          className="popup__input"
          id="place"
          required
          minLength={2}
          maxLength={30}
        />
        <span id="place-error" />
        <input
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input"
          id="link"
          required
        />
        <span id="link-error" />
        
      </PopupWithForm>

      <PopupWithForm 
        title="Вы уверены?" 
        name="confirm"
        button="Да"
        >
        <button className="popup__close-button" type="button" />
        <h3 className="popup__header popup__header_confirm">Вы уверены?</h3>
        
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups}></ImagePopup>
    </div>
  );
}

export default App;
