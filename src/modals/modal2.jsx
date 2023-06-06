import React from 'react'
import '../styles/modals/modal2.scss';

function Modal2(props) {
  return (
    <>
        <div className="overlay">
            <div className="main">
                <img src="./image/check.svg" alt="" />
                <h5>Thanks for signing up. We would be in touch with you shortly.</h5>
                <button className='close-button' onClick={props.close}>&times;</button>
            </div>
        </div>
    </>
  )
}

export default Modal2
