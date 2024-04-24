import React from "react";

const SkillComponent = ({ skill, showProgress = false }) => {
  return (
    <div className="mt-[2vh]">
      <p className="text-white font-serif text-sm">{skill.name}</p>
      {showProgress && (
        <div class="w-full bg-gray-200 rounded-full h-1.5 my-2 dark:bg-gray-500">
          <div
            class={`bg-white h-1.5 rounded-full dark:bg-white ${skill.percentage}`}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SkillComponent;
