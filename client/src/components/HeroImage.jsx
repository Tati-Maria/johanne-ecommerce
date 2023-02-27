import swim1 from "../assets/images/pic.jpg";
import Hero from "./Hero";



const Navbar = () => {
  
  return (
    <>

    <div
    className="min-h-[80dvh] bg-cover bg-top flex items-center justify-center" 
    style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${swim1})`}}>
      <Hero />
    </div>

    </>
  )
}

export default Navbar;