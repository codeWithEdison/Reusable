import React, { Component } from "react";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoMdLogIn } from "react-icons/io";
// import { Auth } from "../../actions";
import { Link } from "react-router-dom";
import { TbArrowsDiagonalMinimize2 } from "react-icons/tb";
import { RiLockPasswordLine } from "react-icons/ri";
import TopNav from "../LoginTopNav/TopNav";
import { useState, useEffect } from "react";

interface Auth {
  isAuthenticated?: boolean;
  user: {
    user_info: {
      full_name: string;
      phone_numbers?: string;
    };
    role: {
      role: string;
    };
  };
}

interface NavBarProps {
  auth: Auth;
  FC_Logout: () => void;
  setOpenVav: (status: boolean) => void;
  sideNavbarStatus: boolean;
}

const NavBar: React.FC<NavBarProps> = ({
  auth,
  FC_Logout,
  setOpenVav,
  sideNavbarStatus,
}) => {
  const [viewUser, setViewUser] = useState(false);

  useEffect(() => {
    // componentDidMount logic can go here
  }, []);

  return (
    <div>
      <div className="bg-white text-black py-1 pl-3 fixed top-0 right-0 left-0 z-50 border-b shadow-sm">
        <div>
          <div className="flex flex-row items-center justify-between gap-3">
            <div className="flex flex-row items-center gap-2">
              <div className="my-2 flex flex-row items-center gap-3">
                <div
                  onClick={() => setOpenVav(!sideNavbarStatus)}
                  className="bg-primary-100 rounded-md p-2 cursor-pointer hover:bg-primary-300"
                >
                  {sideNavbarStatus ? (
                    <TbArrowsDiagonalMinimize2 className="text-2xl text-primary-800 animate__animated animate__zoomIn" />
                  ) : (
                    <AiOutlineMenu className="text-2xl text-primary-800 animate__animated animate__fadeIn" />
                  )}
                </div>
                <div className="">
                  <div className="flex flex-row items-center gap-2 text-lg rounded-full w-max pr-3 cursor-pointer group">
                    <span className="text-gray-700 font-bold">
                      ASSET MANAGEMENT SYSTEM
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2 justify-end mr-2">
              {/* User icon */}
              <div className="relative">
                <div
                  className="flex flex-row items-center cursor-pointer group bg-primary-blue-white hover:bg-primary-100 py-2 pl-4 pr-1 rounded-md"
                  onClick={() => setViewUser(!viewUser)}
                >
                  <div
                    className={`rounded-full flex items-center justify-center mr-2 bg-gray-400 group-hover:bg-primary-800 text-white h-8 w-8  cursor-pointer`}
                  >
                    <FaUserCircle className="text-3xl animate__animated animate__fadeIn" />
                  </div>
                  <div className="text-sm pr-3 group-hover:text-primary-800">
                    {auth.user?.user_info.full_name}
                  </div>

                  <div className="ml-1">
                    <IoIosArrowDown className="text-xl text-my-blue group-hover:text-primary-800" />
                  </div>
                </div>
                {viewUser === true && (
                  <div className="h-full overflow-y-auto">
                    <div
                      onClick={() => setViewUser(false)}
                      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-60"
                      title="Click here to close"
                    ></div>
                    <div className="absolute right-0 pt-0 top-1">
                      <div className="border border-gray-300 bg-white p-3 rounded-md w-64 shadow-xl animate__animated animate__fadeInRight animate__faster">
                        <div className="flex flex-col items-center justify-center w-full gap-0">
                          <div className="mt-3">
                            <div className="rounded-full text-gray-400 flex items-center justify-center h-24 w-24 overflow-hidden">
                              <FaUserCircle className="text-8xl" />
                            </div>
                          </div>
                          <div className="font-bold text-center text-gray-500 mt-2">
                            <span>
                              {auth.user?.user_info.full_name}
                            </span>
                          </div>
                          <div className="font-bold text-left text-sm flex flex-row items-center gap-2">
                            <div>
                              <IoMdLogIn className="text-xl text-primary-800" />
                            </div>
                            <span>
                              {
                                auth.user?.user_info
                                  .phone_numbers
                              }
                            </span>
                          </div>
                          <div className="font-bold text-center mb-4 text-white bg-primary-700 rounded-md px-2 text-xs">
                            <span className="font-normal">
                              {auth.user?.role?.role}
                            </span>
                          </div>
                        </div>

                        <div className="mt-5 text-black">
                          <div className="text-sm text-gray-600 mt-5 mb-2">
                            ACTION MENU
                          </div>

                          <div className="flex gap-2 items-center mb-2 bg-gray-50 rounded-md px-2 py-1 cursor-pointer hover:bg-primary-700 hover:text-my-blue hover:bg-blue-white group">
                            <FaUserCircle className="text-xl text-primary-700 group hover:text-my-blue" />
                            <div>User Profile</div>
                          </div>

                          <div className=" flex gap-2 mb-2 items-center  flex-row  bg-gray-50 rounded-md px-2 py-1 cursor-pointer hover:bg-primary-700 hover:text-my-blue group">
                            <RiLockPasswordLine className="text-xl text-red-700 group-hover:text-my-blue" />
                            <div>Change password</div>
                          </div>

                          <div
                            onClick={() => {
                              setViewUser(false);
                              FC_Logout();
                            }}
                            className="flex flex-row items-center gap-2 border border-yellow-700 rounded-md px-2 py-1 cursor-pointer hover:bg-yellow-700 hover:text-white group mt-2"
                          >
                            <div>
                              <AiOutlineLogout className="text-xl text-gray-500 group-hover:text-white" />
                            </div>
                            <div>Sign out</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
