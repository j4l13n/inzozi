import Layout from "../components/Layout";
import Home from '../components/Home'
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import AboutUs from "../components/About";
import Book from "../components/Book";
import BookForm from "../components/BookForm";

const HomePage = () => {
  return (
    <>
      <Layout />
      <Home />
      <AboutUs />
      <Gallery />
      <Book />
      <BookForm />
      <Footer />
    </>
  );
};

export default HomePage;
