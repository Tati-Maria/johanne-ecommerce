import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Payments from "../components/Payments";
import ScrollTo from "../utils/ScrollTo";

const HomeLayout = () => {
  return (
    <>
    <header>
      <Nav />
    </header>
    <main>
      <ScrollTo />
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