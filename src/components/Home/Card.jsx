import React from 'react';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

function Card({
  image,
  title,
  content,
  price,
  ticket,
  button,
  buttonPreview,
  imagePreview,
  contentPreview,
  titlePreview,
}) {
  // const loginState = useSelector((state) => state.loginStateHolderSlice);
  // const navigate = useNavigate();

  // function clickHolder(state, passedPrice) {
  //   if (state) {
  //     navigate('ticketpurchase', { state: passedPrice });
  //   } else {
  //     // eslint-disable-next-line no-alert
  //     alert('We need you to login to continue.');
  //   }
  // }

  return (
    <div className="shadow-zinc-300 h-full w-full my-4 flex flex-col items-center justify-evenly shadow-lg  rounded-3xl md:m-12 p-4">
      {imagePreview && <img className="pt-4  mb-4 w-20 h-20 " src={image} alt={title} />}
      {titlePreview && (
        <h1 className="pt-4 text-center md:text-xl lg:text-3xl   ">{title}</h1>
      )}
      {contentPreview && (
        <p className="text-opacity-50 text-black text-center text-sm md:text-lg lg:text-lg py-4">
          {content}
        </p>
      )}
      <h2 className="text-2xl md:text-2xl lg:text-4xl">{ticket}</h2>
      <h2 className="text-2xl flex justify-center p-6 md:text-lg lg:text-2xl">
        {price}
      </h2>
      {buttonPreview && (
        <button
          // onClick={() => clickHolder(loginState, price)}
          type="button"
          className="font-poppins rounded-md box-border p-2 mb-4 transition-all duration-250 bg-cyan-400 hover:bg-cyan-500"
        >
          {button}
        </button>
      )}
    </div>
  );
}

export default Card;