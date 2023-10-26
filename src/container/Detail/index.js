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
            {console.log(
              "test",
              data?.tasks.filter((goal) => goal.check).length,
              data?.tasks.length
            )}
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
          <span className="text-white"> {data?.tasks.length} listes</span>

          <div className="w-full flex flex-col"></div>
        </>
      )}
    </div>
  );
}
