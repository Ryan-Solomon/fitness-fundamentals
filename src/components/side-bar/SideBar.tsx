import React from 'react';
import './SideBar.styles.scss';

const SideBar = () => {
  return (
    <>
      <nav className='container'>
        <div className='link'>
          <div className='text'>Lessons</div>
        </div>
        <div className='link'>
          <div className='text'>1. Projects</div>
        </div>
        <div className='link'>
          <div className='text'>2. Art</div>
        </div>
        <div className='link'>
          <div className='text'>3. Social</div>
        </div>
        <div className='link'>
          <div className='text'>4. Setup</div>
        </div>
        <div className='link'>
          <div className='text'>5. Help</div>
        </div>
      </nav>
    </>
  );
};

export default SideBar;
