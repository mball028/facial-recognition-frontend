import React from 'react';
import './imagelinkform.css';


//we can destructure our onInputChange from the props
const ImageLinkForm = ({ onInputChange, onDetectClick }) => {
    return(
        <div>
            <p className="f3">
                {'This web app will detect faces in your pictures. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type="text" className='f4 pa2 w-70' onChange={onInputChange} placeholder="enter image url ... "/>
                    <button className='w-30 grow f4 ph3 pv2 dib white bg-dark-green' onClick={onDetectClick}>
                        Detect
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;