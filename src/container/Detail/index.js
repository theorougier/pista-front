import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { LIST } from "../../helpers/constant";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log("test", id);
  useEffect(() => {
    setData(LIST[id]);
  }, [id]);
  return (
    <div
      style={{ backgroundColor: `${data.color}` }}
      className={`bg-${data?.color} h-[100vh]`}
    >
      test
    </div>
  );
}
