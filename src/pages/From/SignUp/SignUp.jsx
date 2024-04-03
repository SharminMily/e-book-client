/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const  SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic()

  const {user, createUser, handleUpdateProfile} = useContext(AuthContext);

  const onSubmit = (data) => {

    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
      handleUpdateProfile(data.name, data.photoURL)
      .then(() => {
        const userInfo = {
          name : data.name,
          email: data.email,
          image: data.photoURL
        }
      
        axiosPublic.post('/users', userInfo)
        .then(res => {
          if(res.data.insertedId){
            // 
            console.log('user added database')
            reset();
            toast.success('Successfully sign in!')
            navigate('/', { state: { from: location } })
          }
        })
       
      })
      .catch(error => console.log(error))
    })
  

    // console.log(data);
  };

  return (
    <div className="mb-32 mt- py-52 bg-slate-100">
      <h1 className="text-center text-3xl font-semibold mb-8"> Please Sign up Now</h1>

      <div className="md:flex justify-center items-center gap-16 mx-20 md:mx-4">
        <div className="flex flex-col gap-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
             <div>
              <div className="mb-2 block">
                <label />
                Your Name
              </div>
              <Input
                {...register("name", { required: true })}              
                type="text"
                placeholder="name"                
                className="md:w-80 border-2 border-gray-300 rounded-xl"
              />
            </div>


            <div>
              <div className="mb-2 block">
                <label />
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
                <label  />
                Your Password
              </div>
              <Input
                {...register("password", { required: true })}               
                type="password"
                placeholder="password"             
                className="md:w-80 border-2 border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <label />
                Your Photo URL
              </div>
              <Input
              type="text" {...register("photoURL", { required: true })}  placeholder="photoURL URL"                              
               
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
            Have an Account? -{" "}
            <Link to="/login" className="text-base">
             Login{" "}
            </Link>
          </p>
        
         
        </div>

        <div className="">
          <img
            className="w-full md:h-72"
            src="https://i.ibb.co/G3pR0Tf/200-gif-cid-dda24d506ht0vnqfzuuegcz67tzsykn0c210nc9xfejvjj16-ep-v1-gifs-gif-Id-rid-200.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;



