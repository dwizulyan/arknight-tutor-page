import GuideList from "./components/guide-list/GuideList";
import LatestArticle from "./components/latest-article/LatestArticle";
const Home: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <GuideList />
      <LatestArticle />
    </div>
  );
};
export default Home;
