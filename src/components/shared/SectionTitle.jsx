import React from "react";
import Reveal from "./Reveal";

const SectionTitle = ({ title, subtitle, pin }) => {
  return (
    <div className="mb-12">
      <Reveal delay={"0"}>
        {" "}
        <h2 className="text-md font-bold text-center uppercase  text-Primary mb-4">
          {pin}
        </h2>
      </Reveal>
      <Reveal delay={"0.1"}>
        <h3 className="text-3xl lg:text-4xl font-extrabold text-center ">
          {title}
        </h3>
      </Reveal>
      <Reveal delay={"0.2"}>
        {" "}
        <h2 className="text-md md:w-5/12 2xl:w-4/12 mx-auto text-center mt-2 text-gray-400">
          {subtitle}
        </h2>
      </Reveal>
    </div>
  );
};

export default SectionTitle;
