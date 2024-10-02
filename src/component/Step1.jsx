import React, { useState } from "react";

const Step1 = ({ handleChange, formData }) => {
  const [options, setOptions] = useState([
    "abhi",
    "razika",
    "vaibhav",
    "gangadharan",
  ]);
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center">
      <h1 className="text-center  text-2xl font-semibold">Create a project</h1>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="projectName" className="text-[17px] font-[700]">
            Project Name
          </label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
            type="text"
            name="projectName"
            placeholder="Enter project name here"
            id="projectName"
          />
        </div>
        <div className="w-full flex ">
          <label htmlFor="client" className="text-[17px] font-[700]">
            Client
          </label>
          <div className="w-full">
            <select
              className="w-full h-full border ring-1 p-2 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md"
              id="client"
              // value={formData.client}
              onChange={handleChange}
            >
              <option
                value={""}
                disabled
                className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md"
              >
                select employee
              </option>
              {options.map((option, index) => (
                <option
                  className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md"
                  key={index}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            or
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="dates" className="text-[17px] font-[700]">
            Dates
          </label>
          <div>
            <input
              className="w-1/2 h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
              type="date"
              name="dates"
              placeholder="Enter project name here"
              id="dates"
              onChange={handleChange}
            />
            <input
              className="w-1/2 h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
              type="date"
              name="dates"
              placeholder="Enter project name here"
              id="dates"
              onChange={handleChange}
            />
          </div>
          <select></select>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="notes" className="text-[17px] font-[700]">
            Notes
          </label>
          <input
            className="w-full h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
            type="text"
            name="notes"
            placeholder="Enter project name here"
            id="notes"
            onChange={handleChange}
          />
          <select></select>
        </div>
      </div>
    </div>
  );
};

export default Step1;
