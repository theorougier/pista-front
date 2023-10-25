import React, { useState } from "react";
import Logo from "../../component/Logo";
import Illustration from "../../component/Illustration";
import Bouton from "../../component/Bouton";
import Formulaire from "../../component/Formulaire";
import { useNavigate } from "react-router-dom";
import SliderForm from "../../component/SliderForm";

export default function Register() {
  const navigate = useNavigate();

  const registerQuestions = [
    { label: 'Prénom', name: 'firstname', type: 'text' },
    { label: 'Genre', name: 'gender', type: 'text' },
    { label: 'Email', name: 'email', type: 'email' },
    { label: 'Mot de passe', name: 'password', type: 'password' }
  ];

  const handleComplete = (answers) => {
    console.log('Réponses du formulaire:', answers);
  };

  return (
    <div className="container-register">
      <Logo label={"Pista"} />
      <Illustration
        url={
          "https://images.unsplash.com/photo-1697596694485-e082a41d1796?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <Formulaire>
        <div className="input-register">
          <label>
            Renseignez vos
            <br />
            <strong>coordonnées ?</strong>
          </label>
          <div>
            <label>Mail</label>
            <input type="text" id="Mail" />
          </div>
          <div>
            <label>Nom</label>
            <input type="text" id="Nom" />
          </div>
          <div>
            <label>Mot de passe</label>
            <input type="text" id="password" />
          </div>
          <div>
            <label>Confirmation de mot de passe</label>
            <input type="text" id="confirm-password" />
          </div>
          <div></div>
        </div>
      </Formulaire>
      <div className="container-button-register">
        <Bouton
          label={"s'enregistrer"}
          handleclick={() => console.log("register")}
        />
        <Bouton
          label={"Je possède déjà un compte"}
          handleclick={() => navigate("/login")}
        />
      </div>
    </div>
  );
}
