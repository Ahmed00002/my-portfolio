import Header from "../../components/home/header";
import Skills from "../../components/home/Skills";
import Navbar from "../../components/shared/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="bg-Background">
        <Navbar />
        <Header />
        <Skills />
      </div>
    </>
  );
};

export default HomePage;
