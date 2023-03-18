import prf1 from "../images/prf2.svg";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Groups2Icon from "@mui/icons-material/Groups2";
import SchoolIcon from "@mui/icons-material/School";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  const defaultClass =
    "border-black hover:text-custom_white h-full flex items-center";
  const activeClass =
    "border-black hover:text-custom_white h-full flex items-center";

  return (
    <>
      <div className="home flex  w-screen h-screen bg-custom_white">
        <div className="sidebar bg-gray-900 shadow-lg basis-1/5 text-white">
          <h1 className="flex justify-center font-bold mt-4 mb-12 text-2xl">
            <span className="text-custom_orng">Org</span>Connect
          </h1>
          <div className="profile flex flex-col items-center">
            <img
              src={prf1}
              alt="profile"
              className="sidebar_profile border-custom_white  bg-white shadow-md rounded-full"
            />
            <div className="flex w-full flex-col items-center my-4">
              <h1 className="text-xl font-semibold">Rohit Sekh</h1>
              <p className="mt-2 text-base ">State, India</p>
              <p className="p-2 my-7 font-main">
                Intro Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Odio officia et quod sapiente. Tempora ducimus adipisci
                voluptatem!
              </p>
            </div>
          </div>
        </div>
        <div className="main_body bg-custom_white basis-4/5 flex flex-col">
          <div className="__nav basis-1/12 flex drop-shadow-lg">
            <div className="nav_header  bg-custom_orng ">
              <div className="h-full ml-10 flex items-center gap-x-5 text-custom_black font-semibold ">
                <NavLink
                  to="/Home"
                  end
                  className={(isActive) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  <HomeRoundedIcon className="mr-1" />
                  Home
                </NavLink>
                <NavLink
                  to="/Home/Group"
                  end
                  className={(isActive) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  <Groups2Icon className="mr-1" />
                  Group
                </NavLink>
                <NavLink
                  to="/Home/Learn"
                  end
                  className={(isActive) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  <SchoolIcon className="mr-1" /> Learn
                </NavLink>
                <NavLink
                  to="/Home/Message"
                  end
                  className={(isActive) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  <MailIcon className="mr-1" />
                  Message
                </NavLink>
                <NavLink
                  to="/Home/Profile"
                  end
                  className={(isActive) =>
                    isActive ? activeClass : defaultClass
                  }
                >
                  <PersonIcon className="mr-1" />
                  Profile
                </NavLink>
              </div>
            </div>
            <div className="nav_side_header flex bg-custom_orng justify-around items-center">
              <input
                className="rounded-2xl border-2 border-black ml-5 px-3 py-1 font-semibold text-sm"
                type="text"
                name=""
                placeholder="search something"
              />
              <a to="home" className="hover:text-white font-semibold">
                <LogoutRoundedIcon /> logout
              </a>
            </div>
          </div>
          <div className="bg-gray-200 basis-11/12 flex ">
            <div className="body_header p-6">
              <form>
                <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                  <div class="flex items-center justify-between px-3 py-2 border-b ">
                    <div class="flex flex-wrap items-center  sm:divide-x ">
                      <div class="flex items-center space-x-1 sm:pr-4">
                        <button
                          type="button"
                          class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
                        >
                          <svg
                            aria-hidden="true"
                            class="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>

                          <span class="sr-only">Attach file</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="px-4 py-2 bg-white rounded-b-lg ">
                    <label for="editor" class="sr-only">
                      Publish post
                    </label>
                    <textarea
                      id="editor"
                      rows="8"
                      className="font-main block w-full text-sm font-medium text-gray-800 bg-white border-0 resize-none p-2"
                      placeholder="Write an article..."
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex font-main items-center px-5 py-2.5 text-sm font-semibold text-center text-black bg-custom_orng rounded-lg focus:ring-4 focus:ring-blue-200 hover:text-white"
                >
                  Post Story
                </button>
              </form>
              <div className="education mt-5">this </div>
            </div>

            <p className="flex self-center w-1 h-3/4 text-center bg-gray-400 rounded-md" />
            <div className="body_side_header ml-2 flex items-center justify-center">
              <h1 className="text-3xl">News Api</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}