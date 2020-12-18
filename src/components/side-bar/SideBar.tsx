import React from 'react';
import './SideBar.styles.scss';

const SideBar = () => {
  const [show, setShow] = React.useState(true);

  if (!show) return null;

  return (
    <>
      <nav className='container'>
        <button onClick={() => setShow(false)}>X</button>
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
