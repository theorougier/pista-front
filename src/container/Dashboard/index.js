import React from "react";
import { useNavigate } from "react-router-dom";
import { GOALS, LIST, CATEGORIES } from "../../helpers/constant";
import PieChart from "../../component/PieChart";
import Crown from "../../assets/Crown.png";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-[30px]">
        Bonjour, {localStorage.getItem("userName")}
      </h1>
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
        <div className="w-6/12 p-3">
          <PieChart
            value={GOALS.filter((goal) => goal.check).length / GOALS.length}
            icon={Crown}
          />
        </div>
      </div>
      <div className="w-full mb-5">
        <p className="text-xl font-bold mb-5">Catégories</p>
        <div className="overflow-y-scroll no-scrollbar flex gap-5 ">
          {CATEGORIES.map((category) => (
            <div
              style={{ backgroundColor: category.color }}
              className="rounded-2xl p-5 min-w-[135px] flex flex-col justify-center items-center"
            >
              <div className="w-[58px] h-[58px] mb-5">
                <PieChart
                  value={
                    GOALS.filter(
                      (goal) =>
                        goal.check && goal.categories.includes(category.name)
                    )?.length /
                    GOALS.filter((goal) =>
                      goal.categories.includes(category.name)
                    )?.length
                  }
                />
              </div>
              <div className="text-white flex flex-col items-center">
                <p className="font-bold">{category.name}</p>
                <p className="flex flex-row">
                  {`${
                    GOALS.filter((goal) =>
                      goal.categories.includes(category.name)
                    ).length
                  } objectifs`}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full">
        <p className="text-xl font-bold mb-5">Mes listes</p>
        {LIST.map((todo) => (
          <div
            style={{
              backgroundColor: CATEGORIES.find((item) =>
                todo.category.includes(item.name)
              ).color,
            }}
            className="rounded-2xl w-full mb-5 flex p-3"
            onClick={() => {
              navigate(`/detail/${todo.id}`);
            }}
          >
            <div className="w-7/12">
              <p className="text-md font-bold text-white mb-1">{todo.title}</p>
              <div className="w-full flex flex-row gap-1">
                <div className="w-fit text-white">{todo.category[0]}</div>
              </div>
            </div>
            <div className="w-5/12 flex items-center justify-end gap-1  ">
              <div className="flex w-fit">
                {todo.associated.map((elem) => (
                  <img src={elem} alt={elem} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <p className="text-xl font-bold mb-5">Dernières objectif</p>
        {GOALS.map((goal) => (
          <div
            style={{
              backgroundColor: CATEGORIES.find((item) =>
                goal.categories.includes(item.name)
              ).color,
            }}
            className="rounded-2xl w-full mb-5 flex p-3"
          >
            <div className="w-9/12">
              <p className="text-sm font-bold text-white mb-1">{goal.title}</p>
              <p className="text-sm text-white mb-1">Objectif individuel</p>

              <div className="w-full flex flex-row gap-1">
                {goal.categories.map((category) => (
                  <div className="rounded-2xl bg-white mix-blend-screen font-bold w-fit px-2">
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/12 flex items-center justify-center">
              <PieChart value={goal.completed} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
