import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Benefits from "./Benefits";
import Our_Courses from "./Our_Courses";
import Our_Testimonials from "./Our_Testimonials";
import Our_Pricing from "./Our_Pricing";

const RootlayOut = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Benefits />
      <Our_Courses />
      <Our_Testimonials />

      <Our_Pricing />
      <Footer />
    </>
  );
};

export default RootlayOut;
