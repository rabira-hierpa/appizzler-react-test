import React from "react";
import Tabs from "./subcomponents/tabs";
type ILessonProps = {
  textAreaPlaceholder?: string;
};

export const Lesson: React.FC<ILessonProps> = (props) => {
  return (
    <div className="p-20">
      <h1 className="text-5xl font-bold">Set your lesson</h1>
      <p className="text-gray-400 py-2 ">1-on-1 lesson</p>

      <section className="pt-10">
        <p className="text-sm">Tell students about your session plan</p>
        <textarea
          className="mt-2 pl-2 pt-1 border-solid border-2 border-gray-300 placeholder:pt-1 placeholder:pl-2  rounded-xl"
          name="lessonPlan"
          placeholder={props?.textAreaPlaceholder}
          rows={5}
          cols={70}
        />
      </section>
      <section className="py-20">
        <Tabs />
      </section>
    </div>
  );
};
