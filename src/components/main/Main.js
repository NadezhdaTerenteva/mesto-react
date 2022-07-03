function Main({onEditAvatar}) {

    function handleEditAvatarClick () {
        onEditAvatar();
    }

    function handleEditProfileClick () {
        document.querySelector('#popup-profile').classList.add("popup_opened");
    }

    function handleAddPlaceClick () {
        document.querySelector('#popup-place').classList.add("popup_opened");
        
    }


    return (
        <main className="content">
        <section className="profile">
          <div 
          onClick={handleEditAvatarClick}
          className="profile__avatar-cover">
            <img src="<%=require('./images/avatar.jpg')%>" alt="Имя пользователя" className="profile__avatar" name="avatar" />
          </div>
          <div className="profile__info">
            <h1 className="profile__title" name="name" />
            <p className="profile__subtitle" name="about" />
            <button 
            onClick={handleEditProfileClick}
            aria-label="Редактировать" 
            type="button" 
            className="profile__edit-button" />
          </div>
          <button 
          onClick={handleAddPlaceClick}
          type="button" 
          className="profile__add-button" />
        </section>
        <section className="photo-grid">
          <ul className="photo-grid__items">
          </ul>
        </section>
      </main>
    );
  }
  
  export default Main;