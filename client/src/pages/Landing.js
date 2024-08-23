//import main from '../assets/images/main.svg';
//import { Link } from 'react-router-dom';
//import { Navigate } from 'react-router-dom';
//import { useAppContext } from '../context/appContext';
import React from 'react';
import FaqsContainer from '../components/FAQ/FaqsContainer';
import TopQuotesContainer from '../components/TopQuotes/TopQuotesContainer';
import CardCarousel from '../components/CardSlider';
import { DisappearingFeatures } from '../components/DisappearingFeatures';
import { LandingHero } from '../components/Hero/LandingHero';

const Landing = () => {

  // const { user } = useAppContext();

  return (
    <React.Fragment>
      {/*
      {user && <Navigate to='/' />}
      */}
      <section>
        <LandingHero />
      </section>
      <section className='pt-10'>
        <DisappearingFeatures />
      </section>
      <section>
        <CardCarousel />
      </section>

      {/* TOP QUOTES SECTION STARTS */}
      <section className='text-dark py-10'>
        <div className='FAQ-komponent'>
          <div className='faq'>
            <React.Fragment>
              <h2 className='text-center text-dark' style={{fontFamily: 'Montserrat'}}>
                Top Quotes
              </h2>
              <hr></hr>
              {/* For frontend diplay */}
              <TopQuotesContainer isTopQuotesPage={true} />
            </React.Fragment>
          </div>
        </div>
      </section>
      {/* TOP QUOTES SECTION ENDS */}

      {/* FAQ SECTION STARTS */}
      <section className='text-dark py-10 mt-6 md:mt-10'>
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
      </section>
      {/* FAQ SECTION ENDS */}
    
    </React.Fragment>
  );
};

export default Landing;
