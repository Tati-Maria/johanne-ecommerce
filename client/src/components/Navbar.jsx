import hero from "../assets/images/store-hero.jpg"
import Hero from './Hero';
import Layout from "../layout/Layout";


const Navbar = () => {
  return (
    <>
    <Layout>
    <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${hero})`}} className="min-h-[80vh] bg-cover bg-center py-5">
        <Hero />
    </div>
    </Layout>
    </>
  )
}

export default Navbar;