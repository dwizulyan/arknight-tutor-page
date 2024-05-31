import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
        <h1>Oops!</h1>
        <h2 className="text-warning">{error.status}</h2>
        <p className="">{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
        <Link to="/" className="btn btn-ghost">
          Go Home
        </Link>
      </div>
    );
  } else {
    return <div>Oops</div>;
  }
}
export default ErrorPage;
