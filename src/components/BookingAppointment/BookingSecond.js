import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingHeader from './BookingHeader';
import { RadioQuestions } from './BookingQuestionsData';
import Booking from './Booking';

const BookingSecond = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentQuestion = RadioQuestions.find(
    (question) => question.id === id
  );
  
  const currentAnswers = currentQuestion.answer;

  const handleNextQuestion = () => {
    const nextQuestionId = parseInt(id, 10) + 1;
    const totalQuestions = RadioQuestions.length;
    if (nextQuestionId <= totalQuestions) {
      navigate(`/bookingSecond/${nextQuestionId}`);
    } else {
      navigate('/bookingNote');
    }
  };

  return (
    <div>
      <BookingHeader />
      <Booking
        questionsRadio={currentQuestion.question}
        answersRadio={currentAnswers}
        handleNextQuestion={handleNextQuestion}
      />
    </div>
  );
};

export default BookingSecond;
