import React from 'react';
import './SideBar.styles.scss';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';

const SideBar = () => {
  const [show, setShow] = React.useState(false);

  //   if (!show)
  //     return (
  //       <div className='sidebar-open' onClick={() => setShow(true)}>
  //         <RiMenuUnfoldFill size={100} />
  //       </div>
  //     );

  return (
    <>
      {' '}
      {show ? (
        <nav className='container'>
          <button onClick={() => setShow(false)} className='close-sidebar'>
            <RiMenuFoldFill size={30} />
          </button>
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
      ) : (
        <nav className='container'>
          <button className='open-sidebar' onClick={() => setShow(true)}>
            <RiMenuUnfoldFill size={30} />
          </button>
        </nav>
      )}
    </>
  );
};

export default SideBar;
