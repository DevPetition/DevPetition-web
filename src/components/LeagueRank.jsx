import React from "react";
import League from "../img/league.png";
import RankLogo from "../img/ranklogo.png";

const LeagueRank = () => {
  const LeagueInfo = [
    {
      rank: "1등",
      people: "15234명",
      image: "League",
    },
    {
      rank: "2등",
      people: "1244명",
      image: "League",
    },
    {
      rank: "3등",
      people: "8219명",
      image: "League",
    },
  ];

  return (
    <div>
      {LeagueInfo.map((info) => {
        <div>
          <h1>{info.rank}</h1>
          <img src={info.image} />
          <span>
            <img src={RankLogo} />
            <p>{info.people}</p>
          </span>
        </div>;
      })}
    </div>
  );
};

export default LeagueRank;
