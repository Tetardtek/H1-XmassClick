import "../scss/components/achievementscard.scss";
import PropTypes from "prop-types";

function AchievementsCard({ name, description, image, key }) {
  AchievementsCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    key: PropTypes.number.isRequired,
  };

  return (
    <div className="achievCardcontainer">
      <img
        className="achievecardpicture"
        key={key}
        src={image}
        alt="cartes speciales"
      />
      <div className="achievetitle">
        <p className="achievname">{name}</p>
        <p className="achievdescription">{description}</p>
      </div>
    </div>
  );
}

export default AchievementsCard;
