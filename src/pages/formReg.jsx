import React from 'react'
import { useState } from 'react';
import '../styles/pages/form-reg.scss';
import Modal1 from '../modals/modal1';

function FormReg() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [openModal, setOpenModal] = useState(false);


    const handleEmailChange = (e) =>{
        setEmail(e.target.value)
    }

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }


    const validateEmail = (email) => {
        return email.includes('@');
      };
    
      const validateName = (name) => {
        return name.length >= 6;
      };

     const handleSubmit = (e) =>{
        e.preventDefault();

        const isEmailValid = validateEmail(email);
        const isNameValid = validateName(name);

        setIsEmailValid(isEmailValid);
        setIsNameValid(isNameValid);

        if (isEmailValid && isNameValid) {
            setOpenModal(true);
          }
     }

     const close = () => {
        setOpenModal(false)
     }
     const background = {
        backgroundImage: 'url(./image/chin.svg)'
    }

  return (
    <>
        <div className="contact-nav">
            <div className="contact-nav__container">
                <p className="contact-nav__container__phone"><i className="fa fa-phone icon"></i>+234 802 301 3910</p>
                <p className="contact-nav__container__email"><i className="fa fa-envelope icon"></i>hello@parchost.com</p>
            </div>
        </div> 
        <div className="section9">
            <div className="section9__nirvana" style={background}>
                <div className="section9__nirvana__items">
                    <div className='section9__nirvana__head'>
                        <img src="./image/white.svg" alt="" />      
                        <p>PARCHOST</p>
                    </div>
                    <div className="section9__nirvana__gap">
                        <div className="section9__nirvana__gap__content">
                            <h5>Allow your customers recieve  packages at secure hub locations</h5>
                            <h6>CHEAP FOR BUSINESSES | CONVENIENT FOR CUSTOMERS</h6>
                            <form onSubmit={handleSubmit}>
                                <div className="section9__nirvana__gap__content__inputs">
                                    <div className="section9__nirvana__gap__content__inputs__one">
                                        <input type="text" value={name} placeholder='Company Name' className="section9__nirvana__gap__content__inputs__one__rice"
                                        onChange={handleNameChange}
                                        />
                                        {!isNameValid && alert(`Name must be at least 6 characters long.`)}
                                        <input type="text" value={name} placeholder='Company Name' className="section9__nirvana__gap__content__inputs__one__beans" 
                                        onChange={handleNameChange}
                                        />
                                    </div>
                                    <div className="section9__nirvana__gap__content__inputs__two">
                                        <input type="text"  placeholder='Company Location' className="section9__nirvana__gap__content__inputs__two__rice" />
                                        <input type="text" value={email} placeholder='Company Email' className="section9__nirvana__gap__content__inputs__two__beans"
                                        onChange={handleEmailChange}
                                        />        
                                        {!isEmailValid && alert(`Please enter a valid email address.`)}
                                        <button
                                        type="submit" className="section9__nirvana__gap__content__inputs__two__btn">Sign me up!</button>
                                        {openModal && <Modal1 close={close} />}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FormReg
