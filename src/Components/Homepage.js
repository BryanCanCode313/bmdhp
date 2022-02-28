import React from 'react';
import aahead from '../img/header_aasb_bmd.jpg';
import sbfoot from '../img/footer_bmd_aasb.jpg';
import YoutubeEmbed from './YoutubeEmbed.js';
import Merch from './Merchandise.js';
import Section from '../Components/Section.js';
import Navbar from '../Components/Navbar.js';
// import WorldGold from '../Components/WorldGold.js';
import '../CSS/Homepage.scss';




function Homepage () 
  {
   
    const Header = () => <header><img className="aahead" src={aahead} alt=""/><Navbar /></header>
    const Footer = () => <footer><img className="sbfoot" src={sbfoot} alt=""/></footer>

        return (
                    <div className="bod"> 
                        <Header />
                            <Section />      
                            <Merch />  
                            <YoutubeEmbed embedId="3sFDN0eEnW4" />
                            
                        <Footer />
                    </div>
               ); 
   }
 
export default Homepage;


