import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useQuizContext } from '../../context/quizContext';

const QuizQuestions = () => {
  const { id } = useParams<{ id: string }>();

  const { data } = useQuizContext();
  const categoryData = data.filter((d) => d.category.toLowerCase() === id);
  console.log(categoryData);

  return <div>Quiz Questions</div>;
};

export default QuizQuestions;
