import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.styles.scss';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-items'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/training'>
          <li>Training Fundamentals</li>
        </Link>
        <Link to='/nutrition'>
          <li>Nutrition Fundamentals</li>
        </Link>
        <Link to='/quiz'>
          <li>Quiz</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
