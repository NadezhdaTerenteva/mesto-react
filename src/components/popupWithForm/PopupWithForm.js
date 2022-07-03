function PopupWithForm({title, name, children}) {
    return (
<div className="popup" id={`popup-${name}`}>
    <div className="popup__content">
      <button className="popup__close-button" type="button" />
      <h3 className="popup__header">{title}</h3>
      <form name={`${name}-data`} className="popup__form" id={`${name}-data-form`} noValidate>
        {children}
      </form>
    </div>
  </div>
    );
}

export default PopupWithForm;