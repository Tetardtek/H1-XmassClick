import { useState } from "react";
import AchievementsCard from "../components/AchievementsCard";
import "../scss/achievements.scss";
import { useWildCoin } from "../components/WildCoin/WildCoinContext";
import achievements from "../data/Achievements.json";

function Achievements() {
  const { wildCoin } = useWildCoin();
  let score = 1;
  if (wildCoin >= 25) {
    score = Math.floor((wildCoin - 25) / 400) + 1;
  } else {
    score = 0;
  }
  return (
    <div className="fullachieve">
      <h1>Succès</h1>
      <div className="achievementscontainer">
        <div className="achievementscardcontainer">
          {achievements &&
            achievements.slice(0, score).map((a) => {
              return (
                <AchievementsCard
                  key={a.id}
                  name={a.name}
                  description={a.description}
                  image={a.image}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Achievements;
