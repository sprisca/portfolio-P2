import { FaYoutube } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FcDiploma1 } from "react-icons/fc";
import Loisir from "../../Loisir/Loisir.jsx";
import loisirs from "../../../data/loisirs.json";
const About = () => {
  // console.log(loisirs[0].text);
  const reactIcons = {
    FaYoutube: FaYoutube,
    FcDiploma1: FcDiploma1
  };

  return (
    <section className="a-propos">
      <h1>À propos de moi!</h1>
      <div className="container-loisirs">
        {loisirs.map((loisir, index) => (
          <Loisir
            key={("loisir", index)}
            title={loisir.title}
            url={loisir.url}
            subtitle={loisir.subtitle}
            description={loisir.description}
            iconName={reactIcons[loisir.iconName]}
          />
        ))}
      </div>
      <p className="note">
        Merci pour votre visite &nbsp;
        <FaHandHoldingHeart size={40}/>
      </p>
    </section>
  );
};

export default About;
