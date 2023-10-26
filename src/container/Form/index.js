import LeftChevron from "../../assets/logo/chevron_left.svg";
import Bouton from "../../component/Bouton";
import { useNavigate } from "react-router-dom";
import Titre from "../../component/Titre";
import BodyText from "../../component/BodyText";
import { CATEGORIES, PROFILES } from "../../helpers/constant";
import { useState } from "react";
import profileImage from "../../assets/logo/Mask group.png";
import remove from "../../assets/logo/Group 12565delette.svg";
import add from "../../assets/logo/Group 12564add.png";
import addLogo from "../../assets/logo/Vector.png";


export default function Form() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="">
      <div className="flex items-center">
        <Bouton
          handleclick={() => navigate("/dashboard")}
          className=""
          svg={true}
          url={LeftChevron}
        />
        <Titre>Nouvel objectif 🎯</Titre>
      </div>
      <div className="m-3">
        <Titre sub_title={true}>Titre de l’objectif</Titre>
        <BodyText>
          Veuillez trouver le nom que vous souhaitez donner à votre objectif.
        </BodyText>
        <input className="input-form w-full my-3" />
      </div>
      <div>
        <hr />
      </div>
      <div className="m-3">
        <Titre sub_title={true}>Titre de l’objectif</Titre>
        <BodyText>
          Dans quelle catégorie souhaitez-vous classer cette liste ?
        </BodyText>
        <div className="flex m-3 justify-between">
          {CATEGORIES.map((categorie) => (
            <Bouton
              handleclick={() => setActive(categorie.name)}
              label={categorie.name}
              className={
                active === categorie.name
                  ? "button_category active"
                  : "button_category"
              }
              style={
                active === categorie.name
                  ? {
                      border: `2px solid ${categorie.color}`,
                      backgroundColor: `${categorie.color}`,
                      color: `white`,
                    }
                  : {
                      border: `2px solid ${categorie.color}`,
                      color: `${categorie.color}`,
                    }
              }
            />
          ))}
        </div>
      </div>
      <div className="m-3">
        <hr />
      </div>
      <div className="m-3">
        <Titre sub_title={true}>Partager la liste</Titre>
        <BodyText>
          Choisissez les personnes avec qui vous souhaitez partager cette liste.
        </BodyText>
      </div>
      <div className="flex flex-wrap">
        <div className="flex align-center">
          <div className="flex items-center justif-center">
            <div className="flex items-center justify-center" style={{background: `url("${remove}")`, width: 75, height: 75}}>
              <img style={{width: 24, height: 24}} src={addLogo} />
            </div>
          </div>
        </div>
        {PROFILES.map((profile) => (
          <div className="flex m-3 p-1 rounded-xl" style={{backgroundColor: "white"}}>
            <div>
              <img src={profileImage} />
            </div>
            <div className="flex flex-col justify-center">
              <p sclassName="p-1" tyle={{fontSize: 14}}>{profile.name}</p>
              <p className="p-1" style={{fontSize: 12, color: "#7A12FF"}}>{profile.objectifs} objectifs</p>
            </div>
          </div>
        ))}
        <div className="flex">
          <div className="flex items-center">
            <img src={add} style={{width: 75, height: 75}}/>
          </div>
        </div>
      </div>
    </section>
  );
}
