import ArticleBox from "./ArticleBox";

const LatestArticle: React.FC = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold text-primary mb-3">Latest Article</h1>
      <div className="w-full h-screen grid grid-cols-3 gap-5">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
      </div>
    </div>
  );
};
export default LatestArticle;
