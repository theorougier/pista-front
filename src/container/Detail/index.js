import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { LIST } from "../../helpers/constant";
import { GlobalContext } from "../../Router";
import { getHexaColor } from "../../helpers/utils";
import PieChart from "../../component/PieChart";

export default function Detail() {
  const { id } = useParams();
  const { setBgColor, bgColor } = useContext(GlobalContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    setBgColor(`${getHexaColor(LIST[id]?.color)}`);
    setData(LIST[id]);
  }, [data]);

  return (
    <div
      style={{ backgroundColor: `${bgColor}` }}
      className={`bg-${data?.color} h-full flex justify-center flex-col items-center`}
    >
      {data && (
        <>
          <div className="w-6/12 my-20">
            <PieChart
              value={
                data?.tasks.filter((goal) => goal.check).length /
                data?.tasks.length
              }
            />
          </div>
          <h1 className="text-4xl font-bold text-white capitalize">
            {data?.category}
          </h1>
          <span className="text-white mb-5"> {data?.tasks.length} listes</span>

          <div className="w-full flex flex-col gap-5">
            {LIST.filter((item) =>
              item.category.includes(data.category[0])
            )?.map((elem) => (
              <div className="bg-white rounded-2xl mix-blend-screen w-full p-5">
                <div className="w-8/12">
                  <h2 className="font-bold text-md">{elem.title}</h2>
                  <h2 className="text-sm">{elem.category[0]}</h2>
                </div>
                <div className="w-4/12"></div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
