import React from "react";
import { GOALS, CATEGORIES } from "../../helpers/constant";
import PieChart from "../../component/PieChart";

export default function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-[30px]"> Bonjour Camille</h1>
      <div className="w-full bg-purple-dark rounded-lg px-5 py-4 flex mb-5">
        <div className="w-6/12 flex flex-col justify-between shadow-purple-dark">
          <div className="text-white text-sm">
            <b>Objectifs du jour</b>
            <p>
              Il vous reste{" "}
              <b>{GOALS.filter((goal) => !goal.check).length} objectifs</b> pour
              aujourd’hui ! 🎉
            </p>
          </div>
          <div className="bg-white w-fit text-purple-dark text-sm rounded-full font-bold">
            <p className="px-2">
              {GOALS.filter((goal) => goal.check).length}/{GOALS.length}
            </p>
          </div>
        </div>
        <div className="w-6/12">
          <PieChart />
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold mb-5">Catégories</p>
        <div className="overflow-y-scroll no-scrollbar flex gap-5">
          {CATEGORIES.map((category) => (
            <div className="rounded bg-purple p-5">
              <p className="font-bold">{category}</p>

              <p className="flex flex-row">
                {`${
                  GOALS.filter((goal) => goal.categories.includes(category))
                    .length
                } objectif`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
