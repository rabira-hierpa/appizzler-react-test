import React from "react";
import './sidebar-nav.style.css'
interface ISidebarNavProps {
  order: number;
  navTitle: string;
  isActive: boolean;
  navListItems?: string[];
}
const SidebarNavItem: React.FC<ISidebarNavProps> = (props) => {
  return (
    <div>
      <div className="flex space-x-2 items-center pb-5">
        <div className={`rounded ${props?.isActive ? 'bg-blue-800' : 'border-solid border-2 border-gray-300 text-gray-500 font-semibold'} text-center w-10 text-white p-2`}>
          {props?.order}
        </div>
        <p className="">{props?.navTitle}</p>
      </div>
        <NavListItems listItems={props?.navListItems}/>
    </div>
  );
};

interface INavListItems {
  listItems?: string[];
}
const NavListItems: React.FC<INavListItems> = ({ listItems }) => {
  return (
    <ul className="listDesign block">
      {listItems?.map((_item) => {
        return <li className="pb-4 relative ml-8"> {_item} </li>;
      })}
    </ul>
  );
};

export default SidebarNavItem;
