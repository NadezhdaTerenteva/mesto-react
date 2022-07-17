import { useState, useEffect } from "react";

import { api } from "../../utils/Api.js";

import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import Main from "../main/Main.js";
import PopupWithForm from "../popupWithForm/PopupWithForm.js";
import ImagePopup from "../imagePopup/ImagePopup.js";
import EditProfilePopup from "../editProfilePopup/EditProfilePopup.js";
import EditAvatarPopup from "../editAvatarPopup/EditAvatarPopup.js";
import Card from "../card/Card.js"; 

import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {

  const [currentUser, setCurrentUser] = useState({name: '', about: ''});

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  //const [cards, setCards] = useState([]);


  useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


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
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(userData) {
    api
    .setUserInfo(userData)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleUpdateAvatar(userData) {
    api
    .changeUserAvatar(userData)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen} 
        onClose={closeAllPopups} 
        onUpdateUser={handleUpdateUser} />

      <EditAvatarPopup 
        isOpen={isEditAvatarPopupOpen} 
        onClose={closeAllPopups} 
        onUpdateAvatar={handleUpdateAvatar} /> 

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
    </CurrentUserContext.Provider>
  );
}

export default App;
