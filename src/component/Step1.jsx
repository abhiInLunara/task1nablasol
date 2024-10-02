import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const Step1 = ({ handleChange, formData }) => {
  const [options, setOptions] = useState([
    "abhi",
    "razika",
    "vaibhav",
    "gangadharan",
  ]);
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center mb-4">
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
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name here"
            id="projectName"
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="client" className="text-[17px] font-[700]">
            Client
          </label>
          <div className="flex justify-between items-center">
            <div className="w-[55%]">
              <select
                className="w-full h-full border ring-1 p-2 ring-gray-300 focus:outline-none focus:ring-1  focus:ring-blue-300 rounded-md"
                id="client"
                name="clientName"
                // value={formData.client}
                onChange={handleChange}
              >
                <option className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded-md">
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
            <div className="w-[40%] flex justify-between items-center">
              or
              <span className="border w-[85%] ring-1 p-1 h-9 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md flex items-center justify-between">
                <FaPlus />
                <input
                  className="w-[80%] outline-none border-none self-end focus:border-none"
                  type="text"
                  name="newClient"
                  placeholder="New Client"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="dates" className="text-[17px] font-[700]">
            Dates
          </label>
          <div className="flex justify-between gap-5">
            <input
              className="w-1/2 h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
              type="date"
              name="startDate"
              value={formData.startDate}
              placeholder="Enter project name here"
              id="dates"
              onChange={handleChange}
            />
            <input
              className="w-1/2 h-9 border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
              type="date"
              name="endDate"
              placeholder="03/34/2000"
              // id="dates"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <label htmlFor="notes" className="text-[17px] font-[700]">
            Notes
          </label>
          <textarea
            className="w-full  border ring-1 p-3 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-100 rounded-md"
            type="text"
            name="notes"
            value={formData.notes}
            placeholder="Optional"
            id="notes"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
