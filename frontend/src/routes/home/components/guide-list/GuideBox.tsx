type GuideBox = {
  img: string;
  url: string;
  title: string;
  description: string;
};

import { Link } from "react-router-dom";

const GuideBox: React.FC<GuideBox> = ({ img, url, title, description }) => {
  return (
    <div className=" h-[250px] guidebox isolate relative group overflow-hidden transition-all rounded-lg">
      <img
        src={img}
        alt=""
        className="h-[105%] absolute left-[50%] top-[50%] object-cover translate-x-[-50%] translate-y-[-50%] group-hover:h-[120%] transition-all z-[-99]"
      />
      <div className=" z-[99] w-full h-full p-5 flex flex-col gap-2 justify-center absolute left-[-100%] top-0 group-hover:left-0 transition-all">
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <p className="text-white text-sm">{description}</p>
        <Link to={url}>
          <button className="btn btn-primary w-max btn-sm">View</button>
        </Link>
      </div>
    </div>
  );
};

export default GuideBox;
