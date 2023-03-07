import { useState } from "react";
import {
  IoCloseOutline,
  IoFolderOutline,
  IoMenuOutline,
} from "react-icons/io5";

export default function Navbar() {
  const Links = [
    {
      key: 1,
      name: "Relevantes",
      link: "/relevantes",
    },
    {
      key: 2,
      name: "Recentes",
      link: "/recentes",
    },
    {
      key: 3,
      name: "Login",
      link: "/login",
    },
    {
      key: 4,
      name: "Cadastrar",
      link: "/cadastrar",
    },
  ];

  const LinksLogged = [
    {
      key: 1,
      name: "Relevantes",
      link: "/relevantes",
    },
    {
      key: 2,
      name: "Recentes",
      link: "/recentes",
    },
    {
      key: 3,
      name: "Perfil",
      link: "/perfil",
    },
  ];

  const [open, setOpen] = useState(true);

  const isAuthenticated =
    localStorage.getItem("accessToken");

  return (
    <>
      {isAuthenticated ? (
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
            <div className="font-bold text-xl cursor-pointer flex items-center text-gray-100">
              <span className="text-3xl text-indigo-600 mr-4">
                <IoFolderOutline />
              </span>
              <a
                href="/"
                className="text-gray-50 hover:text-gray-500 duration-500"
              >
                NewsDev
              </a>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-4 text-gray-50 cursor-pointer md:hidden"
            >
              {open ? (
                <IoMenuOutline />
              ) : (
                <IoCloseOutline />
              )}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-[-490px]" : "top-15 opacity-100"
              } md:opacity-100`}
            >
              {Links.map((link) => (
                <li
                  key={link.key}
                  className="md:ml-8 text-l md:my-0 my-7"
                >
                  <a
                    href={link.link}
                    className="text-gray-50 hover:text-gray-500 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
            <div className="font-bold text-xl cursor-pointer flex items-center text-gray-100">
              <span className="text-3xl text-indigo-600 mr-4">
                <IoFolderOutline />
              </span>
              <a
                href="/"
                className="text-gray-50 hover:text-gray-500 duration-500"
              >
                NewsDev
              </a>
            </div>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-4 text-gray-50 cursor-pointer md:hidden"
            >
              {open ? (
                <IoMenuOutline />
              ) : (
                <IoCloseOutline />
              )}
            </div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-[-490px]" : "top-15 opacity-100"
              } md:opacity-100`}
            >
              {LinksLogged.map((link) => (
                <li
                  key={link.key}
                  className="md:ml-8 text-l md:my-0 my-7"
                >
                  <a
                    href={link.link}
                    className="text-gray-50 hover:text-gray-500 duration-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
