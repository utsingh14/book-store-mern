import React from "react";

const spinner = () => {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="animate-ping justify-center w-24 h-24 m-8 rounded-full bg-sky-600 flex items-center">
        Loading...
      </div>
    </div>
  );
};

export default spinner;
