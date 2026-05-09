import React from "react";
import { testimonials } from "../constants";

const Feedback = () => {
  return (
    <div className="mt-20 tracking-wide">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-6xl flex items-center text-center justify-center">
          Feedback from our users
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {testimonials.map((testimonials, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-4">
              <div className="h-full bg-neutral-900 rounded-lg p-6 border border-neutral-800">
                <div className="flex mt-8 items-start">
                  <img
                    src={testimonials.image}
                    alt="img"
                    className="w-12 h-12 rounded-full mr-6 border-neutral-400"
                  />
                  <div>
                    <h6>{testimonials.user}</h6>
                    <span className="text-sm font-sm italic text-neutral-500">
                      {testimonials.company}
                    </span>
                  </div>
                </div>
                <div className=" rounded-md p-6 text-md font-thin leading-relaxed">
                  {testimonials.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
