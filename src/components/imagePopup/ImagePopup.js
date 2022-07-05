function ImagePopup({card, onClose}) {
    return (
<div className={`popup ${card ? "popup_preview" : ''}`} id="popup-preview"> 
    <div className="popup__photo-preview">
      <button 
      className="popup__close-button" 
      type="button"
      onClick={onClose}
      />
      <img src='' alt="Foto" className="popup__photo-preview-img"/>
      <h2 className="popup__photo-preview-title"></h2>
    </div>
  </div>
    );
}

export default ImagePopup;