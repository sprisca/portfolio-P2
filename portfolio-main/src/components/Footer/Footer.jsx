import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} RAHAINGONIRINA Saina Prisca </p>
      <Link to="/LegalNotice">Mentions Légales</Link>

    </footer>
  );
};

export default Footer;
