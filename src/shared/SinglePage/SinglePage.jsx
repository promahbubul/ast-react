import React from "react";

const SinglePage = ({ children, pageTitle }) => {
  return (
    <div>
      <h1 className="bg-yellow-500 py-16     text-center text-5xl font-jura font-semibold">
        {pageTitle}
      </h1>
      {children}
    </div>
  );
};

export default SinglePage;
