import React from "react";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import PopupWithForm from "../popupWithForm/PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [placeName, setPlaceName] = useState("");

  const [link, setLink] = useState("");

  function handleAddPlaceName(e) {
    setPlaceName(e.target.value);
  }

  function handleAddPlaceLink(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      place: placeName,
      link: link,
    });
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      button="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={placeName}
        onChange={handleAddPlaceName}
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
        value={link}
        onChange={handleAddPlaceLink}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__input"
        id="link"
        required
      />
      <span id="link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
