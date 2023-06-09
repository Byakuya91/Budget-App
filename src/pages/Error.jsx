import React from "react";

// React Router Dom imports
import { useRouteError, Link, useNavigate } from "react-router-dom";

// library imports
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  // seeing the error message
  // console.log("Error data:", error);
  return (
    <div className="error">
      <h1>Oh no! We have a problem.</h1>
      <p>{error.message || error.statusText}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={() => navigate(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go Back</span>
        </button>
        <Link to="/" className="btn btn--dark">
          <HomeIcon width={20} />
          <span>Go Home</span>
        </Link>
      </div>
    </div>
  );
};
