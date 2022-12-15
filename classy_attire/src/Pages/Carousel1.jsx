import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Carousel1()  {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner2-14Dec2022.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner6-14Dec2022.gif"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner3-14Dec2022.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner5-14Dec2022.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Uber-HP-Desktop-HeroBanner4-14Dec2022.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
