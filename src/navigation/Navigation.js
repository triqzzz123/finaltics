import React from 'react';
import  './Navigation.css'
import { findByLabelText } from '@testing-library/react';

 const Navigation= ()=>{
     
    return(   
   <div width="100px" className="color">
   <h1 className="f1 ma0 dim" >F I N A  L T I C S</h1>
   <nav className=" pa0 pv0" width="100px" style={{display:"flex", justifyContent:'center'}}>
   <h2  className="fw6 ph0 mh0  pa0  mv2 " style={{fontSize:"2spx",fontWeight:"bold",color:"#00fcf0 ",justifyContent:"center",display:"inline-block",margin:0,position:"absolute"}}>
   Accounting and finance simplified
   </h2>
   <div display="flex" style={{marginLeft:"1000px"}} >
    <p className="pt0 mt0 f3 link dim white underline pointer ma0  pa0"  >HOME</p>
    <p className="pt0 mt0 f3 link dim white underline  pointer  ma0 pa0" >SERVICES</p>
    </div>
    <div style={{display:"flex",flexDirection:"column-reverse"}}>
    <p className="pt0 mt0 f3 link dim white underline  pointer  ma0 pa0" >About</p>
    <p className="pt0 mt0 f3 link dim white underline  pointer  ma0 pa0" >CONTACT</p>
    </div>
    </nav>
<div>
<span className="dim" style={{color:"#00fcf0"}} >Virtual | pay as you go |Shared service | collective expertise | digital</span>
</div>

   </div>
   
      
    )

 }


 export default Navigation;