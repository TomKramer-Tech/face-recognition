import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn }) => {
    
    if (isSignedIn) {
        return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa pointer'>Sign Out</p>
          </nav>
        );
    }   else {
        return (
          <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signIn')} className='f3 pa3 link dim black underline pa pointer'>Sign In</p>
            <p onClick={() => onRouteChange('register')} className='f3 pa3 link dim black underline pa pointer'>Register</p>
          </nav>
        );
    }
}
export default Navigation;