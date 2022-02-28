import React, { useRef } from 'react';
import "../CSS/Merch.scss";
import merchdata from "../Data/merchdata.js";


function Merch() {

    const divRight = useRef();
    const divLeft = useRef();
    

    const right = divRight.current;
    const left = divLeft.current;
    
    console.log("This is a Right div", right);
    console.log("This is a Left div", left);
    

    return (
      <div className="bigsectbox">    
            <h3>MERCH</h3>
                <div className="bigsect2">
                    <div className="sect2">
                        <div className="arrowleft" onMouseEnter={()=> console.log("hovering over the left")} ref={divLeft}/>
                                <div className="merchbox">   
                                        {
                                         merchdata.map((merch) => <img className="photospot" key={merch.id} src={merch.merchpic} alt=""/>)       
                                        } 
                                </div>  
                        <div className="arrowright" onMouseEnter={()=> console.log("hovering over the right")} ref={divRight}/>  
                    </div>
                 <div className="btndiv"><button className="button-49" role="button">BUY</button></div> 
                </div>             
      </div>     
    )
}

export default Merch;
