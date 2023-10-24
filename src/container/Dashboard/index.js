import React from "react";
import { GOALS } from "../../helpers/constant";
export default function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-[24px] font-bold mb-[30px]"> Bonjour Camille</h1>
      <div className="w-full bg-purple rounded-lg px-5 py-4 flex">
        <div className="w-6/12">
          <div className="text-white text-sm">
            <b>Objectifs du jour</b>
            <p>
              Il vous reste{" "}
              <b>{GOALS.filter((goal) => !goal.check).length} objectifs</b> pour
              aujourd’hui ! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
