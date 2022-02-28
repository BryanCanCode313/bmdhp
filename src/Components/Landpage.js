import React, {Component} from 'react';
import '../CSS/Landpg.css';
import bmdimg from "../img/bmd-word-2.png";
import bmdsymbol from "../img/BMD Logo.png";


class Landpage extends Component { 



          render() {
            return ( 
                     <div className="titlebox" id="tbox">
                        
                            <img className="bmdlogo" id="bmdl" src={bmdimg} alt="true" />    
                            <img className="bmdsymbol" src={bmdsymbol} alt="true"/> 
                             
                    </div>         
                   );
        } 
        
    }

export default Landpage;

 //   componentDidMount() {

    //     const script = document.createElement("script");
    //     script.src = "../JS/main.js";
    //     script.async = true;
    //     script.onload = () => this.scriptLoaded();
      
    //     document.body.appendChild(script);

    //   }


  // scriptLoaded(){
        //     window.onload = "../JS/main.js";
        //     console.log("its loaded");
        // }