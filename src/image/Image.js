import React from "react";
import pen from "./pen.jpg"
import call from "./call.jpg"
import foot from './foot.jpg';
import insta from './ing.jpg';
import twit from './twit.jpg';
import mssg from './mssg.jpg';
import copy from './copyright.jpg'
import './Image.css'


const Image =()=>{

return(
   <div style={{marginTop:"20px"}}>
<img alt=" "  src={pen}/>
  <p className=" f4 white">Managing finance & Accounting was never so easy</p>
<div style={{display:"flex",marginLeft:"20px"}}>
<img  className="dot" alt="" src={call}/>
 <p className="f9">
 <span style={{color:"#F8CA90"}}>
<span style={{fontWeight:"bold"}}>call - </span>
 </span>
</p> 
<p className="f9" style={{}}>
<span style={{color:"#F8CA90"}}>9962287768</span>
</p> 
<div style={{marginLeft:"20px",marginTop:"5px",display:"flex"}}>
<img className="dot" alt=" " src={foot} stylr={{height:"5px"}}/> 
<p className="f9" style={{color:"#F8CA90",display:"flex"}} > follow us</p>  
<img src={insta} style={{marginLeft:"20px",width:"20px",height:"30px",marginTop:"15px"}}/>
<img src={twit} style={{marginLeft:"20px",height:"30px",marginTop:"10px"}}/>
</div>
<div style={{display:"flex",marginLeft:"40px"}}> 
<img  className="dot" src={mssg} style={{marginLeft:"40px",marginTop:"15px"}}/>

<p className="f9" style={{display:"flex",color:"#F8CA90",marginTop:"30px" }}> Contact--</p>
<p className="f9" style={{display:"flex",color:"#F8CA90",marginTop:"30px"}}>admin@finaltics.in</p>
</div>
<div style={{display:"flex",marginLeft:"40px"}}> 
<img  className="dot" src={copy} style={{marginLeft:"40px",marginTop:"15px"}}/>
<p className="f9" style={{display:"flex",color:"#F8CA90",marginTop:"30px",marginLeft:"10px"}}>2020 - finaltics</p>

</div>

   </div>
   </div>
)
}

export default Image;