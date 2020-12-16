import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuizContext } from '../../context/quizContext';
import { BsQuestionSquareFill } from 'react-icons/bs';
import './QuizQuestions.scss';

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

  return (
    <div className='container'>
      <div className='card'>
        <div className='face face1'>
          <div className='content'>
            <BsQuestionSquareFill size={100} />
            <h3>Question {questionIdx + 1}</h3>
          </div>
        </div>
        <div className='face face2'>
          <div className='content'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <a href='#'>Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
