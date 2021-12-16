import React from "react";

interface IAccessorires {}

interface ISectionTitleProps {
  title: string;
  icon: JSX.Element;
}

interface ICheckBoxItemProps {
  itemName: string;
  active: boolean;
}

const ItemWithIcon: React.FC = ({ children }) => {
  return <div className="flex items-center space-x-2">{children}</div>;
};

const SectionTitle: React.FC<ISectionTitleProps> = (props) => {
  return (
    <React.Fragment>
      <div className="flex justify-between pt-10">
        <ItemWithIcon>
          <div className="w-5 h-5">{props.icon}</div>
          <p className="text-lg font-semibold text-slate-700 ">{props.title}</p>
        </ItemWithIcon>
        <ItemWithIcon>
          <img
            className="w-4 h-4 "
            src="https://img.icons8.com/android/24/4C54E6/plus.png"
            alt="plus icon"
          />
          <p className="text-indigo-500">Add item</p>
        </ItemWithIcon>
      </div>
      <div className="border-solid border-2 border-gray-100 mt-4"></div>
    </React.Fragment>
  );
};

const CheckBoxItem: React.FC<ICheckBoxItemProps> = (props) => {
  return (
    <div className="space-x-2">
      <input
        className="checked:bg-black"
        type="checkbox"
        name={props.itemName}
        id={`_${props.itemName}`}
        checked={props.active}
      />
      <span
        className={`inline-block align-top capitalize ${
          props.active ? "" : "text-slate-500"
        }`}
      >
        {props.itemName}
      </span>
    </div>
  );
};

const CheckBoxItemContainer: React.FC = ({ children }) => {
  return (
    <div className=" grid grid-flow-cols grid-cols-2 gap-x-20 gap-y-5 pt-5">
      {children}
    </div>
  );
};

const Accessories: React.FC<IAccessorires> = () => {
  return (
    <section>
      <h3 className="text-2xl font-bold ">What will you provide?</h3>
      <p className="text-gray-400 pt-2">
        Select things you can provide for your future students
      </p>
      <SectionTitle
        title="Equipment"
        icon={
          <img
            src="https://img.icons8.com/android/100/727272/spoon.png"
            alt="Spoon Icon"
          />
        }
      />

      <CheckBoxItemContainer >
        <CheckBoxItem itemName="Grips" active={true} />
        <CheckBoxItem itemName="Racquet string" active={false} />
        <CheckBoxItem itemName="Tennis racquet" active={false} />
        <CheckBoxItem itemName="Tennis Balls" active={false} />
      </CheckBoxItemContainer>

      <SectionTitle
        title="Apparel"
        icon={
          <img
            src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/100/727272/external-tshirt-clothes-and-fashion-kiranshastry-solid-kiranshastry.png"
            alt="apparel icon"
          />
        }
      />
      <CheckBoxItemContainer >
        <CheckBoxItem itemName="Tennis shoes" active={true} />
        <CheckBoxItem itemName="Sweatbands" active={false} />
        <CheckBoxItem itemName="Practice skirt" active={false} />
        <CheckBoxItem itemName="Racquet bag" active={false} />
        <CheckBoxItem itemName="Practice shirts" active={true} />
        <CheckBoxItem itemName="Hat/Visor" active={false} />
      </CheckBoxItemContainer>

      <SectionTitle
        title="Accessories"
        icon={
          <img
            src="https://img.icons8.com/ios-filled/100/727272/baby-bottle.png"
            alt="empty bottle icon"
          />
        }
      />
      <CheckBoxItemContainer>
        <CheckBoxItem itemName="Water" active={true} />
        <CheckBoxItem itemName="Sunglasses" active={false} />
        <CheckBoxItem itemName="Hair ties/Headband" active={false} />
        <CheckBoxItem itemName="Athletic tape" active={false} />
        <CheckBoxItem itemName="Sunscreen" active={false} />
      </CheckBoxItemContainer>
    </section>
  );
};

export default Accessories;
