import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="p-80 flex justify-center">
            <div className="">
            <h1 className="text-center text-5xl text-red-600 font-bold ">404</h1>
          <Link to='/'>
          <button className="my-6 py-2 px-3 bg-indigo-300 rounded-lg">Go back Home</button>
          </Link>
            </div>
        </div>
    );
};

export default Error;