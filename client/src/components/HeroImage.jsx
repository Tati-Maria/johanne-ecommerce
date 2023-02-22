import hero from "../assets/images/happy-girl.jpg"
import Hero from './Hero';
import { useState, useEffect } from "react";
import Box from "./Box";

const Navbar = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFading, setIsFading] = useState(false);


  const backgroundImages = [
    {
      image: 'https://img.freepik.com/free-photo/top-view-swimsuit-starfish-arrangement_23-2148922371.jpg?w=996&t=st=1677067684~exp=1677068284~hmac=f3521e557d6a58ddb09d5469f7aff50d5c11f49af13781d41a6639e655adc3d9',
      name: 'Top Verano',
      price: 9.99
    },
    {
      image: 'https://img.freepik.com/free-photo/swimsuit-yellow-background-isolated_1303-13542.jpg?w=996&t=st=1677066962~exp=1677067562~hmac=621ec903691874e3d2f82379982289678e73616cc1421e5fa37dcf3ed68f407d',
      name: 'Princess Swimsuit',
      price: 35.99
    },
    {
      image: 'https://img.freepik.com/free-photo/swimsuit-yellow-background-isolated_1303-13544.jpg?w=996&t=st=1677067008~exp=1677067608~hmac=97cdc14a88f500d4827be6f5f5daab0c2c84848909d2ec442473de36634d443f',
      name: 'Luma Swimsuit',
      price: 49.99
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFading(true);
      setCurrentImage(currentImage => (currentImage + 1) % backgroundImages.length)
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

    <div 
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${backgroundImages[currentImage].image})`}} 
    className={`min-h-[80vh] bg-center bg-cover bg-no-repeat flex justify-center relative duration-300`}>
        <Hero />
        <Box price={backgroundImages[currentImage].price} name={backgroundImages[currentImage].name} />
    </div>

    </>
  )
}

export default Navbar;