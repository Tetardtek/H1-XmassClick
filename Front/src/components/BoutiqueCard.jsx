import { useWildCoin } from "./WildCoin/WildCoinContext";
import "../scss/components/boutiquecard.scss";
import "../scss/components/buttons.scss";
import PropTypes from "prop-types";

export default function BoutiqueCard({
  name,
  price,
  incrementValue,
  description,
  image,
  link,
  type,
  buyed,
}) {
  BoutiqueCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    incrementValue: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    buyed: PropTypes.bool.isRequired,
  };

  const {
    wildCoin,
    incrementClick,
    setWildCoin,
    setIncrementClick,
    incrementPerSecond,
    setIncrementPerSecond,
    setCoffee,
    setSantaDrunk,
    setManic,
    setSnowman,
    setBonnet,
    setSugar,
    setCookie,
    setCouronne,
    setEpice,
    setBiere,
  } = useWildCoin();

  const acheterAmelioration = (type, price, name) => {
    const prices = price;
    const value = prices;

   

    if (wildCoin >= value) {
      if (type === "actif") {
        setIncrementClick(incrementClick + incrementValue);
      } else if (type === "passif") {
        setIncrementPerSecond(incrementPerSecond + incrementValue);
      }
      setWildCoin(wildCoin - value);
      switch (name) {
        case "Tasse à café":
          setCoffee((prevCoffee) => [true, prevCoffee[1] + 1]);
          break;
        case "Manic":
          setManic((prevManic) => [true, prevManic[1] + 1]);
          break;
        case "Bonnet":
          setBonnet((prevBonnet) => [true, prevBonnet[1] + 1]);
          break;
        case "Mr Bonhomme":
          setSnowman((prevSnowman) => [true, prevSnowman[1] + 1]);
          break;
        case "Canne en sucre":
          setSugar((prevSugar) => [true, prevSugar[1] + 1]);
          break;
        case "Cookie":
          setCookie((prevCookie) => [true, prevCookie[1] + 1]);
          break;
        case "Couronne d'hiver":
          setCouronne((prevCouronne) => [true, prevCouronne[1] + 1]);
          break;
        case "Mr pain d'épice":
          setEpice((prevEpice) => [true, prevEpice[1] + 1]);
          break;
        case "Bière":
          setBiere((prevBiere) => [true, prevBiere[1] + 1]);
          setSantaDrunk(true);
          break;
        default:
          break;
      }
    } else {
      console.log("Pas assez de WildCoin pour acheter cette amélioration.");
    }
  };
  return (
    <div className="shopcardcontainer">
      <div className="shopcontainer">
        <div
          className="cardpicture"
          style={{ backgroundImage: `url(${image})` }}
          alt={`image de ${name}`}
        />
        <div>
          <div className="titlesection">
            <p className="itemname">{name}</p>
            <div className="price">
              <p className="itemprice">{price}</p>

              <div className="priceicon" />
            </div>
          </div>
          <div className="description">
            <p className="itemdesc">
              <em>
                {type} + {incrementValue}
              </em>
            </p>
            <p className="itemdesc">{description}</p>
          </div>
        </div>
        <button
          onClick={() => acheterAmelioration(type, price, name)}
          className="primary-button"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}
