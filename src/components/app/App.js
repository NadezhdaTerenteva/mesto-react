import Footer from "../footer/Footer.js";
import Header from "../header/Header.js";
import Main from "../main/Main.js";
import PopupWithForm from "../popupWithForm/PopupWithForm.js";
import ImagePopup from "../imagePopup/ImagePopup.js";

function App () {

    function onEditAvatar () {
        //document.querySelector('#popup-avatar').classList.add("popup_opened");
        console.log("working");
    }

    return (
<div className="body">
  <div className="page">
    <Header />
    <Main />
    <Footer />
  </div>
  
    <PopupWithForm 
        title='Редактировать профиль'
        name='profile'
        
    >
        <input type="text" name="name" defaultValue="Жак-Ив Кусто" className="popup__input" id="name" required minLength={2} maxLength={40} />
        <span id="name-error" />
        <input type="text" name="about" defaultValue="Исследователь океана" className="popup__input" id="about" required minLength={2} maxLength={200} />
        <span id="about-error" />
        <button className="popup__submit-button" type="submit">Сохранить</button>

     </PopupWithForm>

     <PopupWithForm 
        title='Обновить аватар'
        name='avatar'
        onEditAvatarHandler={onEditAvatar}

    >
        <input type="url" name="avatar" placeholder="Ссылка на изображение" className="popup__input" id="avatar" required />
        <span id="avatar-error" />
        <button className="popup__submit-button" type="submit">Сохранить</button>
        
     </PopupWithForm>


     <PopupWithForm 
        title='Новое место'
        name='place'
    >
        <input type="text" name="place" placeholder="Название" className="popup__input" id="place" required minLength={2} maxLength={30} />
        <span id="place-error" />
        <input type="url" name="link" placeholder="Ссылка на картинку" className="popup__input" id="link" required />
        <span id="link-error" />
        <button className="popup__submit-button" type="submit">Создать</button>
        
     </PopupWithForm>
  
     <PopupWithForm 
        title='Вы уверены?'
        name='confirm'
    >
        <button className="popup__close-button" type="button" />
        <h3 className="popup__header popup__header_confirm">Вы уверены?</h3>
        <button className="popup__submit-button" id="confirm-button" type="button">Да</button>
        
     </PopupWithForm>

    <ImagePopup />


  <template className="card__item">
    <li className="photo-grid__item">
      <button type="button" className="photo-grid__remove-button"></button>
      <img src="<%=require('./images/altai_aleksandr-shemetillo--EWU60lOeys-unsplash.jpg')%>" alt="Алтай" className="photo-grid__item-img" />
      <div className="photo-grid__item-title">
          <h2 className="photo-grid__item-name"></h2>
          <div className="photo-grid__item-likes-container">
            <button type="button" className="photo-grid__item-like-icon"></button>
            <h4 className="photo-grid__item-like-counter"></h4>
        </div>
      </div>
    </li>
  </template> 
</div>
    );
}

export default App;