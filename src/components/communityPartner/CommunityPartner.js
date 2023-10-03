import React, { useEffect, useState } from "react";
import communityPartner from "../../img/team.jpg";
import "../../css/CommunityPartner.css";
import Background from "./../background/Background";

const CommunityPartner = () => {
  const [top, setTop] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // top++;
      setTop((top) => top + 1);
    }, 100);
  }, []);

  // const myStyle = {

  //     top: `${top}px`

  // };

  console.log(top);
  return (
    <div
      id="communityPartner"
      className="communityPartner d-flex justify-content-center align-items-center col-md"
    >
      <div className="image-container">
        <div className="first-image">
          <img className="object-fit-cover" src={communityPartner} alt="" />
        </div>
        <div className="second-image">
          <img className="object-fit-cover" src={communityPartner} alt="" />
        </div>
      </div>
      <div className="contents">
        <h2 className="main-title">Community Partners</h2>

        <p className="desc">
          The two of the community partners for this year's project are Tearfund
          and Micah Nepal.
        </p>

        <div className="tearfund-container">
          <div className="cp-items">
            <h4 className="title">Tearfund Nepal</h4>

            <p className="desc">
              Tearfund has been working in Nepal since the 1970s and is
              currently partnering with seven organisations across the country.
            </p>
          </div>
          <div className="cp-items">
            <div className="first"></div>
            <div className="second"></div>
            <h4 className="title">Micah Nepal</h4>

            <p className="desc">
              Micah Nepal is a registered non-governmental organization in
              Nepal. They attend and seek to assist in Nepal where help is
              needed, whether it be Education, Caring for Families, Water
              Cleanliness, Food supplies and disaster support. Micah has been
              working to equip and empower members and leaders in communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPartner;
