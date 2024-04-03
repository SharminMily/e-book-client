import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


import useBook from "../../../../hooks/useBook";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Managebook = () => {
  const [book, refetch] = useBook();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    axiosSecure.delete(`/
    books/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        //
        refetch();
        toast.success("Deleted Successfully !");
      }
    });
  };


  return (
    <div>
      

      <div className="">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-indigo-200 font-semibold w-80 gap-0 ">
            <tr className="">
              <th>#</th>
              <th>Image</th>
              <th>book Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="mt-4">
            {book.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className=""><div className="flex justify-center items-center">{item.category}</div></td>
                <td className=""><div className="flex items-center justify-center">${item.price}</div></td>

                <td className="">
                  <Link to={`/dashboard/updatebook/${item._id}`}>
                   <div className="flex justify-center items-center">
                   <button className="btn btn-ghost btn-base bg-indigo-200">
                      <FaEdit
                        className="m-1 "
                      ></FaEdit>
                    </button>
                   </div>
                  </Link>
                </td>

                <td>
                  <div className="flex justify-center items-center">
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-500 text-2xl"></FaTrashAlt>
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Managebook;
// export default ManageBook;
