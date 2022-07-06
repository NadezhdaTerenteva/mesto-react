function PopupWithForm({ title, name, button, children, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`} id={`popup-${name}`}>
      <div className="popup__content">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <h3 className="popup__header">{title}</h3>
        <form
          name={`${name}-data`}
          className="popup__form"
          id={`${name}-data-form`}
          noValidate
        >
          {children}
          <button className="popup__submit-button" type="submit">{button}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
