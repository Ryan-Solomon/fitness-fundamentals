import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuizContext } from '../../context/quizContext';

const QuizQuestions = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const { id } = useParams<{ id: string }>();
  const { data } = useQuizContext();
  const categoryData = data.filter((d) => d.category.toLowerCase() === id)[0];
  const currentQuestionData = categoryData.questions[questionIdx];
  const {
    question,
    incorrectAnswers,
    correctAnswer,
    answeredCorrectly,
  } = currentQuestionData;

  return <div>{question}</div>;
};

export default QuizQuestions;
