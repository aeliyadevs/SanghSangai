import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Default.css";

const Default = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default Default;
