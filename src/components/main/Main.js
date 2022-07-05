import React, { useState, useEffect } from "react";

import {api} from "../../utils/Api.js";
import Card from "../card/Card.js";


function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState();
  
  const [userDescription, setUserDescription] = useState();

  const [userAvatar, setUserAvatar] = useState();

  const [cards, setCards] = useState([]);

  useEffect (() => {
    api.getUserInfo()
    .then((res)=> {
      setUserName(res.name)
      setUserDescription(res.about)
      setUserAvatar(res.avatar)
        })
        .catch ((err) => {
            console.log (err);
        })
  }, []); 

  useEffect (() => {
    api.getCards()
    .then((res)=> {
      setCards(res);
        })
        .catch ((err) => {
            console.log (err);
        })
  }, []); 

    return (
        <main className="content">
        <section className="profile">
          <div 
          onClick={onEditAvatar}
          className="profile__avatar-cover">
            <img src={userAvatar} alt="Имя пользователя" className="profile__avatar" name="avatar" />
          </div>
          <div className="profile__info">
            <h1 className="profile__title" name="name">{userName}</h1>
            <p className="profile__subtitle" name="about">{userDescription}</p>
            <button 
            onClick={onEditProfile}
            aria-label="Редактировать" 
            type="button" 
            className="profile__edit-button" />
          </div>
          <button 
          onClick={onAddPlace}
          type="button" 
          className="profile__add-button" />
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__items">

            {cards.map((item) => {
              return (
                <Card 
                key={item._id}
                name={item.name}
                link={item.link}
                onCardClick={onCardClick}
                />
              )
            })}
          
          </ul>
        </section>
      </main>
    );
  }
  
  export default Main;