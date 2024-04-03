import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

import { FaUserFriends } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import toast from "react-hot-toast";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = (users) => {
    axiosSecure.patch(`/users/admin/${users._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Admin added succesfully!");
      }
    });
  };

  //   delete
  const handleDelete = (id) => {
    axiosSecure.delete(`/users/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        //
        refetch();
        toast.success("Deleted Successfully !");
      }
    });
  };

  return (
    <div className="my-4">
      <div className="flex justify-evenly">
        <h1 className="md:text-2xl">All User</h1>
        <h1 className="md:text-2xl">Total User: {users.length}</h1>
      </div>

      <div>
        <Table
          className="bg-indigo-100 w-full"
          aria-label="Example collection table"
        >
          <TableHeader className="bg-indigo-100">
            <TableColumn className="bg-indigo-100">ROLE</TableColumn>
            <TableColumn className="bg-indigo-100">STATUS</TableColumn>
            <TableColumn className="bg-indigo-100">Delete</TableColumn>
          </TableHeader>
          <TableBody>
            {users.map((users) => (
              <TableRow className="border-b-1 border-gray-300" key={users._id}>
                <TableCell className="lg:text-xl">{users.email}</TableCell>

               
                {users.role === "admin" ? (
                     <TableCell >
                     Admin
                   </TableCell>
                ) : (
                  <TableCell onClick={() => handleMakeAdmin(users)}>
                   <FaUserFriends />
                  </TableCell>
                )}

                <TableCell
                  onClick={() => handleDelete(users._id)}
                  className="lg:text-xl"
                >
                  <RiDeleteBin5Fill className="lg:text-3xl lg:p-1 text-xl p-0.5 text-red-600 rounded-full border-red-600 border " />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllUser;
