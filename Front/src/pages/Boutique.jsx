import BoutiqueCard from "../components/BoutiqueCard";
// import { useWildCoin } from "..components/WildCoin/WildCoinContext";
import "../scss/shop.scss";
import shop from "../data/shop";

export default function Boutique() {


  return (
    <main>
      <div className="shoppagecontainer">
        <h1>Boutique</h1>
        <div className="cardcontainer">
          {shop.map((item) => {
            return (
              <BoutiqueCard
                key={item.name}
                name={item.name}
                price={item.price}
                incrementValue={item.incrementValue}
                description={item.description}
                image={item.image}
                link={item.link}
                type={item.type}
                buyed={item.buyed}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
