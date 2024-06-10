import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Stage } from "../../stages/utils/types";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type Colors = {
  [key: string]: string;
};

const colors: Colors = {
  Normal: "bg-base-300",
  Challange: "bg-base-300 ",
  Tribulation: "bg-base-300",
  TextNormal: "text-primary",
  TextChallange: "text-error",
  TextTribulation: "text-warning",
};

const ViewStages: React.FC = () => {
  const [stage, setStage] = useState<Stage>();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/guide/stages", { state: { error: "No id provided" } });
      return;
    }

    async function fetchStage() {
      const response = await fetch(
        `http://localhost:3000/api/guide/stage?id=${state.id}`
      );
      const data = await response.json();
      setStage(data.data);
    }
    fetchStage();
  }, [state, navigate]);
  stage ? console.log(stage) : console.log("Loading");
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">{stage?.title}</h1>
      <p className="text-xl font-semi">{stage?.chapter.title}</p>
      <p className="text-lg font-medium">{stage?.code}</p>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-3 gap-5">
          {stage?.mode.map((mode) => (
            <div
              className={twMerge(colors[mode.mode], "p-5 flex flex-col gap-3")}
              key={mode.id}
            >
              <h1
                className={twMerge(
                  "text-base-300 text-2xl",
                  colors[`Text${mode.mode}`]
                )}
              >{`${mode.mode} Mode`}</h1>
              <h1
                className={twMerge(
                  "text-base-300 ",
                  colors[`Text${mode.mode}`]
                )}
              >
                {mode.conditions.description.map((condition) => {
                  return <span key={mode.id}>{condition}</span>;
                })}
              </h1>
              <h1>Drops</h1>
              <div className="grid grid-cols-4 gap-2 w-full">
                {mode.rewards.items.map((items) => {
                  const img = items.itemName.replaceAll(" ", "_");
                  return (
                    <div
                      className="tooltip"
                      data-tip={`Name : ${items.itemName}, Type : ${items.type}, Rarity : ${items.rarity}`}
                    >
                      <button className="btn btn-sm btn-ghost w-[70px] h-[70px]">
                        <img
                          className={`w-[90%] object-cover hover:after:content-[${items.itemName}] after:block`}
                          src={`/assets/items/${img}.webp`}
                          alt={items.itemName}
                          key={items.id}
                        />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewStages;
