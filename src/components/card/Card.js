function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="photo-grid__item">
      <button type="button" className="photo-grid__remove-button"></button>
      <img
        src={props.link}
        alt={props.name}
        className="photo-grid__item-img"
        onClick={handleClick}
      />
      <div className="photo-grid__item-title">
        <h2 className="photo-grid__item-name">{props.name}</h2>
        <div className="photo-grid__item-likes-container">
          <button type="button" className="photo-grid__item-like-icon"></button>
          <h4 className="photo-grid__item-like-counter"></h4>
        </div>
      </div>
    </li>
  );
}

export default Card;
