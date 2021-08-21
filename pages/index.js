import Layout from "../components/Layout";
import Home from '../components/Home'
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import AboutUs from "../components/About";
import Book from "../components/Book";

const HomePage = () => {
  return (
    <>
      <Layout />
      <Home />
      <AboutUs />
      <Gallery />
      <Book />
      <Footer />
    </>
  );
};

export default HomePage;
