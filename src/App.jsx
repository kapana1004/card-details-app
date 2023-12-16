import { useState } from "react";
import { useForm } from "react-hook-form";
import bgmobileImage from "../public/assets/bg-main-mobile.png";
import cardBackimage from "../public/assets/bg-card-back.png";
import carFrontimage from "../public/assets/bg-card-front.png";
import cardLogoImage from "../public/assets/card-logo.svg";

function formatCardNumber(value) {
  const cleanedValue = value.replace(/\D/g, "");

  const formattedValue = cleanedValue
    .slice(0, 16)
    .replace(/(\d{4})/g, "$1 ")
    .trim();

  return formattedValue;
}

function formatCardMonth(value) {
  const cleanedMonthValue = value.replace(/\D/g, "");

  if (cleanedMonthValue > "12") {
    return "nope";
  }

  const formattedMonthValue = cleanedMonthValue.slice(0, 2).trim();

  return formattedMonthValue;
}
function formatCardYear(value) {
  const cleanedYearValue = value.replace(/\D/g, "");
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let twoDigitsOfcurrentYear = currentYear.toString().slice(2);

  if (
    /^\d{2}$/.test(cleanedYearValue) &&
    parseInt(cleanedYearValue, 10) < twoDigitsOfcurrentYear
  ) {
    return "nope";
  }

  const formattedYearValue = cleanedYearValue.slice(0, 2).trim();

  return formattedYearValue;
}

function App() {
  const [details, setDetails] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const cardNumber = watch("cardNumber", "");
  const handleCardNumberChange = (event) => {
    const formattedValue = formatCardNumber(event.target.value);
    setValue("cardNumber", formattedValue);
  };
  const cardMonth = watch("cardMonth", "");
  const handlCardMonth = (event) => {
    setValue("cardMonth", formatCardMonth(event.target.value));
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const cardYear = watch("cardYear", "");
  const handleCardYear = (event) => {
    setValue("cardYear", formatCardYear(event.target.value));
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-[91px] min-h-[100vh] min-w-[100vw] ">
      <div className=" flex relative">
        <img src={bgmobileImage} alt="" />
        <img
          className=" w-[287px] h-[157px] absolute top-[10%] left-[18%]"
          src={cardBackimage}
          alt="cardback"
        />
        <img
          className=" absolute top-[47%] left-[6%] w-[287px] h-[157px]"
          src={carFrontimage}
          alt="cardfront"
        />
        <img
          className=" absolute top-[53%] left-[10%] w-[54px] h-[30px]"
          src={cardLogoImage}
          alt="logo"
        />
      </div>
      <div className=" bg-white w-[375px] h-[704px] pl-[20px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nameOnCard" className="form-label flex flex-col">
              CARDHOLDER NAME
              <input
                id="nameOnCard"
                type="text"
                className="form-control pl-[15px] w-[327px] h-[45px] rounded-lg border-[0.5px] border-zinc-400 mt-[10px]"
                {...register("nameOnCard", {
                  required: "Name on card is required",
                })}
              />
            </label>
            {errors.nameOnCard && (
              <p className="text-danger">{errors.nameOnCard.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              className="form-control pl-[15px] w-[327px] h-[45px] rounded-lg border-[0.5px] border-zinc-400 mt-[10px]"
              {...register("cardNumber", {
                required: "Card number is required",
              })}
              value={cardNumber}
              onInput={handleCardNumberChange}
            />
            {errors.cardNumber && (
              <p className="text-danger">{errors.cardNumber.message}</p>
            )}
          </div>
          <div className="mb-3 flex flex-row">
            <label htmlFor="expiryDate" className="form-label flex flex-col">
              EXP. DATE (MM/YY)
              <div className=" flex flex-row gap-[10px]">
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="MM"
                  className=" mt-[10px] pl-[20px] form-control border-[0.5px] border-slate-500 w-[72px] h-[45px] rounded-lg"
                  {...register("expiryDate", {
                    required: "Can’t be blank",
                  })}
                  value={cardMonth}
                  onInput={handlCardMonth}
                />
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="YY"
                  className=" mt-[10px]  pl-[20px] form-control border-[0.5px] border-slate-500 w-[72px] h-[45px] rounded-lg"
                  {...register("expiryDate", {
                    required: "Can’t be blank",
                  })}
                  value={cardYear}
                  onInput={handleCardYear}
                />
              </div>
              {errors.expiryDate && (
                <p className="text-danger">{errors.expiryDate.message}</p>
              )}
            </label>
            <label htmlFor="cvv" className="form-label flex flex-col">
              <span className=" pl-[15px]">CVV</span>
              <input
                id="cvv"
                type="text"
                placeholder="e.g. 123"
                className=" mt-[10px] pl-[50px] form-control w-[164px] h-[45px] rounded-lg border-[0.5px] border-zinc-400 ml-[10px]"
                {...register("cvv", { required: "Can’t be blank" })}
              />
              {errors.cvv && (
                <p className="text-danger">{errors.cvv.message}</p>
              )}
            </label>
          </div>
          <div className="mb-3"></div>
          <button
            type="submit"
            className=" bg-[#21092F] rounded-lg w-[327px] h-[53px] text-white"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
