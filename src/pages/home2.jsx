import React from 'react'
import '../styles/pages/home2.scss';
import Input from '../input/input';
import { useState } from 'react';
import Modal2 from '../modals/modal2';

function Home2() {


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
        backgroundImage: 'url(./image/mask.svg)'
    }

  return (
    <>
        <div className="contact-nav">
            <div className="contact-nav__container">
                <p className="contact-nav__container__phone"><i className="fa fa-phone icon"></i>+234 802 301 3910</p>
                <p className="contact-nav__container__email"><i className="fa fa-envelope icon"></i>hello@parchost.com</p>
            </div>
        </div> 
        <div className="content">
            <div className="content__other" style={background}>
                <h5 className='content__other__name'><img src="./image/ph.svg" alt="" />PARCHOST</h5>
                <div className='content__other__cap'>
                    <p className='content__other__cap__one'>Automate pickup of documents, parcels, Cheque books, ATM cards and more.</p>
                    <p className='content__other__cap__btn'>Get Started</p>
                </div>
            </div>
        </div>
        <div className="section1" id='learn-more'>
            <div className="section1__content">
                <h2>The ParcHost Case Study</h2>
                <h6>Banks and Visa collection services have a common challenge. Very long queues. Nobody likes queues. With COVID-19, avoiding crowded indoors has become more critical for both customers and service agents. </h6>
                <br />
                <br />
                <h5>Banks have made a lot of progress with reducing crowds in locations. Internet banking and Automated Teller Machines mean customers can perform transactions from outside the banking hall.</h5>
                <div className="section1__content__order">
                    <div className="section1__content__order__cap">
                        <p>Because of regulatory issues, some activities still need to be performed in person. There’s one that doesn’t have to though - the pickup of “personal banking tools” like ATM cards, cheque books, etc.</p>
                        <br />
                        <br />
                        <h4>Our team is attempting to use self-serve machines (combined with some human verification where required) to help customers access these banking tools with  ease and in a safe and convenient manner</h4>
                    </div>
                    <img src="./image/hr.svg" alt="" />
                    <h1>Our team is attempting to use self-serve machines (combined with some human verification where required) to help customers access these banking tools with  ease and in a safe and convenient manner</h1>
                </div>
            </div>
        </div>
        <div className="section6">
            <p>Let’s get started</p>
            <h6>We would send you a brochure.</h6>
            <form  onSubmit={handleSubmit}>
                <div className="section6__inputs">
                    <div className="section6__inputs__one">
                        <input type="text" placeholder='Company Name' onChange={handleNameChange} value={name} />
                        {!isNameValid && alert(`Name must be at least 6 characters long.`)}
                        <Input />
                    </div>
                    <div className="section6__inputs__two">
                        <input type="text" placeholder='Company Email'  onChange={handleEmailChange} value={email} />
                        {!isEmailValid && alert(`Please enter a valid email address.`)}
                        <Input />
                        <button type='submit' className="section6__inputs__two__btn">Sign me Up!</button>
                        {openModal && <Modal2 close={close} />}
                    </div>
                </div>
            </form>
        </div>
         <div className="footer">
            <img src="./image/bluey.svg" alt="" />
            <p>PARCHOST</p>
        </div>
    </>
  )
}

export default Home2
