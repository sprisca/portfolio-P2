import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Loisir = ({ title, url,iconName,subtitle,description }) => {
  // Récupérez l'icône spécifique en fonction du nom passé dans iconName
  const IconComponent = iconName;
    // Définir le style par défaut
    let iconStyle = { color: "hsl(0, 0%, 100%)" };
    let iconYoutube = { color: "red" };
  return (
    <div className="loisir">
      <div className="content-up">
      <h2>{title}</h2>
        <div className="icon-content">
        {url !== "" ? ( // Vérifie si l'URL n'est pas vide
            <Link to={url} target="_blank">
              <IconComponent style={iconYoutube} size={70} />
            </Link>
          ) : (
            // Si l'URL est vide, affiche seulement l'icône sans lien
            <IconComponent style={iconStyle} size={70} />
          )}
        </div>
      </div>
      <div className="content">
        <div className="text-content">
            <h3>{subtitle}</h3>
            <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

Loisir.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  iconName: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Loisir;
