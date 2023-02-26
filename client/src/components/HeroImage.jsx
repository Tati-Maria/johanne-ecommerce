import hero from "../assets/images/bakcj.jpg"
import heart from "../assets/images/heart.svg"
import Box from "./Box";

const Navbar = () => {
  

  return (
    <>

    <div style={{backgroundImage: `url(${hero})`}} 
    className={`min-h-[100dvh] relative bg-no-repeat py-3 md:bg-repeat`}>
      <div className="relative">
        <img src={heart} alt="heart svg" className="absolute right-4 w-10 animate-pulse" />
       <h1 className="text-7xl font-zen tex" >JOHANNE</h1>
       <Box />
      </div>
    </div>

    </>
  )
}

export default Navbar;