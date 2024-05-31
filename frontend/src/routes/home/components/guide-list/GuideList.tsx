import GuideBox from "./GuideBox";

const GuideList: React.FC = () => {
  return (
    <div>
      <h1 className="text-primary text-4xl font-bold">Guides</h1>
      <div className="grid grid-cols-3 gap-5">
        <GuideBox
          img="/assets/texalter.webp"
          title={"Operator Guides"}
          url={"/guide/operator"}
          description="Tutorial about operator, their stats, best practice, plus / minus, how to use, etc."
        />
        <GuideBox
          img="/assets/return-to-mist.jpg"
          title={"Stages Guides"}
          url={"/guide/stages"}
          description="Tutorial about stages, how to clear."
        />
        <GuideBox
          img="/assets/squad.webp"
          title={"Squad Guides"}
          url={"/guide/squad"}
          description="Tutorial about Squad, how to build, which to build, synergy, combo, etc."
        />
      </div>
    </div>
  );
};
export default GuideList;
