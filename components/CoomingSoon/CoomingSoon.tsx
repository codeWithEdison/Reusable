import React from "react";
import { FiLoader, FiUser } from "react-icons/fi";
import { RiUserLine } from "react-icons/ri";


const CoomingSoon = () => {
  return (
   <div className=" h-full  ">
    <div className=" h-full justify-center items-center flex gap-4 flex-col animate__animated  animate__zoomIn animate__fast ">
      <div className=" h-10 bg-white rounded-xl  animate__rollIn  animate__infinite animate__slower w-96"></div>
      <div className=" h-10 bg-white rounded-xl  animate__rollIn  animate__infinite animate__slower  w-[550px]"></div>
      <div className=" h-10 bg-white rounded-xl  animate__rollIn  animate__infinite animate__slower  w-[700px]"></div>
      <div className=" h-10 bg-white rounded-xl  animate__rollIn  animate__infinite animate__slower  w-[550px]"></div>
      <div className=" h-10 bg-white rounded-xl  animate__rollIn  animate__infinite animate__slower w-96"></div>
    </div>
    <div>

    </div>
<div className="col-span-8 bg-gray-200 rounded-lg  w-full  animate-pulse">
<div className="w-full flex flex-col items-center justify-center ga-5">
  {/* <div></div> */}
  <div className=" animate__animated animate__slower animate__zoomIn fixed top-0 bottom-0 justify-center  text-center text-3xl font-extrabold text-gray-600  flex flex-col items-center gap-3  p-6  bg-transparent  mt-20 ">
    <div className="flex items-center  w-48 h-48 bg-white  rounded-full justify-center">
      <RiUserLine className=" text-9xl  text-gray-700" />

    </div>
    <span className=" animate animate__zoomIn animate__slower text-xl ">
      we are still working on it <span className=" animate__animated animate__jello animate__slower"> ....</span></span>
  </div>


</div>
</div>
   </div>
  );
};

export default CoomingSoon;

