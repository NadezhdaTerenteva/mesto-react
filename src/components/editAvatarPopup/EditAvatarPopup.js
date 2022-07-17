import React from "react";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

import PopupWithForm from "../popupWithForm/PopupWithForm";

function EditAvatarPopup ({isOpen, onClose, onUpdateAvatar}) {

const avatarRef = React.useRef();

    function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
        avatar: avatarRef.current.value,
      });
    } 

return (
    <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        button="Сохранить"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      >
        <input
          ref={avatarRef}
          type="url"
          name="avatar"
          placeholder="Ссылка на изображение"
          className="popup__input"
          id="avatar"
          required
        />
        <span id="avatar-error" />
        
      </PopupWithForm>
)
}

export default EditAvatarPopup;