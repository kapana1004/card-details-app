import React from "react";
import pathImage from "../assets/Path.png";

export default function Complete({ complete }) {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center">
      {" "}
      <div
        className=" w-[80px] h-[80px] rounded-full bg-violet-600 
    flex justify-center items-center mb-[35px] "
      >
        <img src={pathImage} alt="Path" />
      </div>
      <h1 className=" text-[28px] text-[#21092F] tracking-[3.42px] pb-[16px]">
        THANK YOU!
      </h1>
      <p className=" text-[18px] text-[#8F8694] pb-[48px]">
        We’ve added your card details
      </p>
      <button
        onClick={handleRefresh}
        className=" w-[327px] h-[53px] bg-[#21092F] rounded-[8px] text-white text-[18px]"
      >
        {" "}
        Continue
      </button>
    </div>
  );
}
