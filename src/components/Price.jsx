import React from "react";
import { features, pricingOptions } from "../constants/index";
import { CheckCircle2 } from "lucide-react";
const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap ">
        {pricingOptions.map((item, index)=>(
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className="p-10 border border-neutral-700 rounded-xl">
                    <div className="mb-8 text-4xl">
                        <p>{item.title}
                            {item.title ==="Pro" && 
                            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text text-2xl mb-4 ml-2">
                                {" "}(Most Popular)
                            </span>
                            }
                        </p>
                        <p className="mb-8 mt-6">
                            <span className="mt-6 text-3xl mr-2">
                                {item.price}
                            </span>
                            <span className="text-neutral-400 tracking-tight text-xl">/Month</span> 
                        </p>
                        <ul>
                            {item.features.map((feature, index)=>(
                                <li key={index} className="mt-8 flex items-center"> 
                                <span className="text-green-600">
                                <CheckCircle2 />
                                </span>
                                <span className="ml=2 text-xl">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center mt-10 p-2 border-1 border-red-800 rounded-lg w-full text-lg hover:bg-red-800 transition duration-200">
                            Subscribe
                        </a>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
