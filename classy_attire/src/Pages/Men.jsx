import Menactivewear  from '../Components/Subpages/Menactivewear';
import  Menbottomwear  from '../Components/Subpages/Menbottomwear';
import  Mentopwear  from '../Components/Subpages/Mentopwear';
import CaroMen from "./CaroMen";
import { Heading } from '@chakra-ui/react';

export default function Men(){
  const dealCorner=[
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-3-Women-Desktop-13Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-1-Women-Desktop-13Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-2-Women-Desktop-13Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-4-Women-Desktop-13Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-5-Women-Desktop-13Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-6-Women-Desktop-13Dec2022.jpg"},
  ]
  const brandSpotlight=[
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner1-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner2-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner3-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner4-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner5-14Dec2022.jpg"},
    {image:"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC3-Men-banner6-14Dec2022.jpg"},
  ]
  return <div id="Container">
    <div id="Main">
      <CaroMen/>
    
        <Heading className="textc">Deal Corner</Heading>
      <div className='dealcorner'>
        {dealCorner.map((e)=>(     
            <div><img  src={e.image} alt="" /> </div>      
        ))}
        </div>
        <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-13modblock-oneBythree-A-menstripbanner-15Dec2022.jpg" alt="" />
     
        <Heading className="textc">Brand Spotlight</Heading>
      <div className='dealcorner'>
        {brandSpotlight.map((e)=>(     
            <div><img  src={e.image} alt="" /> </div>      
        ))}
        </div>

      <Mentopwear/>
      <Menbottomwear/>
      <Menactivewear/>
    </div>
</div>

}