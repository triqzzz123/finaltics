import React from 'react';
import analytics from './analytics.jpg'
import app from './account.jpg'




import './Top.css'



 const Top= ()=>{
 
     
    return( 
  
     
   <div className="boxmodel" style={{justifyContent:"flexStart",display:"flex"}} >
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
    <img alt="" className='pt3 ph2 ' src={app} style={{width:"400px" ,height:"225px",marginLeft:"200px"}}/> 
  <div style={{width:"170px",fontFamily:"raleway",justifyContent:"right"}} >
  <h3 className="dim white"><span>Revenue</span></h3>
   <h3 className="dim white "><span>operations</span></h3>
  <h3 className="dim white"><span>tax</span></h3>
  <h3 className="dim white"><span>costing</span></h3>
  <h3 className="dim white"><span>planning</span></h3>
  <h3 className="dim white"><span>payroll</span></h3> 
   </div>
   </div>
   <div style={{display:"flex",marginLeft:"300px"}} >
    <img alt=" " className='pa0 pt4 pr2  ' src={analytics} style ={{width:"600px",height:"230px"}}/>
   <div className="pt2" style={{display:"flex",flexDirection:"column"}}>
  <h3 className="dim white"><span>Analytics</span></h3>
   <h3 className="dim white "><span>Reporting</span></h3>
  <h3 className="dim white"><span>IT Consulting & Solutions</span></h3>
  </div>
  </div>



   </div>

 )
 }


 export default Top;