import React from "react";
import { FiLoader } from "react-icons/fi";

const DashboardLoading = () => {
  return (
    <div>
      <div className="h-[600px] bg-white overflow-y-hidden pt-3  rounded-md animate__animated animate__zoomIn">
        <div className="grid grid-cols-12 h-full ">
          <div className="col-span-12 p-2 h-full">
            <div className="grid grid-cols-12 gap-3 h-full">
              <div className="col-span-12 w-full flex flex-row items-center gap-3 pb-8">
                <div className="bg-gray-200 rounded-full h-12 w-12 animate-pulse"></div>
                <div className="bg-gray-200 rounded-full w-1/2 h-12 animate-pulse"></div>
              </div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse animate"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-3 bg-gray-200 rounded-2xl w-full h-20 animate-pulse"></div>
              <div className="col-span-6 bg-gray-200 rounded-2xl w-full h-60 animate-pulse"></div>
              <div className="col-span-6 bg-gray-200 rounded-2xl w-full h-60 animate-pulse"></div>
              <div className="col-span-12 bg-white rounded w-full h-screen animate-pulse">
                <div className="w-full flex flex-col items-center justify-center ga-5">
                  <div></div>
                  <div className="fixed top-0 bottom-0 text-center text-3xl font-extrabold text-gray-600 animate-pulse flex flex-row items-center gap-3">
                    <div>
                      <FiLoader className="text-5xl animate-spin text-gray-700" />
                    </div>
                    <span>We are still working on it...</span>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLoading;
