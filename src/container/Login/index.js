import React, { useState } from "react";
import Logo from "../../component/Logo";
import Illustration from "../../component/Illustration";
import Bouton from "../../component/Bouton";
import Icon from "../../assets/logo/icon_button.svg";
import { useNavigate } from "react-router-dom";
import SliderForm from "../../component/SliderForm";

export default function Login() {
  const navigate = useNavigate();

  const loginQuestions = [
    { label: "Quel est votre", sub_label:"nom d’utilisateur ?", name: 'email', type: 'email' },
    {  label: "Et votre", sub_label:"nom de passe ?", name: 'password', type: 'password' }
  ];

  const handleComplete = (answers) => {
    console.log('Réponses du formulaire:', answers);
  };


  return (
    <div className="container-login">
      <Logo label={"Pista"} />
      <Illustration
        url={
          "https://images.unsplash.com/photo-1697596694485-e082a41d1796?auto=format&fit=crop&q=80&w=2874&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
      <SliderForm questions={loginQuestions} onComplete={handleComplete} />
      <Bouton
        label={"Je n’ai pas de compte 😔"}
        handleclick={() => navigate("/register")}
      />
    </div>
  );
}
