import React from 'react';
import './facerecognition.css'

const FaceRecognition = ({ imageURL, box }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
            {/* we can set height to auto to make sure our pics don't have weird sizing */}
              <img src={imageURL} id='inputimage' alt="" width='500px' height='auto' />  
              <div className='boundingBox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
            
        </div>
    )
}

export default FaceRecognition;