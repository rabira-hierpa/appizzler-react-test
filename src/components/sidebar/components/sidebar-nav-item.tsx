import React from "react";
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
        <div className="rounded bg-blue-800 text-center w-10 text-white p-2">
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
    <ol className="flex flex-col space-y-4">
      {listItems?.map((_item) => {
        return <li> {_item} </li>;
      })}
    </ol>
  );
};

export default SidebarNavItem;
