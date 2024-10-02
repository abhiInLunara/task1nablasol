import React, { useState } from "react";
import Step1 from "../component/Step1";
import Step2 from "../component/Step2";
import Step3 from "../component/Step3";
import Step4 from "../component/Step4";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaLessThan } from "react-icons/fa6";

const CreateProject = () => {
  const [formData, setFormData] = useState({
    projectName: "",
    clientName: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalPages = 4;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const cureentWindow = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return <Step3 formData={formData} handleChange={handleChange} />;
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} />;
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("form data saved");
  };
  return (
    <div className="w-screen h-screen flex  items-center justify-center">
      <div className="w-[80%] md:w-[600px] relative rounded-md pl-12 pr-12  shadow-md border border-b-2 flex-col flex pt-10">
        <span className="absolute right-2 top-3">
          <Link to="/">
            <RxCross2 size={18} />
          </Link>
        </span>
        {cureentWindow()}
        <div className="w-full flex  justify-center items-center relative">
          {currentStep > 1 ? (
            <button className="absolute left-0" onClick={prevStep}>
              <FaLessThan className="text-gray-400 inline  h-3 w-3" />
              <span className="text-gray-400"> Back</span>
            </button>
          ) : (
            <Link to="/" className="absolute left-0">
              <FaLessThan className="text-gray-400 inline  h-3 w-3" />
              <span className="text-gray-400"> Back</span>
            </Link>
          )}

          {(currentStep > 1 && currentStep) < 4 && (
            <button
              className="bg-blue-400 text-white w-fit  text-noraml px-6 py-1 rounded-md"
              onClick={nextStep}
            >
              Next
            </button>
          )}
          {currentStep === 4 && (
            <button
              className="bg-blue-400 text-white w-fit  text-noraml px-6 py-1 rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          )}
        </div>

        {/* paginations dots */}
        <div className="flex gap-1 justify-center items-center p-3 my-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`h-2  rounded-full cursor-pointer ${
                currentStep === index + 1
                  ? "bg-gray-500 w-4 "
                  : "bg-gray-300 w-2"
              }`}
              onClick={() => setCurrentStep(index + 1)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
