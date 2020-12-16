import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { TData } from '../../data/data';
import './Card.styles.scss';

type TProps = {
  data: TData;
};

const Card: FC<TProps> = ({ data }) => {
  const { category } = data;
  const history = useHistory();

  const handleCategorySelection = () => {
    history.push(`/quiz/${category.toLowerCase()}`);
  };

  return (
    <div onClick={handleCategorySelection} className='l-container'>
      <div className='b-game-card'>
        <div className='b-game-card__cover'>
          <h1>{category}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
