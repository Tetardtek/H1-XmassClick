import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../scss/components/navbar.scss";
import "../scss/root.scss";

import PrimaryButton from "./buttons/PrimaryButton";
import Burger from "./burger";
import { useWildCoin } from "./WildCoin/WildCoinContext";
import HUDON from "../../public/NavBar/HUDON.svg";
import HUDOFF from "../../public/NavBar/HUDOFF.svg";
import SnowOn from "../../public/NavBar/SnowOn.svg";
import SnowOff from "../../public/NavBar/SnowOff.svg";
import { useState } from "react";

export default function Navbar({
  navData,
  isVisible,
  setIsVisible,
  toggleSnow,
  setToggleSnow,
}) {
  Navbar.propTypes = {
    isVisible: PropTypes.bool,
    setIsVisible: PropTypes.function,
    setToggleSnow: PropTypes.function,
    toggleSnow: PropTypes.bool,
  }.isRequired;

  const { wildCoin } = useWildCoin();
  const [imageSrc, setImageSrc] = useState(HUDON);
  const [snowImageSrc, setSnowImageSrc] = useState(SnowOff);
  const [timerVisible, setTimerVisible] = useState(false);
  const handleClickWildCoin = () => {
    setTimerVisible(true);
  };

  const toggleHud = () => {
    if (!isVisible) {
      setIsVisible(true);
      setImageSrc(HUDOFF);
    } else {
      setIsVisible(false);
      setImageSrc(HUDON);
    }
  };
  function toggleSnowBtn() {
    if (toggleSnow === false) {
      setToggleSnow(true);
      setSnowImageSrc(SnowOn);
    } else {
      setToggleSnow(false);
      setSnowImageSrc(SnowOff);
    }
  }
  return (
    <nav className="header-main">
      <Link
        className="logo"
        to="/"
        aria-label="Retourner à la page d'accueil"
        title="Logo XmassClick"
      />
      <div className="navbar">
        <div className="wildCoin">
          {new Intl.NumberFormat().format(wildCoin)}
        </div>
        <ul className="nav-list">
          {navData.map((navIndex) => {
            if (navIndex.dropdown === undefined) {
              return navIndex.btn === false ? (
                <li key={navIndex.id}>
                  <Link className="mainLink" to={navIndex.linkurl}>
                    {navIndex.linkname}
                  </Link>
                </li>
              ) : (
                <li key={navIndex.id}>
                  <PrimaryButton
                    btnText={navIndex.linkname}
                    btnLink={navIndex.linkurl}
                  />
                </li>
              );
            }
            return (
              <li key={navIndex.id} className="dropdown">
                <Link className="mainLink" to={navIndex.linkurl}>
                  {navIndex.linkname}
                </Link>
                <ul className="dropdown-content">
                  {navIndex.dropdown.map((dropdown) => (
                    <li key={dropdown.id}>
                      <Link
                        className="dropLink"
                        to={navIndex.linkurl + dropdown.linkurl}
                      >
                        {dropdown.linkname}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <img
          onClick={() => toggleHud()}
          src={imageSrc}
          style={{ height: "28px" }}
          alt="boutton on"
        />
        <img
          onClick={() => toggleSnowBtn()}
          src={snowImageSrc}
          style={{ height: "28px" }}
          alt="boutton on"
        />
        <Burger navData={navData} />
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      btn: PropTypes.bool,
      id: PropTypes.string,
      linkname: PropTypes.string,
      linkurl: PropTypes.string,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          btn: PropTypes.bool,
          id: PropTypes.string,
          linkname: PropTypes.string,
          linkurl: PropTypes.string,
        })
      ),
    })
  ),
};

Navbar.defaultProps = {
  navData: [],
};
