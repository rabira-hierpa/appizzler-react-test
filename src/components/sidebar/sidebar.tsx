import React, { useState } from "react";
import SidebarNavItem from "./components/sidebar-nav-item";

type ISideBarProps = {};

export const SideBar: React.FC<ISideBarProps> = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);

  return (
    <div className="flex flex-wrap w-72 h-screen bg-gray-100 py-20 ">
      <div className="px-10">
        <h1 className="text-lg text-center pb-5 font-semibold">
          Setup your account
        </h1>
        <div className="flex flex-col space-y-5">
          <SidebarNavItem
            order={1}
            isActive={isNavActive}
            navTitle="Lesson Details"
            navListItems={["Set lesson", "Address", "FAQ", "Price"]}
          />
          <SidebarNavItem
            isActive={isNavActive}
            order={2}
            navTitle="Set your schedule"
          />
          <SidebarNavItem
            isActive={isNavActive}
            order={3}
            navTitle="Getting to know you"
          />
        </div>
        <div className="flex space-x-5 pt-20">
          <p className="font-semibold">Icon</p>
          <p>Pss.. Your progress is automatically saved</p>
        </div>
      </div>
    </div>
  );
};
