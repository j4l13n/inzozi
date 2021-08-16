import Layout from "../components/Layout";
import Home from '../components/Home'
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import AboutUs from "../components/About";

const HomePage = () => {
  return (
    <>
      <Layout />
      <Home />
      <AboutUs />
      <Gallery />
      <Footer />
    </>
  );
};

export default HomePage;
