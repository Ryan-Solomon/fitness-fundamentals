import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuizContext } from '../../context/quizContext';
import { BsQuestionSquareFill } from 'react-icons/bs';
import './QuizQuestions.scss';
import Answers from './Answers';

const QuizQuestions = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const { id } = useParams<{ id: string }>();
  const { data } = useQuizContext();
  const categoryData = data.filter((d) => d.category.toLowerCase() === id)[0];
  const currentQuestionData = categoryData.questions[questionIdx];
  const {
    question,
    answers,
    correctAnswer,
    answeredCorrectly,
  } = currentQuestionData;

  return (
    <div className='container'>
      <div className='card'>
        <div className='face face1'>
          <div className='content'>
            <BsQuestionSquareFill size={200} />
            <h3>Question {questionIdx + 1}</h3>
          </div>
        </div>
        <div className='face face2'>
          <div className='content'>
            <div className='question-and-answer'>
              <h2>Q: {question}</h2>
              <Answers answers={answers} />
              <button>Submit Answer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
