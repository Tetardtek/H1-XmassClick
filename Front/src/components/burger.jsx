import { NavLink as Link } from "react-router-dom";
import PropTypes from "prop-types";
import "../scss/components/navbar.scss";

import "../scss/root.scss";
import PrimaryButton from "./buttons/PrimaryButton";

export default function Burger({ navData }) {
  return (
    <nav className="menuToggle">
      
      <input type="checkbox" aria-label="Menu" />
      <span />
      <span />
      <span />
      <ul className="menu">
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
              <ul className="sousmenu">
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
    </nav>
  );
}

Burger.propTypes = {
  navData: PropTypes.arrayOf(
    PropTypes.shape({
      btn: PropTypes.bool,
      id: PropTypes.string.isRequired,
      linkname: PropTypes.string.isRequired,
      linkurl: PropTypes.string.isRequired,
      dropdown: PropTypes.arrayOf(
        PropTypes.shape({
          btn: PropTypes.bool,
          id: PropTypes.string.isRequired,
          linkname: PropTypes.string.isRequired,
          linkurl: PropTypes.string.isRequired,
        })
      ),
    })
  ),
}.isRequired;
