import React from "react";
import cardBackimage from "../assets/bg-card-back.png";
import cardLogoImage from "../assets/card-logo.svg";

export default function Cardcomponent({
  cardFrontNum,
  holderName,
  month,
  year,
  cvv,
}) {
  return (
    <div>
      <div className=" flex relative w-[375px] h-[240px] bg-[url('/Users/mac/interactive-card/src/assets/bg-main-mobile.png')]">
        {/* <img src={bgmobileImage} alt="" /> */}

        <div className=" w-[20px] h-[11px] absolute top-[40%] z-50 left-[78%] pl-[2px] text-white text-[9px] ">
          {cvv}
        </div>
        <img
          className=" w-[287px] h-[157px] absolute top-[10%] left-[18%]"
          src={cardBackimage}
          alt="cardback"
        />
        {/* <img
          className=" absolute top-[47%] left-[6%] w-[287px] h-[157px]"
          src={carFrontimage}
          alt="cardfront"
        /> */}
        <div
          className=" absolute top-[47%] left-[6%] w-[287px] h-[157px] 
        bg-[url('/Users/mac/interactive-card/src/assets/bg-card-front.png')]
        pt-[84px] pl-[19px] rounded-[6px] "
        >
          <span className=" text-[18px] text-white tracking-[2.2px] ">
            {cardFrontNum}{" "}
          </span>
          <div className=" flex flex-row pt-[10px] justify-between pr-[25px]">
            {" "}
            <span className=" text-white text-[9px]">{holderName}</span>
            <span className=" text-white text-[9px]">
              {month}/{year}
            </span>
          </div>
        </div>
        <img
          className=" absolute top-[53%] left-[10%] w-[54px] h-[30px]"
          src={cardLogoImage}
          alt="logo"
        />
      </div>
    </div>
  );
}
