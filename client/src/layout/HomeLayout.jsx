import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Payments from "../components/Payments";
import ScrollTo from "../utils/ScrollTo";

const HomeLayout = () => {
  return (
    <>
    <header className={`z-20 `}>
      <Nav />
    </header>
    <main className="">
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