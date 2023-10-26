import React, { useState } from "react";
import Logo from "../../component/Logo";
import Illustration from "../../component/Illustration";
import Bouton from "../../component/Bouton";
import Formulaire from "../../component/Formulaire";
import { useNavigate } from "react-router-dom";
import SliderForm from "../../component/SliderForm";
import IllustrationRegister from "../../assets/Layer 2.svg";

export default function Register() {
  const navigate = useNavigate();

  const registerQuestions = [
    {
      label: "Quel est votre",
      sub_label: "nom prénom ?",
      name: "firstname",
      type: "text",
    },
    {
      label: "Quel est votre",
      sub_label: "Genre ?",
      name: "gender",
      type: "select",
      options: [
        { value: "homme", label: "Homme" },
        { value: "femme", label: "Femme" },
        { value: "autre", label: "Autre" },
      ],
    },
    {
      label: "Quel est votre",
      sub_label: "Email ?",
      name: "email",
      type: "email",
    },
    {
      label: "Veuillez creer un",
      sub_label: "Mot de passe",
      name: "password",
      type: "password",
    },
  ];

  const handleComplete = (answers) => {
    console.log("Réponses du formulaire:", answers);
  };

  return (
      <div className="">
        <Logo label={"Pista"} className={"m-3"}/>
        <Illustration url={IllustrationRegister} className={"m-3"}/>
        <SliderForm questions={registerQuestions} onComplete={handleComplete} />
        <div className="">
          <Bouton
            label={"Je possède déjà un compte"}
            variant="primary"
            handleclick={() => navigate("/login")}
          />
        </div>
      </div>
  );
}
