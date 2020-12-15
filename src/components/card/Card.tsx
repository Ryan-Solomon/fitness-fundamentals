import React, { FC } from 'react';
import { TData } from '../../data/data';
import './Card.styles.scss';

type TProps = {
  data: TData;
};

const Card: FC<TProps> = ({ data }) => {
  const { category, questions } = data;

  return (
    <div className='l-container'>
      <div className='b-game-card'>
        <div className='b-game-card__cover'>
          <h1>{category}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
