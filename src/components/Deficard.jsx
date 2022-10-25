import React from 'react';
import Popup from 'reactjs-popup';
const Deficard = (props) => (



  <div>
   <div class="deficard">
    <div class="app1"><img width='30%' src={props.image}></img></div>
    <div class="app2">            
              <div>{ props.name}</div>
     </div>        
    </div>
   </div>
);


export default Deficard