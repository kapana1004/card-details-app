import { useState } from "react";
import { useForm } from "react-hook-form";
import Cardcomponent from "./components/Cardcomponent";
import Complete from "./components/Complete";

// import bgmobileImage from "./assets/bg-main-mobile.png";

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

function formatCvv(value) {
  const cleanedCvvValue = value.replace(/\D/g, "");
  const formatedCvv = cleanedCvvValue.slice(0, 4).trim();
  return formatedCvv;
}

function App() {
  const [cardFrontNum, setCardFontNum] = useState("0000  0000  0000  0000");
  const [holderName, setholderName] = useState("card holder");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");
  const [cvv, setCvv] = useState("000");
  const [complete, setComplete] = useState(false);
  const [hideDetails, setHideDetals] = useState(false);
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
  const cardHolder = watch("cardHolder", "");
  const handleCardHolder = (event) => {
    setValue("cardHolder", event.target.value);
  };

  const cardMonth = watch("cardMonth", "");
  const handlCardMonth = (event) => {
    setValue("cardMonth", formatCardMonth(event.target.value));
  };
  const onSubmit = (data) => {
    if (Object.keys(errors).length === 0) {
      // If no errors, setComplete to true
      setComplete(true);
      setHideDetals(true);
    }
    console.log(data);
  };
  const cardYear = watch("cardYear", "");
  const handleCardYear = (event) => {
    setValue("cardYear", formatCardYear(event.target.value));
  };
  const cardCvv = watch("cardCvv", "");
  const handleCardCvv = (event) => {
    setValue("cardCvv", formatCvv(event.target.value));
  };
  const cardNumbeHandling = () => {
    setCardFontNum(cardNumber);
    setholderName(cardHolder);
    setMonth(cardMonth);
    setYear(cardYear);
    setCvv(cardCvv);
    // setComplete(true);
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-[91px] min-h-[100vh] min-w-[100vw] ">
      <Cardcomponent
        cardFrontNum={cardFrontNum}
        holderName={holderName}
        month={month}
        year={year}
        cvv={cvv}
      />
      {complete ? <Complete complete={complete} errors={errors} /> : null}

      <div
        className={
          hideDetails ? " hidden" : ` bg-white w-[375px] h-[704px] pl-[20px]`
        }
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="nameOnCard" className="form-label flex flex-col">
              CARDHOLDER NAME
              <input
                id="nameOnCard"
                type="text"
                placeholder="e.g. Jane Appleseed"
                className={`form-control pl-[15px] w-[327px] h-[45px] rounded-lg border-[0.5px] border-zinc-400 mt-[10px]
                ${errors.nameOnCard && " border-[#FF5050]"}`}
                {...register("nameOnCard", {
                  required: "Name on card is required",
                })}
                value={cardHolder}
                onChange={handleCardHolder}
              />
            </label>
            {errors.nameOnCard && (
              <p className="text-danger text-[#FF5050]">
                {errors.nameOnCard.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="cardNumber" className="form-label">
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
              className={`form-control pl-[15px] w-[327px] h-[45px] rounded-lg border-[0.5px] border-zinc-400 mt-[10px]
              ${errors.nameOnCard && " border-[#FF5050]"}`}
              {...register("cardNumber", {
                required: "Card number is required",
              })}
              value={cardNumber}
              onInput={handleCardNumberChange}
            />
            {errors.cardNumber && (
              <p className="text-danger text-[#FF5050]">
                {errors.cardNumber.message}
              </p>
            )}
          </div>
          <div className="mb-3 flex flex-row">
            <label htmlFor="expiryDate" className="form-label flex flex-col">
              EXP. DATE (MM/YY)
              <div className=" flex flex-row gap-[10px]">
                <input
                  id="expiryMonth"
                  type="text"
                  placeholder="MM"
                  className={`mt-[10px] pl-[20px] form-control border-[0.5px] border-slate-500 w-[72px] h-[45px] rounded-lg
                  ${errors.expiryDate && " border-[#FF5050]"}`}
                  {...register("cardMonth", {
                    required: "Can’t be blank",
                  })}
                  value={cardMonth}
                  onInput={handlCardMonth}
                />
                <input
                  id="expiryYear"
                  type="text"
                  placeholder="YY"
                  className={`mt-[10px]  pl-[20px] form-control border-[0.5px] border-slate-500 w-[72px] h-[45px] rounded-lg
                  ${errors.expiryDate && " border-[#FF5050]"}`}
                  {...register("cardYear", {
                    required: "Can’t be blank",
                  })}
                  value={cardYear}
                  onInput={handleCardYear}
                />
              </div>
              {errors.expiryDate && (
                <p className="text-danger text-[#FF5050] ">
                  {errors.expiryDate.message}
                </p>
              )}
            </label>
            <label htmlFor="cvv" className="form-label flex flex-col">
              <span className=" pl-[15px]">CVV</span>
              <input
                id="cvv"
                type="text"
                placeholder="e.g. 123"
                className={`mt-[10px] pl-[50px] form-control w-[164px] h-[45px] rounded-lg border-[0.5px] border-zinc-400 ml-[10px]
                ${errors.cvv && " border-[#FF5050]"}`}
                {...register("cvv", { required: "Can’t be blank" })}
                value={cardCvv}
                onInput={handleCardCvv}
              />
              {errors.cvv && (
                <p className="text-danger  text-[#FF5050] pl-[10px]">
                  {errors.cvv.message}
                </p>
              )}
            </label>
          </div>
          <div className="mb-3"></div>
          <button
            onClick={cardNumbeHandling}
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
