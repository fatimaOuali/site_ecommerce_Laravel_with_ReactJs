import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EcProducts from './components/EcProducts/EcProducts';
import Category from './components/Category/Category';
import Img1 from "./assets/hero/maroc.png";
import Img2 from "./assets/hero/salon.jpeg";
import EcCanapes from './components/EcProducts/EcCanapes';
import Footer from './components/Footer/Footer';

const slides = [
 {
  id: 1,
  img: Img1,
 },
 {
  id: 2,
  img: Img2,
 },

]

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar />
    
    <Hero handleOrderPopup={handleOrderPopup} >
    {
          slides.map((s)=>(
            <img src={s.img} />
          )
          )
        }
    </Hero>
    <EcProducts />
    <Category handleOrderPopup={handleOrderPopup} />
    <EcCanapes />
    <Footer />
    
  </div>
  )
}
export default App;

const container = document.getElementById('app');
const root =  ReactDOM.createRoot(container);
root.render(<App />);