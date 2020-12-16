import React, { FC } from 'react';
import './Answers.styles.scss';

type TProps = {
  answers: { answer: string }[];
};

const Answers: FC<TProps> = ({ answers }) => {
  return (
    <>
      <input type='radio' name='field' id='Uno' />
      <label htmlFor='Uno'>
        <svg className='check' viewBox='0 0 40 40'>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='100%'>
              <stop offset='0%' stop-color='#ff8a00'></stop>
              <stop offset='100%' stop-color='#da1b60'></stop>
            </linearGradient>
          </defs>
          <circle id='border' r='18px' cx='20px' cy='20px'></circle>
          <circle id='dot' r='8px' cx='20px' cy='20px'></circle>
        </svg>
        {answers[0].answer}
      </label>
      <input type='radio' name='field' id='Dos' />
      <label htmlFor='Dos'>
        <svg className='check' viewBox='0 0 40 40'>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='100%'>
              <stop offset='0%' stop-color='#ff8a00'></stop>
              <stop offset='100%' stop-color='#da1b60'></stop>
            </linearGradient>
          </defs>
          <circle id='border' r='18px' cx='20px' cy='20px'></circle>
          <circle id='dot' r='8px' cx='20px' cy='20px'></circle>
        </svg>
        {answers[1].answer}
      </label>
      <input type='radio' name='field' id='Tres' />
      <label htmlFor='Tres'>
        <svg className='check' viewBox='0 0 40 40'>
          <defs>
            <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='100%'>
              <stop offset='0%' stop-color='#ff8a00'></stop>
              <stop offset='100%' stop-color='#da1b60'></stop>
            </linearGradient>
          </defs>
          <circle id='border' r='18px' cx='20px' cy='20px'></circle>
          <circle id='dot' r='8px' cx='20px' cy='20px'></circle>
        </svg>
        {answers[2].answer}
      </label>
    </>
  );
};

export default Answers;
