import React, { useEffect, useState } from "react";
import { GiThreeFriends } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TbUsers } from "react-icons/tb";
const Step3 = ({ handleChange, formData }) => {
  const [selectedAccess, setSelectedAccess] = useState("admin");
  useEffect(() => {
    handleChange({ target: { name: "access", value: selectedAccess } });
  }, [selectedAccess]);
  return (
    <div className="w-full flex flex-col gap-1 items-center justify-center mb-4">
      <h1 className="text-center  text-2xl font-semibold">
        Who can manage projects
      </h1>
      <p className="text-[14px] font-normal text-gray-400">
        Don't panic - You can also cutomize this permissions in settings
      </p>
      <div className="w-full flex flex-col gap-2 mt-8">
        <div
          className={`w-full border ring-1 p-3 h-[70px] bg-gray-100 ring-gray-300 ${
            selectedAccess === "everyone" && "outline-none ring-1 ring-blue-500"
          } rounded-md flex justify-between items-center gap-1`}
          onClick={() => setSelectedAccess("everyone")}
        >
          <span className="w-[10%]">
            <GiThreeFriends className="w-6 h-6 " />
          </span>
          <div className="flex flex-col w-[90%] items-left justify-between ">
            <h2 className="text-[15px] font-normal">Everyone</h2>
            <p className="text-[13px] font-normal text-gray-400 pr-3">
              All users can now to see it, but guests cannot access the projects
            </p>
          </div>
        </div>
        <div
          className={`w-full border ring-1 p-3 h-[70px] bg-gray-100 ring-gray-300 ${
            selectedAccess === "admin" && "outline-none ring-1 ring-blue-500"
          } rounded-md flex justify-between items-center gap-1`}
          onClick={() => setSelectedAccess("admin")}
        >
          <span className="w-[10%]">
            <CgProfile className="w-6 h-6 " />
          </span>
          <div className="flex flex-col w-[90%] items-left justify-between ">
            <h2 className="text-[15px] font-normal">Only Admin's</h2>
            <p className="text-[13px] font-normal text-gray-400 pr-3">
              Only admins can manage everything
            </p>
          </div>
        </div>
        <div
          className={`w-full border ring-1 p-3 h-[70px] bg-gray-100 ring-gray-300 ${
            selectedAccess === "specific" && "outline-none ring-1 ring-blue-500"
          } rounded-md flex justify-between items-center gap-1`}
          onClick={() => setSelectedAccess("specific")}
        >
          <span className="w-[10%]">
            <TbUsers className="w-6 h-6 " />
          </span>
          <div className="flex flex-col w-[90%] items-left justify-between ">
            <h2 className="text-[15px] font-normal">Only to Specific people</h2>
            <p className="text-[13px] font-normal text-gray-400 pr-3">
              Only some specific people can also able to see it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
