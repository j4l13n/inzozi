import Layout from "../components/Layout";
import Home from '../components/Home'
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import AboutUs from "../components/About";
import Book from "../components/Book";
import BookForm from "../components/BookForm";
import MeetFounder from "../components/Founder";

const HomePage = () => {
  return (
    <>
      <Layout />
      <Home />
      <AboutUs />
      <MeetFounder />
      <Gallery />
      <Book />
      <BookForm />
      <Footer />
    </>
  );
};

export default HomePage;
