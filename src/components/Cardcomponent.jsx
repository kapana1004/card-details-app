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
      <div className=" flex relative w-[375px] h-[240px] bg-[url('./assets/bg-main-mobile.png')] md:bg-[url('./assets/bg-main-desktop.png')] md:w-[483px] md:min-h-[100vh]">
        <div className=" w-[20px] h-[11px] absolute top-[40%] z-50 left-[78%] pl-[2px] text-white text-[9px] md:top-[63%] md:left-[125%] md:tracking-[2px] md:text-[14px] ">
          {cvv}
        </div>
        <img
          className=" w-[287px] h-[157px] absolute top-[10%] left-[18%] md:w-[447px] md:h-[245px] md:top-[50%] md:left-[50%]"
          src={cardBackimage}
          alt="cardback"
        />

        <div
          className=" absolute top-[47%] left-[6%] w-[287px] h-[157px] 
        bg-[url('./assets/bg-card-front.png')]
        pt-[84px] pl-[19px] rounded-[6px] md:w-[447px] md:h-[245px] md:top-[15%] md:left-[30%] "
        >
          {" "}
          <div className=" md:pt-[55px]">
            <span className=" text-[18px] text-white tracking-[2.2px] md:tracking-[3.422px] md:text-[28px] md:pl-[20px]">
              {cardFrontNum}{" "}
            </span>
            <div className=" flex flex-row pt-[10px] justify-between pr-[25px]">
              {" "}
              <span className=" text-white text-[9px] md:text-[14px] md:tracking-[2px] md:pl-[20px]">
                {holderName}
              </span>
              <span className=" text-white text-[9px] md:text-[14px] md:tracking-[2px]">
                {month}/{year}
              </span>
            </div>
          </div>
          <img
            className=" absolute top-[10%] left-[10%] w-[54px] h-[30px]"
            src={cardLogoImage}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
