import React, { useState } from "react";
import Logo from "../../component/Logo";
import Illustration from "../../component/Illustration";
import Bouton from "../../component/Bouton";
import { useNavigate } from "react-router-dom";
import SliderForm from "../../component/SliderForm";
import IllustrationLogin from "../../assets/Layer 1.svg"

export default function Login() {
  const navigate = useNavigate();

  const loginQuestions = [
    { label: "Quel est votre", sub_label:"nom d’utilisateur ?", name: 'email', type: 'email' },
    { label: "Et votre", sub_label:"nom de passe ?", name: 'password', type: 'password' }
  ];

  const handleComplete = (answers) => {
    console.log('Réponses du formulaire:', answers);
  };


  return (
    <div className="">
      <Logo label={"Pista"} className={"m-2"}/>
      <Illustration
        url={
          IllustrationLogin
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
