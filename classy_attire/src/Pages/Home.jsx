import { CardBody,Card,Image,Stack,Heading,Flex ,Text,Box} from "@chakra-ui/react";
import React from "react";
import Carousel1  from "./Carousel1"
import "./Home.css";
import{ ChevronRightIcon }from "@chakra-ui/icons"


export default function Home(){

    const UnMissableOffers=[
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner1-13Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner2-13Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner3-15Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-LimitedSale-Desk-Banner4-13Dec22.jpg"}
    ]
    const Winterwear=[
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner1-29Nov22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner2-29Nov22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner3-29Nov22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget20-Desk-Banner4-29Nov22.jpg"},
    ]
    const PremiumEdit=[
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner1-14Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner2-14Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner3-14Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget22-Desk-Banner4-14Dec22.jpg"},
    ]
    const Circledata = [
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-29Nov22.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg"  },
        ]
    const TopDeals=[
        {image:"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-14Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-14Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-14Dec22.jpg"},
        {image:"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Beauty-Banner1-14Dec22.jpg"},
    ]

    const Squaredata = [
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-08June2022.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-08June2022.jpg"  },    
    ]
       
    const Squaredata2 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-04March2022.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-29April2022A.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-04March2022.jpg"  },
     ]

     const Squaredata3 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-27April2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-04March2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-11March2022.jpg"  },
     ]


     const Squaredata4 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-06Mar2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-10May2022.gif"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-30Mar2022.jpg"  },
     ]

     
     const Squaredata5 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-20May2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-06Mar2022.jpg"  },
    ]


     
     const Squaredata6 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-06Mar2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg"  },
     ]


     const Squaredata7 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-A-Men-04March2022A.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-B-Men-04March2022A.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-C-Men-04March2022A.jpg"  },
     ]

    return <div id="Container">
         <Box h={50} w={"100%"} bgColor={"#faa619"} >
            <Text paddingTop={3} color={"white"} fontWeight={"bold"}>
            Classy Attire Sale is Live <ChevronRightIcon/>
            </Text>
            </Box>
       <div id="Main">
     
       <Carousel1></Carousel1>

       <Heading className="textc">Our Benefits</Heading>
       <Flex>
       <Card  
       spacing={20}
       direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
       variant='outline'>
        <Image 
         height="90px"
         objectFit='cover'
         maxW={{ base: '100%', sm: '200px' }}
         src='https://tse4.mm.bing.net/th?id=OIP.JqSDHQhJ2q2IBlz8CDzT7wHaFP&pid=Api&P=0'
         alt='Caffe Latte'
        />
        <Stack  bgColor={"gray.300"}>
        <CardBody >
      <Heading size='md'>Free Shipping</Heading>
      <Text py='2'>
       On all orders
      </Text>
      </CardBody>
      </Stack>
      </Card>

      <Card  
       direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
       ml={10}
      
       variant='outline'>
        <Image  
        height="60px"
        margin="5"
        objectFit='cover'
         maxW={{ base: '100%', sm: '200px' }}
         src='https://tse2.mm.bing.net/th?id=OIP.WJXjE5x7hp7NRzfYosOifwAAAA&pid=Api&P=0'
         alt='Caffe Latte'
        />
        <Stack bgColor={"gray.300"}>
        <CardBody>
      <Heading size='md'>Click & collect</Heading>
      <Text py='2'>
       Order online & collect in store
      </Text>
      </CardBody>
      </Stack>
      </Card>

      <Card  
       direction={{ base: 'column', sm: 'row' }}
       overflow='hidden'
       ml={10}
       
       variant='outline'>
        <Image  
         objectFit='cover'
         maxW={{ base: '100%', sm: '200px' }}
         height="60px"
         margin="5"
         src='https://tse4.mm.bing.net/th?id=OIP._QR4b2kgG1dyWnf33A6_XgHaHa&pid=Api&P=0'
         alt='Caffe Latte'
        />
        <Stack bgColor={"gray.300"}>
        <CardBody>
      <Heading size='md' >Return to store</Heading>
      <Text py='2'>
       Return to your nearest store
      </Text>
      </CardBody>
      </Stack>
      </Card>
      </Flex>
      <Heading className="textc">UnMissable Offers</Heading>
      <div className="unmiss">
        {UnMissableOffers.map((e)=>(
            <>
            <img  src={e.image} alt="" />
            </>           
        ))}
        </div>
        <img 
        className="ban"
        src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-06Dec2022.gif" alt="" />
       
        <Heading className="textc">Winterwear</Heading>
        <div className="winter">
            {Winterwear.map((e)=>(
                <>
                  <img  src={e.image} alt="" />
                </>
            ))}
        </div>
        <Heading className="textc">The Premium Edit</Heading>
        <div className="trending">
            {PremiumEdit.map((e)=>(
                <>
                  <img  src={e.image} alt="" />
                </>
            ))}
        </div>
        <Heading className="textc">Trending Offers</Heading>
        <div className='homecircle'>
        {Circledata.map((e) => (
            <div >    
            <>
                <img className="trending" src={e.image} alt=""></img>
                <h5>{e.title}</h5>
            </>
            </div>
        ))}
        </div>
        <Heading className="textc">Top Deals In</Heading>
        <div className="topdeal">
            {TopDeals.map((e)=>(
                <div>
                    <>
                    <img className="topimg" src={e.image} alt=""></img>
                    <h5>{e.title}</h5>
                    </>
                </div>
            ))}
        </div>

        <hr  className="imgC"></hr>
        <Heading className="textc">Top Trending Brands</Heading>

        <div className='homeSquare'>
        {Squaredata.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimg' src={e.image} alt=""></img>   
            
            </div>
        ))}
        </div>

        <hr  className="imgC"></hr>
        <img className="wid" src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-10June2022.jpg"></img>
        <hr  className="imgC"></hr>

        <Heading className="textc">Top Picks </Heading>


        
        <div className='homeSquare'>
        {Squaredata2.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimg2' src={e.image} alt=""></img>   
            
            </div>
        ))}
        </div>

        <hr  className="imgC"></hr>
        <Heading className="textc">New, Cool & Trendy </Heading>

        
        <div className='homeSquare'>
        {Squaredata3.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimg2' src={e.image} alt=""></img>   
            
            </div>
        ))}
        </div>
  
        <hr  className="imgC"></hr>
        <Heading className="textc">Highlights of the Day</Heading>

        <div className='homeSquare'>
        {Squaredata4.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimg2' src={e.image} alt=""></img>   
            
            </div>
        ))}
        </div>
  
        <hr  className="imgC"></hr>
        <Heading className="textc">Flash Sale for Today</Heading>
        <img className="wid" src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-10June2022.jpg"></img>
        <hr  className="imgC"></hr>
        
        <Heading className="textc">Fashion Favourites</Heading>
        <div className='homeSquare'>
        {Squaredata5.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimgX' src={e.image} alt=""></img>   
            
            </div>
        ))}
        </div>
        <hr  className="imgC"></hr>

        <Heading className="textc">Essentials For You</Heading>
        <div className='homeSquare'>
    
        {Squaredata6.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimgX' src={e.image} alt=""></img>   
            
            </div>
        ))};
        </div>

       
        <hr  className="imgC"></hr>
        <Heading className="textc"> Shop By Department</Heading>
       
        <div className='homeSquare'>
        {Squaredata7.map((e) => (
            <div className='homeSquareinner'>
            
                <img className='homeSquareimg2' src={e.image} alt=""></img>   
            
            </div>
        ))}
        </div>



       </div>  
    </div>
}

