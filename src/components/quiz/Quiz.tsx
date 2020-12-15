import React from 'react';
import Card from '../card/Card';
import { data } from '../../data/data';
import './Quiz.styles.scss';

const Quiz = () => {
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
