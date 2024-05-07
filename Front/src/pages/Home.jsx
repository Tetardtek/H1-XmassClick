import { Helmet } from "react-helmet";
import { useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "../scss/home.scss";
import { useEffect } from "react";

import { useWildCoin } from "../components/WildCoin/WildCoinContext";

export default function Home() {
  const [toggleSnow, setToggleSnow] = useOutletContext();
  Home.propTypes = {
    setToggleSnow: PropTypes.function,
    toggleSnow: PropTypes.bool,
  }.isRequired;

  const { biere, setBiere, santaDrunk, setSantaDrunk } = useWildCoin();

  var snow = {
    wind: 0,
    maxXrange: 40,
    minXrange: 20,
    maxSpeed: 1,
    minSpeed: 3,
    color: "#fff",
    char: "*",
    maxSize: 32,
    minSize: 10,

    flakes: [],
    WIDTH: -10,
    HEIGHT: 0,

    init: function (nb) {
      var o = this,
        frag = document.createDocumentFragment();
      o.getSize();

      for (var i = 0; i < nb; i++) {
        var flake = {
          x: o.random(o.WIDTH),
          y: -o.maxSize,
          xrange: o.minXrange + o.random(o.maxXrange - o.minXrange),
          yspeed: o.minSpeed + o.random(o.maxSpeed - o.minSpeed, 100),
          life: 0,
          size: o.minSize + o.random(o.maxSize - o.minSize),
          html: document.createElement("span"),
        };

        flake.html.style.position = "absolute";
        flake.html.style.top = flake.y + "px";
        flake.html.style.left = flake.x + "px";
        flake.html.style.fontSize = flake.size + "px";
        flake.html.style.color = o.color;
        flake.html.appendChild(document.createTextNode(o.char));
        frag.appendChild(flake.html);
        flake.html.style.userSelect = "none";
        flake.html.style.overflow = "hidden";
        o.flakes.push(flake);
      }

      document.body.appendChild(frag);
      o.animate();

      window.onresize = function () {
        o.getSize();
      };
    },

    animate: function () {
      var o = this;
      for (var i = 0, c = o.flakes.length; i < c; i++) {
        var flake = o.flakes[i],
          top = flake.y + flake.yspeed,
          left = flake.x + Math.sin(flake.life) * flake.xrange + o.wind;
        if (
          top < o.HEIGHT - flake.size - 10 &&
          left < o.WIDTH - flake.size &&
          left > 0
        ) {
          flake.html.style.top = top + "px";
          flake.html.style.left = left + "px";
          flake.y = top;
          flake.x += o.wind;
          flake.life += 0.01;
        } else {
          flake.html.style.top = -o.maxSize + "px";
          flake.x = o.random(o.WIDTH);
          flake.y = -o.maxSize;
          flake.html.style.left = flake.x + "px";
          flake.life = 0;
        }
      }
      setTimeout(function () {
        o.animate();
      }, 20);
    },

    stop: function () {
      for (var i = 0, c = this.flakes.length; i < c; i++) {
        document.body.removeChild(this.flakes[i].html);
      }
      this.flakes = [];
    },

    random: function (range, num) {
      num = num ? num : 1;
      return Math.floor(Math.random() * (range + 1) * num) / num;
    },

    getSize: function () {
      this.WIDTH = document.body.clientWidth || window.innerWidth;
      this.HEIGHT = document.body.clientHeight || window.innerHeight;
    },
  };

  const { incrementClick, incrementWildCoin } = useWildCoin();

  const createParticle = (x, y) => {
    const cookieClicks = document.querySelector(".pieces");

    const particle = document.createElement("a");
    particle.style.backgroundImage = "url('/png/w-coin.png')";
    particle.setAttribute("class", "pieces-particle");
    particle.style.left = x + "%";
    particle.style.bottom = y + "px";

    cookieClicks.appendChild(particle);

    setTimeout(() => {
      cookieClicks.removeChild(particle);
    }, 1500);
  };

  const handleIncrement = () => {
    incrementWildCoin(incrementClick);
    createParticle(50, 300);
  };

  useEffect(() => {
    if (toggleSnow) {
      snow.init(10);
    } else {
      snow.stop();
    }

    return () => {
      snow.stop();
    };
  }, [toggleSnow]);

  useEffect(() => {
    const main = document.querySelector(".bghomecover");
    const santa = document.querySelector(".santaclaus");
    if (main !== undefined) {
      if (biere[1] >= 1) {
        santa.style.background = `url("/svg/SantaClause-drink.svg")`;
        if (santaDrunk === true) {
          main.style.filter = `blur(${biere[1]}px)`;

          setTimeout(() => {
            console.count("setTimeOut");
            main.style.filter = `blur(0px)`;
            setSantaDrunk(false);
          }, biere[1] * 5000);
        }
      }
    }
  }, [biere, setBiere]);

  return (
    <main className="bghomecover">
      <Helmet>
        <meta
          name="description"
          content="Xmass Click votre nouveau Clicker préféré !"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://xmass.click/" />
        <meta property="og:url" content="https://xmass.click/" />
        <meta property="og:site_name" content="Xmass Click" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="mywebsite | title" />
        <meta
          property="og:description"
          content="Xmass Click votre nouveau Clicker préféré !"
        />
        <meta
          property="og:image"
          content="https://xmass.click/webp/share-cover.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://xmass.click/webp/share-cover.webp"
        />
        <meta property="og:image:width" content="584" />
        <meta property="og:image:height" content="384" />
        <meta property="fb:pages" content="" />
        <meta property="fb:admins" content="" />
        <meta property="fb:app_id" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="Xmass Click" />
        <meta
          name="twitter:description"
          content="Xmass Click votre nouveau Clicker préféré !"
        />
        <meta
          name="twitter:image"
          content="https://xmass.click/webp/share-cover.webp"
        />

        <title>Xmass Click</title>
      </Helmet>
      <div className="santaposition">
        <div className="pieces" />
        <div className="santaclaus" onClick={handleIncrement} />
      </div>
      <div className="boostList"></div>
    </main>
  );
}
