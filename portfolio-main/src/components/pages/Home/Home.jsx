import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { LiaFigma } from "react-icons/lia";
import { TbSeo } from "react-icons/tb";
import { TbFileCv } from "react-icons/tb";
import Contact from "../../Contact/Contact";


const Home = () => {

  // Gere l'ouverture et la dermeture de formulaire de contact
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="home">
      <div className="home__infos">
        <div className="infos__logo">
          <h1>Salut , c&apos;est Prisca!</h1>
          <p> Développeur Front-End</p>
          <div className="stack">
          <FaHtml5 style={{ color: '#E96228'  }} size={50} />
          <FaCss3 style={{ color: '#0091D5'  }} size={50} />
          <TbBrandJavascript style={{ color: '#F7D138'  }} size={50} />
          <FaSass style={{ color: '#C76494'  }} size={50}/>
          <LiaFigma style={{ color: '#9D56F7'  }} size={50}/>
          <FaReact style={{ color: '#5ED3F4'  }} size={50} />
          <TbSeo style={{ color: '#5ED3F4'  }} size={50}/>
          </div>
        </div>

        {/* Lien cliquable contenant une image */}
        <a href="https://ibb.co/hHmXLFv" target="_blank" rel="noopener noreferrer">
            <img
              src="https://i.ibb.co/sQV5b9r/20231108-105445.jpg"
              alt="20231108-105445"
              border="0"
              className="profile-image"
            />
          </a>
        
      </div>
      <div className="home__social">
        <div className="social">
          <Link
            to="https://github.com/sprisca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare style={{ color: 'hsl(0, 0%, 100%)'  }} size={100} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/prisca-saina-rahaingonirina-474ab918a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: 'rgb(10,102,194)'  }} size={100} />
          </Link>
          <a href="./download/RAHAINGONIRINA Saina Prisca.pdf " download="RAHAINGONIRINA Saina Prisca.pdf" title="Télécharger mon CV">
        <TbFileCv
          style={{ color: "hsl(0, 0%, 100%)" }}
          size={100}
        />
      </a>
        </div>
        <button onClick={openModal}>Contact</button>
        <Contact isOpen={isModalOpen} onClose={closeModal}/>
      </div>
    </section>
  );
};

export default Home;
