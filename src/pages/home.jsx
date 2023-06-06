import React from 'react'
import '../styles/pages/home.scss';
import { useNavigate } from 'react-router-dom';

function Home() {

    const router = useNavigate();

    const next = () => {
        router('/registration#learn-more');
    };

    const background = {
        backgroundImage: 'url(./image/cup.svg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }
  return (
    <>
        <div className="contact-nav">
            <div className="contact-nav__container">
                <p className="contact-nav__container__phone"><i className="fa fa-phone icon"></i>+234 802 301 3910</p>
                <p className="contact-nav__container__email"><i className="fa fa-envelope icon"></i>hello@parchost.com</p>
            </div>
        </div> 
        <div className="joy">
            <div className="joy__other" style={background}>
                <h5 className='joy__other__name'><img src="./image/ph.svg" alt="" />PARCHOST</h5>
                <div className='joy__other__cap'>
                    <p className='joy__other__cap__one'>Automate pickup of documents, parcels and more to customers safely and securely.</p>
                    <div className='joy__other__cap__btn' onClick={next}>Learn more</div>
                </div>
            </div>
        </div>
        <div className="section4">
            <p className="section4__cap">Our Smart lockers create a seamless communication with customers and their packages through  the pickup journey</p>
            <div className="section4__content">
                <div className="section4__content__one">
                    <div className="section4__content__one__image"><img src="./image/build.svg" alt="" /></div>
                    <p>Size-based locker allocation</p>
                </div>
                <div className="section4__content__two">
                    <div className="section4__content__two__image"><img src="./image/tool.svg" alt="" /></div>
                    <p>Securely-built IOT-Enabled Hardware housing</p>
                </div>
                <div className="section4__content__three">
                    <div className="section4__content__three__image"><img src="./image/sheet.svg" alt="" /></div>
                    <p>Detailed transaction logs for all operations</p>
                </div>
            </div>
            <div className="section4__content1">
                <div className="section4__content1__four">
                    <div className="section4__content1__four__image"><img src="./image/bat.svg" alt="" /></div>
                    <p>4hrs power backup</p>
                </div>
                <div className="section4__content1__five">
                   <div className="section4__content1__five__image"><img src="./image/speak.svg" alt="" /></div>
                    <p>Notification Integration  for pickups</p>
                </div>
                <div className="section4__content1__six">
                    <div className="section4__content1__six__image"><img src="./image/desk.svg" alt="" /></div>
                    <p>Multiple customer service points</p>
                </div>
            </div>
        </div>
        <div className="section5">
            <div className="section5__content">
                <p className='section5__content__cap1'>Lets get you a smart locker</p>
                <div className="section5__content__box">
                    <div className="section5__content__box__one">
                        <img src="./image/box.svg" alt="" />
                        <p>Parchost for Business</p>
                    </div>
                    <div className="section5__content__box__two">
                        <img src="./image/cart.svg" alt="" />
                        <p>Parchost for Ecommerce</p>
                    </div>
                </div>
                <p className="section5__content__cap2">Lets keep you posted</p>
            </div>
            <div className="section5__input">
                <img src="./image/arrow.svg" alt="" />
            </div>
        </div>
        <div className="footer">
            <img src="./image/bluey.svg" alt="" />
            <p>PARCHOST</p>
        </div>
    </>
  )
}

export default Home
