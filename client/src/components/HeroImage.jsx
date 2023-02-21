import hero from "../assets/images/happy-girl.jpg"
import Hero from './Hero';
import Layout from "../layout/Layout";


const Navbar = () => {
  return (
    <>
    
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${hero})`}} className="min-h-[80vh] bg-cover bg-top flex justify-center">
        <Hero />
    </div>

    </>
  )
}

export default Navbar;