import { useEffect, useState } from "react";

import { FaCartPlus } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import useAuth from "../../../../../hooks/useAuth";

const UserHome = () => {
  const { user } =  useAuth();

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("https://e-book-server.vercel.app/user-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  // console.log(stats);
  return (
    <div>
      <div className="my-4 md:text-4xl font-semibold text-slate-600">
        <span className="my-4 text-gray-500">Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </div>

      <div className="stats md:mt-16 grid md:grid-cols-1 grid-cols-1 gap-8 justify-between items-center">

        <div className="stat place-items-center bg-indigo-300 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">My Book collections...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-3">
            <FaCartPlus className="text-2xl " /> {stats.cart}
          </div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-orange-200 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">My Old Book Update...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-4">
            <BiSolidDonateHeart className="text-2xl" /> {stats.myDonation}
          </div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;