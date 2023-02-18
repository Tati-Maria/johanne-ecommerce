import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Payments from "../components/Payments";
import ScrollTo from "../utils/ScrollTo";

const HomeLayout = () => {
  return (
    <>
    <header className={`text-white fixed w-full bg-slate-700 z-20`}>
      <Nav />
    </header>
    <main className="pt-20">
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