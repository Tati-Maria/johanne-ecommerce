import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Payments from "../components/Payments";

const HomeLayout = () => {
  return (
    <>
    <header>
      <Nav />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Payments />
      <Footer />
    </footer>
    </>
  )
}

export default HomeLayout;