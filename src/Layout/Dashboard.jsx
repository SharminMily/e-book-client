import { NavLink, Outlet } from "react-router-dom";
import { IoBook} from "react-icons/io5";
import { Badge, Button } from "@nextui-org/react";
import { BsCartCheckFill } from "react-icons/bs";
import useCart from "../hooks/useCart";
import { FaUserFriends } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { MdAdd } from "react-icons/md";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const [cart] = useCart();
  const { user } = useAuth();

  const [isAdmin] = useAdmin();

  return (
    <div className="md:flex bg-">
      <div className="md:w-64 md:min-h-screen bg-indigo-200 px-2 md:border-b-none md:rounded-b-none  border-b-2 rounded-b-3xl">
        {isAdmin ? (
          <>
            {/* Admin */}
            <ul>
              <li className="flex items-center gap-2 pb-3 pt-4 p-2 ">
                {/* <IoHome /> */}
                <NavLink to="/dashboard/AdminHome">
                  {user ? (
                    <div className="flex flex-col">
                      <img
                        className="rounded-full w-20"
                        src={
                          user.photoURL ||
                          "https://i.ibb.co/3TdV40T/Screenshot-1356.png"
                        }
                        alt=""
                      />{" "}
                      <h1 className=" text-sm">{user.email}</h1>
                    </div>
                  ) : (
                    <div>
                      <img
                        className="rounded-full w-20"
                        src="https://i.ibb.co/3TdV40T/Screenshot-1356.png"
                        alt=""
                      />
                    </div>
                  )}
                </NavLink>
              </li>

              <li className="flex items-center gap-2 pb-3 mt-4 p-2">
                <IoBook />
                <NavLink
                  to="/dashboard/managebook"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  Manage Book
                </NavLink>
              </li>
              <li className="flex items-center gap-2 pb-3 mt-4 p-2">
                <MdAdd />
                <NavLink
                  to="/dashboard/addBook"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                 Add Book
                </NavLink>
              </li>
              <li className="flex items-center gap-2 pb-3 mt-4 p-2">
                <BsCartCheckFill  />
                <NavLink
                  to="/dashboard/order"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                 Order
                </NavLink>
              </li>
              <li className="flex items-center gap-2 pb-3 mt-4 p-2">
                <FaUserFriends />
                <NavLink
                  to="/dashboard/allUser"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  All Users
                </NavLink>
              </li>

            </ul>
          </>
        ) : (
          <>
            {/* user */}
            <ul>
              <li className="flex items-center gap-1 pb-3 pt-10 lg:pb-6 p-2.5">
                {/* <IoHome /> */}
                <NavLink to="/dashboard/userHome">
                  {user ? (
                    <div className="flex flex-col">
                      <img
                        className="rounded-full w-20 h-20"
                        src={
                          user.photoURL ||
                          "https://i.ibb.co/3TdV40T/Screenshot-1356.png"
                        }
                        alt=""
                      />{" "}
                      <h1 className=" text-sm">{user.email}</h1>
                    </div>
                  ) : (
                    <div>
                      <img
                        className="rounded-full w-20"
                        src="https://i.ibb.co/3TdV40T/Screenshot-1356.png"
                        alt=""
                      />
                    </div>
                  )}
                </NavLink>
              </li>

              <li className="flex items-center gap- pb-1 mt-2 p- lg:pb-2">
                <Badge
                  content={cart.length}
                  shape="circle"
                  color="danger"
                  className="mr-2"
                >
                  <Button
                    radius="full"
                    isIconOnly
                    aria-label="more than 99 notifications"
                    variant="light"
                  >
                    <BsCartCheckFill className="text-xl ml- -mt- " />
                  </Button>
                </Badge>
                <NavLink
                  to="/dashboard/myBook"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  My Book
                </NavLink>
              </li>

              <li className="flex items-center gap- pb-1 mt- p-2 gap-1 lg:pb-4">
                <BiSolidBadgeDollar className="font-bold text-black text-2xl" />
                <NavLink
                  to="/dashboard/payment"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  Payment{" "}
                </NavLink>
              </li>

              <li className="flex items-center gap- pb-1 mt- p-2 gap-1 lg:pb-4">
                <BiSolidBadgeDollar className="font-bold text-black text-2xl" />
                <NavLink
                  to="/dashboard/paymentHistorys"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  Payment Historys
                </NavLink>
              </li>
              <li className="flex items-center gap- pb-1 mt- p-2 lg:pb-4">
                <MdAdd className="font-bold text-black text-2xl" />
                <NavLink
                  to="/dashboard/addOldBook"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  Add Old Book{" "}
                </NavLink>
              </li>
              <li className="flex items-center gap-1 pb-1 mt-2 p-2 lg:pb-4">
                <IoBook className="font-bold text-l" />
                <NavLink
                  to="/dashboard/myOldBook"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  Old Book list
                </NavLink>
              </li>
              <li className="flex items-center gap- pb-1 mt-2 p-2">
                <MdAdd className="font-bold text-black text-2xl" />
                <NavLink
                  to="/dashboard/review"
                  className={({ isActive }) =>
                    isActive
                      ? " font-semibold text-base hover:text-gray-600 border-b-2 border-gray-700"
                      : " font-semibold text-base hover:text-gray-600"
                  }
                >
                  Review Add
                </NavLink>
              </li>
            </ul>
          </>
        )}

        {/* shared */}
        <div>
          <li className="flex items-center gap-4 pb-3 mt-0 p-2 font-semibold text-lg lg:pt-6">
            <NavLink to="/">- Home</NavLink>
          </li>
        </div>
      </div>

      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
