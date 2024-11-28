import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';

const Contact = ({ isOpen, onClose }) => {
  //Gestion du formulaire
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) =>{
    emailjs.send(
      'service_00iinfn',
      'template_nqcmba5',
      {
        name: data.name,
        subject: data.subject,
        email: data.email,
        message: data.message
      },
      '-J3ByuXDnSmAIq6ft'
    ).then(response => {
      if (response.status === 200) {
        // Réinitialisation du formulaire
        reset();
        // Fermeture de la modal
        onClose();
        // Affichage de l'alerte si la réponse est ok
        alert('Message envoyé avec succès!');
      } else {
        // Affichage de l'alerte en cas d'erreur
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    })
    
  } 

  const [isFormValid, setIsFormValid] = useState(false); // État pour suivre la validité du formulaire
  const handleInputChange = (e) => {
    // Vérifiez la validité du formulaire à chaque changement d'entrée
    const form = e.target.form;
    setIsFormValid(form.checkValidity());
  };
  let buttonStyle = {}; // Créez un objet pour stocker les styles du bouton

  if (!isFormValid) {
    buttonStyle = { borderColor: 'red'}; // Appliquez le style si le formulaire n'est pas valide
  }
  if (!isOpen) return null;
  return (
    <div className="modal-contact">
      <div className="__contact">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Contactez-Prisca</h2>
        <form id="contact" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" {...register("name")}  onChange={handleInputChange} required/>
          <label htmlFor="subject">Sujet du message</label>
          <input type="text" id="subject" name="subject" {...register("subject")}  onChange={handleInputChange} required/>      
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" {...register("email")}  onChange={handleInputChange} required/>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"maxLength={250} {...register("message")}  onChange={handleInputChange} required placeholder="Max 250 caractères"/>
          <button type="submit" style={buttonStyle}>Envoyer</button>
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Contact;
