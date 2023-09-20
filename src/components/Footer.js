import "../css/Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2023 SangaSangai. All rights reserved.</p>
      <div className="footer-links">
        {/* <Link to="/about">About </Link> */}
        <a href="https://inspireuvic.org/" target="_blank">
          Inspire
        </a>
        <a
          href="https://www.tearfund.org/about-us/our-impact/where-we-work/nepal"
          target="_blank"
        >
          Tearfund
        </a>
        <a href="https://www.facebook.com/MicahNetworkNepal/" target="_blank">
          Micah
        </a>
      </div>
    </footer>
  );
};
export default Footer;
