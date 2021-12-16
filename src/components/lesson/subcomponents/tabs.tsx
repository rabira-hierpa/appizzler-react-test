import React from "react";
import Accessories from "./tab-content/accessories";
interface ITabsProps {}

const Tabs: React.FC<ITabsProps> = () => {
  return (
	  <div className="flex flex-col space-y-10">
    <div className="flex items-start">
      <ul className="flex justify-center items-center my-4">
        <li className="cursor-pointer py-2 px-4 text-red-500  rounded-sm border-b-4 space-x-2">
          <span className="font-semibold">Provide</span>
          <span className="border-solid border-2 border-red-100 py-1 px-2 rounded-md bg-red-100 text-red-500 font-semibold">
            4
          </span>
        </li>
        <li className="cursor-pointer py-2 px-4 space-x-2 text-gray-500">
          <span className="">What to bring</span>
          <span className="border-solid border-2 border-gray-100 py-1 px-2 rounded-md bg-gray-100 text-black">
            0
          </span>
        </li>
      </ul>
    </div>
		<Accessories/>
	  </div>
  );
};

export default Tabs;
