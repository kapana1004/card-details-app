import React from "react";

export default function Formcomponent({
  hideDetails,
  errors,
  cardHolder,
  handleCardHolder,
  cardNumber,
  handleCardNumberChange,
  cardMonth,
  handlCardMonth,
  cardYear,
  handleCardYear,
  cardCvv,
  handleCardCvv,
  onSubmit,
  cardNumbeHandling,
  handleSubmit,
  register,
}) {
  return (
    <div
      className={
        hideDetails
          ? " hidden"
          : ` bg-white w-[375px] h-[704px] pl-[20px] md:pt-[130px]`
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 flex flex-col">
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
  );
}
