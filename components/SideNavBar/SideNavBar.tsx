


import React, { Component, Fragment } from "react";
import { MdClose } from "react-icons/md";
import UR_ICON from "../../assets/images/UR_logo.png";
import {AUTHENTICATED_MENUS, MENU_TYPE,menus_categories,} from "../../config/AppNavigations";
import NavItem from "./NavItem";
import { isAccessAuthorized } from "../../config/userAccess";

interface SideNavBarProps {
  auth: Auth;
  setOpenVav: (status: boolean) => void;
  sideNavbarStatus: boolean;
}
interface SideNavBarState {
  selectedMenuLink: string;
}
interface Auth{ 
  isAuthenticated?: boolean;
  user:{
    user_info:{
      full_name: string;
      phone_numbers?: string;
  };
  role:{
    role:string;
  }
}
}

export class SideNavBar extends Component<SideNavBarProps, SideNavBarState> {
  constructor(props: SideNavBarProps) {
    super(props);
    this.state = {
      selectedMenuLink: "",
    };
  }
  render() {
    const menus = AUTHENTICATED_MENUS;
    return (
      <Fragment>
        <div className="fixed w-full md:w-64 bg-white top-16 bottom-0 left-0 pr-3  right-5 transition overflow-y-auto animate__animated animate__fadeInLeft animate__faster">
          <div className="flex items-center justify-center px-5 mt-4 py-4">
            <img
              src={UR_ICON}
              alt="Rwanda Basic Education Board"
              className="hidden md:block w-32"
            />
          </div>
          <div className="flex md:hidden flex-row items-center justify-between gap-2 mx-2">
            <span className="text-lg font-bold">Explore Menus</span>
            <div>
              <div
                onClick={() =>
                  this.props.setOpenVav(!this.props.sideNavbarStatus)
                }
                className="h-10 w-10 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center cursor-pointer"
              >
                <MdClose className="text-2xl text-red-700" />
              </div>
            </div>
          </div>
          <div className="flex flex-col mb-3 mt-5 ">
            {menus_categories()
              .filter(
                (itm) =>
                  menus.find((test) => test.menu_type === itm.key) !== undefined
              )
              .map((item, k) => (
                <div key={k + 1} className="py-0">
                  {item.key === MENU_TYPE.PROFILE &&
                    menus.filter((itm) => itm.menu_type === item.key).length >
                      0 && (
                      <div className="text-gray-400 uppercase text-xs px-5 mb-1 mt-4">
                        {item.title}
                      </div>
                    )}
                  {item.key === MENU_TYPE.ACTIVITIES &&
                    menus.filter((itm) => itm.menu_type === item.key).length >
                      0 && (
                      <div className="text-gray-400 uppercase text-xs px-5 mb-1 mt-4 ">
                        {item.title}
                      </div>
                    )}
                  {menus
                    .filter((itm) => itm.menu_type === item.key)
                    .filter(
                      (itm) =>
                        itm.access === "all" ||
                        isAccessAuthorized(this.props.auth, itm.access) === true
                    )

                    .map((nav, i) => (
                      <NavItem
                        key={i + 1}
                        nav={nav}
                        selectedMenuLink={this.state.selectedMenuLink}
                        setSelectedMenu={(selectedMenuLink: string) =>
                          this.setState({
                            selectedMenuLink:
                              selectedMenuLink === this.state.selectedMenuLink
                                ? ""
                                : selectedMenuLink,
                          })
                        }
                        auth={this.props.auth}
                        updateSelectedMenu={(selectedMenuLink: string) =>
                          this.setState({ selectedMenuLink })
                        }
                      />

                    ))}
                </div>
              ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SideNavBar;

