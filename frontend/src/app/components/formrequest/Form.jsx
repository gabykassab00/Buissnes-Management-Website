import React from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Form = () => {
  return (
    <div className="form request-block lg:mt-[100px] sm:mt-16 mt-10 ">
      <div className="container">
        <div className="heading flex max-xl:flex-col xl:items-center gap-4 justify-between">
          <div className="heading3">Request a free call back.</div>
          <div className="body3 text-secondary">
            working with this agency has been a game-changer for our buissnes
          </div>
        </div>

        <form className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-line">
          <div className="grid lg:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <input
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100"
                placeholder="first name"
                type="text"
                name="name"
              />
            </div>

            <div className="w-full">
              <input
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100"
                placeholder="email"
                type="text"
                name="name"
              />
            </div>

            <div className="w-full select-arrow-none relative">
              <select
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100"
                placeholder="email"
                type="text"
                name="category"
              >
                <option value="finacial planing">financial planning</option>
                <option value="buissnes planning">Buissnes planning</option>
                <option value="buissnes planning">Development planning</option>
              </select>
              <Icon.CaretDown className="absolute top-1/2 -translate-y-1/2 right-5 " />
            </div>
          </div>
          <button className="button-main flex-shrink-0 bg-black hover:bg-blue-500 text-white rounded-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
