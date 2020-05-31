import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './navigation/Navigation';
import Top from './top/Top';
import Image from './image/Image'

import 'tachyons';

const particlesoptions={
  particles: {
    number:{
      value:3000,
    density:{
      enable:true,
      value_area:900
    }       
}
}
}

function App() {
  return (
    <div className="App">
     <Particles className="particles" part={particlesoptions}/>
      <Navigation/> 
      <Top />  
      <Image/>
    </div>
  );
}

export default App;
