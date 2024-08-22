//import main from '../assets/images/main.svg';
//import { Link } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
//import { useAppContext } from '../context/appContext';
import React from 'react';
import FaqsContainer from '../components/FaqsContainer';
import { NewHero } from '../components/NewHero';
import CardCarousel from '../components/CardSlider';
import { SwapLogos } from '../components/SwapLogos';
import { DisappearingFeatures } from '../components/DisappearingFeatures';

const Landing = () => {

  // const { user } = useAppContext();

  return (
    <React.Fragment>
      {/*
      {user && <Navigate to='/' />}
      */}
      
      <NewHero />
      <SwapLogos />
      <DisappearingFeatures />
      <CardCarousel />
        
      {/* FAQ SECTION STARTS */}
      <div className='text-dark py-10'>
        <div className='FAQ-komponent'>
          <div className='faq'>
            <React.Fragment>
              <h2 className='text-center text-dark' style={{fontFamily: 'Montserrat'}}>
                FAQ's
              </h2>
              <hr></hr>
              {/* For frontend diplay */}
              <FaqsContainer isFaqPage={true} />
            </React.Fragment>
          </div>
        </div>
      </div>
      {/* FAQ SECTION ENDS */}
    
    </React.Fragment>
  );
};

export default Landing;
