import React from 'react';
import Popup from 'reactjs-popup';
const Netcard = (props) => (



  <div>
   <div class="netcard">
    <div class="net1"><img width='50px' src={props.image}></img></div>
    <div class="net2">   
     <div class="net3"> 
         
              <div>{ props.name}</div>
        </div>
     <div class="net4">
       <div style={{  fontSize: "10",
    fontWeight: 'normal'}}>connect to </div>
     <div>{props.connect}</div>
     </div>        
    </div>
   </div>
  </div>
);


export default Netcard