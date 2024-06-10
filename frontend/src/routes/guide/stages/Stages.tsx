import StageBox from "./components/StageBox";
import { useState, useEffect } from "react";
import { Stage } from "./utils/types";

const Stages: React.FC = () => {
  const [stages, setStages] = useState<Stage[]>();
  useEffect(() => {
    async function fetchStages() {
      const response = await fetch("http://localhost:3000/api/guide/stage");
      const data = await response.json();
      setStages(data.data);
    }
    fetchStages();
  }, []);
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[50vh] flex items-center justify-center flex-col gap-5">
        <h1 className="text-5xl text-center font-black text-primary">
          Here you can find a tutorial on how to clear a specific stages.
        </h1>
        <h1 className="">
          The video provided is not created by me, but other people, especially
          youtuber yeah, init.
        </h1>
        <SearchBox />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {stages ? (
          stages.map((stage) => <StageBox data={stage} key={stage.id} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

const SearchBox = () => {
  return (
    <div className="flex">
      <input
        type="text"
        className="bg-transparent w-[400px] border border-primary focus:border focus:outline-none px-5 py-3 placeholder:text-primary"
        placeholder="Find Stage"
      />
    </div>
  );
};
export default Stages;
