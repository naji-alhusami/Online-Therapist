import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingHeader from './BookingHeader';
import { MultipleChoices } from './BookingQuestionsData';
import Booking from './Booking';

const BookingFirst = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  //   const answers = MultipleChoices.filter((choice) => choice.id === '1')
  //     .map((choice) => choice.answer)
  //     .flat();

  //   console.log(answers);
  //   answers.forEach((value) => {
  //     console.log(value);
  //   });
  //   console.log(naji);

  //   const answers = MultipleChoices[0].answer;

  //   console.log(answers);
  const currentQuestion = MultipleChoices.find(
    (question) => question.id === id
  );
  console.log(currentQuestion);

  const currentAnswers = currentQuestion.answer;

  const handleNextQuestion = () => {
    const nextQuestionId = parseInt(id, 10) + 1;
    navigate(`/bookingFirst/${nextQuestionId}`);
  };

  return (
    <div>
      <BookingHeader />
      <Booking
        questions={currentQuestion.question}
        answers={currentAnswers}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default BookingFirst;
