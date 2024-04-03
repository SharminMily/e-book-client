import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useContext } from "react";
import { AuthContext } from "./../../../provider/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";


const Header = () => {
  const { user, logOut ,} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const handleClick = (event) => {
    event.preventDefault();
    // Handle dropdown menu opening logic here
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
      
  };

  const menuItems = [
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/books"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Books
        </NavLink>
      </li>

      {
         isAdmin ? <>

<li>
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Dashboard
        </NavLink>
      </li>
         </> 
         :
         <>
         <li>
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Dashboard
        </NavLink>
      </li>
         </>
      }
{/*    
         <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          Dashboard
        </NavLink>
      </li> */}


      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
              : " font-semibold text-base hover:text-gray-600"
          }
        >
          About
        </NavLink>
      </li>
    </>,
  ];

  return (
    <div className="bg-slate-100">
      <Navbar
        disableAnimation
        isBordered
        className="max-w-screen-xl mx-auto bg-slate-100"
      >
        <NavbarContent className="sm:hidden " justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarBrand className="flex gap-2">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.ibb.co/Bnx6RGT/photo-1541697418880-71a2ccd305a7-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg"
            alt=""
          />
          <p className="text-xl font-bold">E-Book</p>
        </NavbarBrand>

        <NavbarContent
          className="sm:hidden pr-3"
          justify="center"
        ></NavbarContent>

        <NavbarContent className="hidden sm:flex gap-8 mx-0" justify="center">
          {menuItems}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>

            {
              user?.email ? (
                <div className="flex items-center gap-4">
                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    <Avatar
                      isBordered
                      as="button"
                      onClick={handleClick}
                      className="transition-transform"
                      src={user?.photoURL}
                    />
                  </DropdownTrigger>
                  <DropdownMenu
                    className="bg-slate-100 rounded-xl border"
                    aria-label="Profile Actions"
                    variant="flat"
                  >
                    <DropdownItem key="profile" >
                      <p className="font-semibold uppercase"> {user?.displayName}</p>
                      
                    </DropdownItem>
                    <DropdownItem key="settings">{user?.email}</DropdownItem>

                      <DropdownItem
                      onClick={handleLogOut}
                      key="logout"
                      color="danger"
                    >
                      Log Out
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
             </div>
             )
              :
               (
                <NavLink to="/login">
              <Button
                color="warning"
                variant="flat"
                className="bg-indigo-200 text-black"
              >
                Login
              </Button>             
            </NavLink>
               )
            }
          

           


          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>{menuItems}</NavbarMenu>
      </Navbar>
    </div>
  );
};

export default Header;
