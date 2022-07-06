function ImagePopup({ card, onClose }) {
  return card ? (
    <div
      className={`popup popup_preview ${card && "popup_opened"}`}
      id="popup-preview"
    >
      <div className="popup__photo-preview">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img src={card.link} alt="Foto" className="popup__photo-preview-img" />
        <h2 className="popup__photo-preview-title"></h2>
      </div>
    </div>
  ) : null;
}

export default ImagePopup;
