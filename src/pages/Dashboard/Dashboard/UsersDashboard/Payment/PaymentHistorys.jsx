import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../../hooks/useAuth";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
  } from "@nextui-org/react";

const PaymentHistorys = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });

  return <div>
     <h2 className="text-3xl">Total Payments
     </h2>

     <div>
        <Table
          className="bg-indigo-100 w-full"
          aria-label="Example collection table"
        >
          <TableHeader className="bg-indigo-100">
            <TableColumn className="bg-indigo-100">Transaction Id</TableColumn>
            <TableColumn className="bg-indigo-100">STATUS</TableColumn>
            <TableColumn className="bg-indigo-100">price</TableColumn>
          </TableHeader>
          <TableBody>
            {payments.map((payment) => (
              <TableRow className="border-b-1 border-gray-300" key={payment._id}>
                <TableCell className="lg:text-xl">{payment.transactionId}</TableCell>             
                <TableCell className="lg:text-xl text-green-500 font-semibold">{payment.status}</TableCell>             
                <TableCell className="lg:text-xl font-semibold">${payment.price}</TableCell>             
                
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
  </div>;
};

export default PaymentHistorys;
