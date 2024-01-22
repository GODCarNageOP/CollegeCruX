import React from "react";
import Flowchart from "../components/Flowchart";

const Admission = () => {
  return (
    <div className="mt-20 h-full mx-10 mb-10">
      <div className="admissionContainer flex items-center justify-center flex-col gap-10">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[26px] lg:leading-[40px] text-transparent">
          Admission Process
        </h1>
        <Flowchart />
      </div>
    </div>
  );
};

export default Admission;
