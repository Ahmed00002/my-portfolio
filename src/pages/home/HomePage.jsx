import AboutMe from "../../components/home/AboutMe";
import Header from "../../components/home/header";
import Projects from "../../components/home/Projects";
import Skills from "../../components/home/Skills";
import ContactMe from "../../components/shared/ContactMe";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const HomePage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
