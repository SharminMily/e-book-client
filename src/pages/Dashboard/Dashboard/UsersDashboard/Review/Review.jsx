import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Input } from "@nextui-org/react";

import toast from "react-hot-toast";
import useAxiosPublic from "../../../../../hooks/useAxiosPublic";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    

    const onSubmit = async (data) => {  
        // console.log(data) 
       
            const allBooks = {
              name: data.name,
              date: data.date,
              rating: data.rating,
              description: data.description,   
              }
            // 
            const booktRes = await axiosPublic.post('/review', allBooks)
            // console.log(booktRes.data)
            if(booktRes.data.insertedId){
              reset();
              toast.success('Added Successfully !')
            
            }
     
          // console.log('from data', data);
            

     }
    return (
        <div>
        <h1 className="text-center text-3xl font-semibold">Add your old Books</h1>
  
        <div className="">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
             <div>
              <div className="mb-2 block">
                <label />
               Name
              </div>
              <Input
                {...register("name", { required: true })}              
                type="text"
                placeholder="Name"                
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>


            <div>
              <div className="mb-2 block">
                <label />
               Title
              </div>
              <Input
                {...register("date", { required: true })}              
                type="date"
                placeholder="Date"                
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <label  />
               Price
              </div>
              <Input
                {...register("rating", { required: true })}               
                type="number"
                placeholder="00"             
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <label />
                Description
              </div>
              <textarea
              type="text" {...register("description", { required: true })}  placeholder="description"                              
               
                className="w-full h-[200px] border-2 border-gray-300 bg-gray-100 p-4 rounded-xl"
              />
            </div>

            {/* image uploaded */}
          

          <button type="submit" className="btn flex items-center  bg-slate-700 text-gray-100 p-2  text-base">
            Add Review <BsArrowLeftCircleFill className="ml-2"></BsArrowLeftCircleFill>
          </button>
         
          </form>

        </div>
      </div>
    );
};

export default Review;

// export default Review;