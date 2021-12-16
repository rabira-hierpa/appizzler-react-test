import React from "react";
import './sidebar-nav.style.css'

export interface ISubMenu{
  subMenuTitle: string;
  isSubMenuActive: boolean;
}
interface ISidebarNavProps {
  order: number;
  navTitle: string;
  isActive: boolean;
  navListItems?: ISubMenu[];
}
const SidebarNavItem: React.FC<ISidebarNavProps> = (props) => {
  return (
    <div>
      <div className="flex space-x-2 items-center pb-5">
        <div className={`rounded-xl ${props?.isActive ? 'bg-indigo-700 text-white' : 'border-solid border-2 border-gray-300 text-gray-700 font-semibold'} text-center w-10  p-2`}>
          {props?.order}
        </div>
        <p className={`font-semibold ${props.isActive ? '' : 'text-gray-600'  } `}>{props?.navTitle}</p>
      </div>
        <NavListItems listItems={props?.navListItems}/>
    </div>
  );
};

interface INavListItems {
  listItems?: ISubMenu[];
}

const NavListItems: React.FC<INavListItems> = ({ listItems }) => {
  return (
    <ul className="block">
      {listItems?.map((_item:ISubMenu) => {
        return <li className={`pb-4 relative ml-8  empty:hidden ${_item.isSubMenuActive ? 'highlightActive text-indigo-700' : 'text-slate-500' }`}> {_item.subMenuTitle} </li>;
      })}
    </ul>
  );
};

export default SidebarNavItem;
