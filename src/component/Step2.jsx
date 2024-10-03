import React, { useState, useEffect } from "react";
// import borad from "../../public/images/board.png";
// import list from "../../public/images/list.png";
// import skf from '../'

const Step2 = ({ handleChange, formData }) => {
  const [selectedView, setSelectedView] = useState("list");
  useEffect(() => {
    handleChange({ target: { name: "view", value: selectedView } });
  }, [selectedView]);
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-center mb-4">
      <h1 className="text-center  text-2xl font-semibold">Select a view</h1>
      <p className="text-[14px] font-normal text-gray-400">
        You can also customize this views in settings
      </p>
      <div className=" w-full justify-between gap-5 items-center flex mt-8">
        <div
          className={`w-[50%] border ring-1 p-3 ring-gray-300 ${
            selectedView === "list" && "outline-none ring-1 ring-blue-500"
          } rounded-md`}
          onClick={() => setSelectedView("list")}
        >
          <img
            className="h-[120px] w-full contain"
            src="./list.png"
            alt="list image"
          />
        </div>
        <div
          className={`w-[50%] border ring-1 p-3 ring-gray-300 ${
            selectedView === "board" && "outline-none ring-1 ring-blue-500"
          } rounded-md`}
          onClick={() => setSelectedView("board")}
        >
          <img src="" className="h-[120px] w-full contain" alt="Board image" />
        </div>
      </div>
    </div>
  );
};

export default Step2;
