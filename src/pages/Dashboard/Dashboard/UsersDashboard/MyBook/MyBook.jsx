/* eslint-disable no-unused-vars */
import useCart from "../../../../../hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import useAxiosSecure from "../../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyBook = () => {
  const [cart,  refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + Math.floor(item.price), 0);
  const axiosSecure = useAxiosSecure()


  const handleDelete = id => {
    axiosSecure.delete(`/carts/${id}`)
    .then(res => {
        if(res.data.deletedCount > 0){
            // 
            refetch();
            toast.success('Deleted Successfully !')
        }
    })
  }

  return (
    <div>
        <h1 className="uppercase text-center my-4 font-bold text-3xl">My Book</h1>
        {
        cart.map((item, index) =>  <div key={item._id} className="flex justify-center items-center gap-8 mt-2 border bg-indigo-100">
            
        <div className="w-1/3 h-full">
          <img className="h-full w-full"
            src={item.image}
            alt=""
          />
        </div>
        <div className="w-2/3 flex  items-center gap-20 ">
          <div>
            <h1 className="font-semibold md:text-xl">{item.bookName}</h1>
            <h1 className="flex md:text-xl text-yellow-500">
            <TiStarFullOutline />
            <TiStarFullOutline />
            <TiStarFullOutline />
             <TiStarHalfOutline />
            </h1>
            <h1 className="text-pink-500 font-semibold md:text-lg">Price: ${item.price}</h1>
          </div>
          <div>
          <p onClick={() => handleDelete(item._id)}  className="text-2xl text-red-500">
            <MdDeleteForever className="text-4xl border border-red-500 rounded-full p-1 hover:bg-gray-300"/>
          </p>
        </div>
        </div>
       
      </div>)
      }

     

      <div className="border-t-2 flex items-center border-gray-400 mt-4">
      <div className="w-1/3 md:text-xl font-semibold">Total Price = </div>
      <div className="w-2/3 text-2xl text-pink-500 font-bold px-8">${totalPrice}</div>       
      </div>
      <div className="flex justify-center items-center mt-6">
       { cart.length ? <Link to="/dashboard/payment"><button disabled={!cart.length} className="py-2 px-6 bg-indigo-200 text-xl font-semibold rounded-lg hover:bg-indigo-300">Pay</button></Link> :
       <button disabled className="py-2 px-6 bg-indigo-200 text-xl font-semibold rounded-lg hover:bg-indigo-300">Pay</button>
       }
        </div>
    </div>
  );
};

export default MyBook;
