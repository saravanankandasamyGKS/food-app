import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Something went wrong.
        </h2>
        <p className="text-gray-600">
          {err?.status} : {err?.statusText || "Unexpected Error"}
        </p>
      </div>
    </div>
  );
};

export default Error;
