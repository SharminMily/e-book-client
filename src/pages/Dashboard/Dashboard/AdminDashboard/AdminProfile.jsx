import { useEffect, useState } from "react";

import { FaCartPlus } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";
import useAuth from "../../../../hooks/useAuth";


const AdminProfile = () => {
  const { user } =  useAuth();

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("https://e-book-server.vercel.app/admin-stats")
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

      <div className="stats md:mt-16 grid lg:grid-cols-2 grid-cols-1 gap-8 justify-between items-center">

        <div className="stat place-items-center bg-indigo-300 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">My Book collections...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-3">
            <FaCartPlus className="text-2xl " /> {stats.books}
          </div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>

        <div className="stat place-items-center bg-orange-200 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">All users Update...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-4">
            <BiSolidDonateHeart className="text-2xl" /> {stats.users}
          </div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat place-items-center bg-orange-200 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">Payment update...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-4">
            <BiSolidDonateHeart className="text-2xl" /> {stats.payments}
          </div>
          <div className="stat-desc">↘︎ 60 (14%)</div>
        </div>
        
        <div className="stat place-items-center bg-indigo-300 rounded-lg md:p-6 p-1 shadow-lg shadow-slate-400">
          <div className="stat-title md:text-xl">
            Customer Review...</div>
          <div className="stat-value font-bold md:text-3xl flex items-center gap-1 py-3">
            <FaCartPlus className="text-2xl " /> {stats.reviews}
          </div>
          <div className="stat-desc">From January 1st to February 1st</div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminProfile;
// export default AdminProfile;