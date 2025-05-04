import React from 'react';
import Header from './header'
import Services from './services'
import Cards from './cards';
import Cons from './cons';
import Button from './button';
import Meet from './Meet'
import Tests from './tests';
import Contact from './contact';
import Footer from './footer';
import Opener from './opener';

function App() {

  const handleButtonClick = () => {
    alert('Button clicked!');
  };
  
  
  return(
  
  <>
    <Header/>
    <div id='Opener'>
      <Opener/>
    </div>
    <div id='Services'>
      <Services/>
    </div>
    <div className='card-container'>
    <Cards
      img="chiro.png"
      title="Chriopractic Care"
      bio="Chiropractic is concerned with the 
      diagnosis and treatment of mechanical 
      disorders of the musculoskeletal system, 
      especially the spine.  Chiropractors know that 
      these disorders affect general health via the nervous system.  
      Common treatment includes an adjustment of the spine."
      button={<Button text="Setup Appointment" onClick={handleButtonClick} />}
    />
    <Cards
      img="pain.png"
      title="Pain Management"
      bio="Pain Management is the process of providing medical 
      care that reduces pain and improves quality of life.  Pain 
      can be managed using pharmacological or interventional services 
      including, epidural injections, facet joint injections or nerve blocks."
      button={<Button text="Setup Appointment" onClick={handleButtonClick} />}
    />
     <Cards
      img="massage.png"
      title="Massage Therapy"
      bio="Massage therapy is the scientific manipulation of the 
      soft tissues of the body for the purpose of normalizing tissue and 
      consists of techniques that include applying fixed or movable pressure, 
      holding, and/or causing movement of the body. Generally, massage is known to 
      affect the circulation of blood."
      button={<Button text="Setup Appointment" onClick={handleButtonClick} />}
    />
    </div>
    <Cons/>
    <div id="Meet">
      <Meet/>
    </div>
    <div id='Tests'>
      <Tests/>
    </div>
    <div id='Contact'>
      <Contact/>
    </div>
    <Footer/>
  </>

  );
};

export default App;
