import React from 'react';
import Card from '../card/Card';
import './Quiz.styles.scss';
import { useQuizContext } from '../../context/quizContext';

const Quiz = () => {
  const { data } = useQuizContext();
  return (
    <main className='quiz-container'>
      <header>
        <h1>Select A Difficulty Level</h1>
      </header>
      <section className='difficulty-cards'>
        {data.map((obj) => {
          return <Card data={obj} key={obj.category} />;
        })}
      </section>
    </main>
  );
};

export default Quiz;
