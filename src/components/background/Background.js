import React from "react";
import "../../css/Background.css";
import shape from "../../img/shape-grid.png";

const Background = () => {
  return (
    <div id="background" className="background d-flex justify-content-between ">
      <div className=" left ">
        <img src={shape} alt="" />
        <div className="box align-items-center justify-content-center"></div>
      </div>
      <div className=" right">
        <img src={shape} alt="" />
        <div className="box">
          <img src="" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="container justify-content-center mt-2">
          <h2 className="title">Background</h2>
          <div className="description">
            <p className="text-center">
              Sangh-Sangai, meaning “together” in Nepali, is a TearFund project
              in Nepal under a Scottish Government program working in disaster
              risk reduction, against gender based violence, health, community
              transformation & livelihood. Continuing from an INSPIRE Nepal 2022
              project, this year’s team is hoping to build on the remarkable MVP
              development carried out by 2022 Fall cohort of INSPIRE’s Nepal
              wing for Business Intelligence insights and impact measurement
              visualization for TearFund and it’s partner NGOs across Nepal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
