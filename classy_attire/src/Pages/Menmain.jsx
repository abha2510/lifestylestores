import Menactivewear  from '../Components/Subpages/Menactivewear';
import  Menbottomwear  from '../Components/Subpages/Menbottomwear';
import  Mentopwear  from '../Components/Subpages/Mentopwear';
import React from 'react';

export default function Men(){
  return <div id="Container">
    <div id="Main">
      <Mentopwear/>
      <Menbottomwear/>
      <Menactivewear/>
    </div>
</div>

}