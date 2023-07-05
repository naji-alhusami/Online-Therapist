import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

function Card({
  image,
  title,
  content,
  price,
  ticket,
  buttonPreview,
  imagePreview,
  contentPreview,
  titlePreview,
}) {
  return (
    <div className="shadow-zinc-300 h-full w-full my-4 flex flex-col items-center justify-evenly shadow-lg  rounded-3xl md:m-12 p-4">
      {imagePreview && (
        <img className="pt-4  mb-4 w-20 h-20 " src={image} alt={title} />
      )}
      {titlePreview && (
        <h1 className="pt-4 text-center md:text-xl lg:text-3xl   ">{title}</h1>
      )}
      {contentPreview && (
        <p className="text-opacity-50 text-black text-center text-sm md:text-lg lg:text-lg py-4">
          {content}
        </p>
      )}
      {ticket && (
        <h2 className="text-2xl md:text-2xl lg:text-4xl">{ticket} TICKETS</h2>
      )}
      {price && (
        <h2 className="text-2xl flex justify-center p-6 md:text-lg lg:text-2xl">
          {price}$
        </h2>
      )}
      {buttonPreview && (
        <Link to="/purchaseTickets" state={{ price, ticket }}>
          <Button button="PURCHASE" disabled="false" />
        </Link>
      )}
    </div>
  );
}

export default Card;
