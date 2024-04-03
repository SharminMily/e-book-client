/* eslint-disable no-unused-vars */
import toast from "react-hot-toast";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import ReactStars from "react-rating-stars-component";

const BookDetails = () => {
  const book = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  // toast.success('Successfully added!')
  const { _id, bookName, details, image, price, rating, category, title } =
    book;
  // console.log(book)

  const handleAddCart = (book) => {
    // console.log(book)
    if (user && user.email) {
      //send car item add to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        bookName,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          toast.success(` ${category}, Successfully added!`);
        }
      });
      // card refetch
      refetch();
    } else {
      //
      toast.error("user not Login.");
      // login page
      navigate("/login", { state: { from: location } });
    }
  };

  const ratingChanged = (newRating) => {
    // console.log(newRating);
  };

  return (
    <div className="my-16">
      <div className="md:flex justify-center gap-4">

        <div className="flex justify-center">
          <img className="w-60 h-72 rounded-lg" src={image} alt="" />
        </div>

        <div className="flex mt-4 justify-center items-center">
          <div>            
            <div className=" flex justify-center">
              <h1 className="text-center font-semibold mb-2 text-xl w-80 uppercase rounded-lg">
                {category}
              </h1>
            </div>
            <div className=" flex justify-center">
              <h1 className="text-center w-80 font- mt-4 pb-2 text-2xl">
                {bookName}
              </h1>
            </div>
            <div className=" flex justify-center">
              <h1 className="text-center font-semibold mb-2 text-xl w-80 uppercase rounded-lg">
                $ {price}
              </h1>
            </div>
            <h1 className="flex justify-center font-bold mb-2 text-xl text-yellow-600">
              <ReactStars
                onChange={ratingChanged}
                style={{ maxWidth: 180 }}
                size={24}
                value={book.rating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </h1>

            <div className="flex justify-center gap-4">
            <button
              onClick={handleAddCart}
              className=" bg-indigo-300 rounded-lg p-2 mt-2 px-4 font-semibold"
            >
              ADD
            </button>
           <Link to = "/books">
           <button             
              className=" outline outline-indigo-300 bg-white px-4 rounded-lg p-2 mt-2 font-semibold"
            >
              BACK
            </button>
            </Link>
          </div>
          </div>

        

        </div>

      </div>

      <div className="">
        {/* 3 step */}
        <div className="md:flex justify-between items-center gap-6 md:mx-20 mx-10 mt-10 ">
            <div className="bg-emerald-200 w-full text-center rounded-lg py-2 mt-2">
              <p className="text-xl font-bold">130 </p>
              <span className="text-lg">page</span>
            </div>
            <div  className="bg-indigo-300 w-full text-center rounded-lg py-2 mt-2">
              <p className="text-xl font-bold">English </p>
              <span className="text-lg">Language</span>
            </div>
            <div  className="bg-emerald-300 w-full text-center rounded-lg py-2 mt-2">
              <p className="text-xl font-bold">2023 </p>
              <span className="text-lg">release</span>
            </div>
          </div>

          <div>
            <div className="flex justify-center mt-6 mx-8">
              <p className="w-full text-center">
                {title}. <br></br> {details}
              </p>
            </div>
            <div className="flex justify-center ">             
            </div>
          </div>
      </div>
    </div>
  );
};

export default BookDetails;
