import { useState } from "react";
import { useForm } from "react-hook-form";
import Cardcomponent from "./components/Cardcomponent";
import Complete from "./components/Complete";
import Formcomponent from "./components/Formcomponent";

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
  };

  return (
    <div className=" flex justify-center items-center flex-col gap-[91px] min-h-[100vh] min-w-[100vw] md:flex-row md:gap-[349px]">
      <Cardcomponent
        cardFrontNum={cardFrontNum}
        holderName={holderName}
        month={month}
        year={year}
        cvv={cvv}
      />
      {complete ? <Complete complete={complete} errors={errors} /> : null}

      <Formcomponent
        hideDetails={hideDetails}
        errors={errors}
        cardHolder={cardHolder}
        handleCardHolder={handleCardHolder}
        cardNumber={cardNumber}
        handleCardNumberChange={handleCardNumberChange}
        cardMonth={cardMonth}
        handlCardMonth={handlCardMonth}
        cardYear={cardYear}
        handleCardYear={handleCardYear}
        cardCvv={cardCvv}
        handleCardCvv={handleCardCvv}
        onSubmit={handleSubmit(onSubmit)}
        cardNumbeHandling={cardNumbeHandling}
        handleSubmit={handleSubmit}
        register={register}
      />
    </div>
  );
}

export default App;
