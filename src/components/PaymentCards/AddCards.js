// import React, { useState } from 'react';
// import Cards from 'react-credit-cards';

// // import styled from 'styled-components';
// import AddCardForm from './AddCardForm';

// import visaCard from '../Images/visaCard.svg';
// // import masterCard from '../Images/masterCard.svg';

// const AddCards = () => {
//   const [cardValues, setCardValues] = useState({
//     cardName: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvc: '',
//   });

//   // const StyledCardContainer = styled.div`
//   //   width: 400px;
//   //   height: 175px;
//   //   background-color: gray;
//   //   border-radius: 10px;
//   // `;

//   return (
//     <div className=" m-16">
//       <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
//         ADD CARD DETAILS
//       </h1>
//       <p className=" w-auto">
//         Please make sure all of the info you enter are the same as your card
//         registration info.
//       </p>
//       <div className="flex flex-col lg:flex lg:flex-row">
//         <AddCardForm cardValues={cardValues} setCardValues={setCardValues} />
//         <div className="flex flex-col mt-16">
//           {/* <img className="absolute" src={masterCard} alt="Master Card" />
//            */}
//             <img className="absolute z-20" src={visaCard} alt="Visa Card" />
//           <Cards
//             className="relative z-10"
//             name={cardValues.cardName}
//             number={cardValues.cardNumber}
//             expiry={cardValues.expiryDate}
//             cvc={cardValues.cvc}
//           />

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCards;

import React, { useState } from 'react';
import Cards from 'react-credit-cards';

import AddCardForm from './AddCardForm';
// import visaCard from '../Images/visaCard.svg';
import masterCard from '../Images/masterCard.svg';

const AddCards = () => {
  const [cardValues, setCardValues] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  return (
    <div className=" m-16">
      <h1 className="font-semibold text-3xl md:text-4xl md:mb-5 lg:text-5xl uppercase">
        ADD CARD DETAILS
      </h1>
      <p className=" w-auto">
        Please make sure all of the info you enter are the same as your card
        registration info.
      </p>
      <div className="flex flex-col lg:flex lg:flex-row">
        <AddCardForm cardValues={cardValues} setCardValues={setCardValues} />
        <div className="flex flex-col mt-16">
          <img src={masterCard} alt="Master Card" />
          <Cards
            className="relative z-10"
            name={cardValues.cardName}
            number={cardValues.cardNumber}
            expiry={cardValues.expiryDate}
            cvc={cardValues.cvc}
          />
          {/* <img src={visaCard} alt="Visa Card" /> */}
        </div>
      </div>
    </div>
  );
};

export default AddCards;
