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
            <h2>Q: {question}</h2>
            {/* <ol className='ordered-questions'> */}
            <Answers />
            {/* {answers.map((a, idx) => {
                return (
                  <div className='option' key={a.answer + idx}>
                    <li>{a.answer}</li>
                    <input id='answer' name='answer' type='radio' />
                  </div>
                );
              })} */}
            {/* </ol> */}
            <button>Submit Answer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
