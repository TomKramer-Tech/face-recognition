import React from 'react';

const FaceRecognition = ({ imageURL }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
              <img alt='user defined.' width='500px' height='auto' src={imageURL} />
            </div>
        </div>
    );
}

export default FaceRecognition;