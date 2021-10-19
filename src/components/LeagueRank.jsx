import React from "react";
import League from "../img/league.png";
import RankLogo from "../img/ranklogo.png";
import "../styles/Rank.css";

const LeagueRank = () => {
  const LeagueInfo = [
    {
      rank: "신청 1등",
      people: "15234명",
      image: League,
    },
    {
      rank: "신청 2등",
      people: "1244명",
      image: League,
    },
    {
      rank: "신청 3등",
      people: "8219명",
      image: League,
    },
  ];

  return (
    <div className="rankFrame">
      <div className="rankdiv">
        {LeagueInfo.map((info) => (
          <div className="eachrank">
            <h1 className="ranking">{info.rank}</h1>
            <img className="leagueImg" src={info.image} />
            <span className="people">
              <img src={RankLogo} className="inlogo" />
              <p>{info.people}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeagueRank;
