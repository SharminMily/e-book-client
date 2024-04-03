/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {user, signIn} = useContext(AuthContext)
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const handleGoogle = () => {  
    googleSignIn()
    .then(result => {
        // console.log(result.user);
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
            image: result.user?.photoURL
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
              // navigate(location?.state? location.state : '/')
        }) 
    })
  }
  const onSubmit = (data) => {
    // console.log(data);
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user)
      toast.success('login Successfully !')
     })
     navigate(from, { replace: true })
  };

  return (
    <div className="mb-32 mt- p-52">
      <h1 className="text-center text-3xl font-semibold mb-8"> Please login</h1>

      <div className="md:flex justify-center items-center gap-10 mx-20 md:mx-4">
        <div className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <div>
              <div className="mb-2 block">
                <label htmlFor="email1" value="Your email" />
                Your Email
              </div>
              <Input
                {...register("email", { required: true })}               
                type="email"
                placeholder="@gmail.com"             
                className="md:w-80 border-2 border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <label htmlFor="password1" value="" />
                Your Password
              </div>
              <Input
                {...register("password", { required: true })}              
                type="password"
                placeholder="password"
               
                className="md:w-80 border-2 border-gray-300 rounded-xl"
              />
            </div>

            <button
              className="bg-indigo-200  font-semibold py-2 rounded-xl hover:bg-slate-300"
              type="submit"
            >
              Submit
            </button>
          </form>

          <p className="text-center mt-">
            Create a new Account -{" "}
            <Link to="/signUp" className="text-base">
              SignUp{" "}
            </Link>
          </p>

          <button  onClick={() => handleGoogle(googleSignIn)}
              className="bg-indigo-200  font-semibold py-2 rounded-xl hover:bg-slate-300"
             
            >
             google
            </button>
         
        </div>

        <div className="">
          <img
            className="w-full md:h-64"
            src="https://i.ibb.co/G3pR0Tf/200-gif-cid-dda24d506ht0vnqfzuuegcz67tzsykn0c210nc9xfejvjj16-ep-v1-gifs-gif-Id-rid-200.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
