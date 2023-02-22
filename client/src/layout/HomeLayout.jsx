import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Payments from "../components/Payments";
import ScrollTo from "../utils/ScrollTo";
import PageInfo from "../components/PageInfo";

const HomeLayout = () => {
  return (
    <>
    <header className={`z-20  w-full`}>
      <Nav />
      <PageInfo />
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