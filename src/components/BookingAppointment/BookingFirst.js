import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingHeader from './BookingHeader';
import { MultipleChoices } from './BookingQuestionsData';
import Booking from './Booking';

const BookingFirst = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentQuestion = MultipleChoices.find(
    (question) => question.id === id
  );
  console.log(currentQuestion);

  const currentAnswers = currentQuestion.answer;

  const handleNextQuestion = () => {
    const nextQuestionId = parseInt(id, 10) + 1;
    const totalQuestions = MultipleChoices.length;
    if (nextQuestionId <= totalQuestions) {
      navigate(`/bookingFirst/${nextQuestionId}`);
    } else {
      navigate('/bookingSecond/1');
    }
  };

  return (
    <div>
      <BookingHeader />
      <Booking
        questionsButton={currentQuestion.question}
        answersButton={currentAnswers}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default BookingFirst;