import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Women.css"


export default function Carousel2()  {
  return (
    <div id="womenBanner">
      <Carousel>
        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-3-14Dec2022.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner5-desktop-Women-14Dec2022.jpg"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-modularblock-oneBytwo1A-Women-29Nov2022.gif"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-Banner6-desktop-Women-14Dec2022.jpg"
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="caro-block"
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/HP_LS_Women_Desktop-1-15Dec2022.gif"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
