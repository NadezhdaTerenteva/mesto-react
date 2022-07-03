function ImagePopup() {
    return (
<div className="popup popup_preview" id="popup-preview">
    <div className="popup__photo-preview">
      <button className="popup__close-button" type="button" />
      <img src="<%=require('./images/altai_aleksandr-shemetillo--EWU60lOeys-unsplash.jpg')%>" alt="Фото" className="popup__photo-preview-img" />
      <h2 className="popup__photo-preview-title" />
    </div>
  </div>
    );
}

export default ImagePopup;