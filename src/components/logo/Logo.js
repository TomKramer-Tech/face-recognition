import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'

const Logo = () => {
    return(
        <Tilt>
          <div className='Tilt w-30 pl3 pa3 br2 shadow-2'>
            <img style={{paddingTop: '5px'}} alt='logo' src={brain}/>
          </div>
        </Tilt>
    );
}

export default Logo;