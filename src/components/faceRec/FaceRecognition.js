import React from 'react';
import './FaceRecognition.css'
const FaceRecognition = ({ imageURL, box }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
              <img id='inputimage' alt='user defined.' width='500px' height='auto' src={imageURL} />
              <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;