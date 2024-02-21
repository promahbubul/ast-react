import React from "react";

const SinglePage = ({ children, pageTitle, className }) => {
  return (
    <div>
      <div className="bg-yellow-500 py-16 ">
        <h1
          className={` max-w-4xl mx-auto leading-tight text-center text-5xl ${className} font-jura font-semibold`}
        >
          {pageTitle}
        </h1>
      </div>
      {children}
    </div>
  );
};

export default SinglePage;
