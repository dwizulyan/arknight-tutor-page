import React from "react";

import { Stage } from "../utils/types";
import { Link } from "react-router-dom";

const StageBox: React.FC<{
  data: Stage;
}> = ({ data }) => {
  return (
    <div className=" bg-base-300 flex flex-col gap-3 px-5 py-5 justify-center">
      <h1 className="text-base-content text-xl font-bold">{data.title}</h1>
      <p className="text-base-content font-medium">{data.code}</p>
      <Link to={"/guide/stages/view"} state={{ id: data.id }}>
        <button className="btn btn-primary btn-sm">View</button>
      </Link>
    </div>
  );
};

export default StageBox;
