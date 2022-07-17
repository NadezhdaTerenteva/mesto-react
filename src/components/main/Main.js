import React, { useState, useEffect } from "react";

import { api } from "../../utils/Api.js";
import Card from "../card/Card.js";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    if (!isLiked) {
      api
        .setLikes(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api
        .deleteLikes(card._id, !isLiked)
        .then((newCard) => {
          setCards((state) =>
            state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleCardDelete(card) {
    const isOwn = card.owner._id === currentUser._id;

    if (isOwn) {
      api
        .deleteCard(card._id)
        .then(() => {
          const newCards = cards.filter((i) => card._id !== i._id);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <main className="content">
      <section className="profile">
        <div onClick={onEditAvatar} className="profile__avatar-cover">
          <img
            src={currentUser.avatar}
            alt="Имя пользователя"
            className="profile__avatar"
            name="avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__title" name="name">
            {currentUser.name}
          </h1>
          <p className="profile__subtitle" name="about">
            {currentUser.about}
          </p>
          <button
            onClick={onEditProfile}
            aria-label="Редактировать"
            type="button"
            className="profile__edit-button"
          />
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add-button"
        />
      </section>
      <section className="photo-grid">
        <ul className="photo-grid__items">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                card={item}
                onCardClick={() => onCardClick(item)}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
