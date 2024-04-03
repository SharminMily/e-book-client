import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { Input } from "@nextui-org/react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env. VITE_IMAGE;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {  
        // console.log(data)
        // img
        const imageFile = { image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })

        if(res.data.success){
            const allBooks = {
              bookName: data.bookName,
              title: data.title,
              price: data.price,
              description: data.description,            
              petImage: res.data.data.display_url
            }
            // 
            const booktRes = await axiosSecure.post('/oldBook', allBooks)
            // console.log(petRes.data)
            if(booktRes.data.insertedId){
              reset();
              toast.success('Added Successfully !')
            
            }
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
                Book name
              </div>
              <Input
                {...register("bookName", { required: true })}              
                type="text"
                placeholder="Book name"                
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>


            <div>
              <div className="mb-2 block">
                <label />
               Title
              </div>
              <Input
                {...register("title", { required: true })}              
                type="text"
                placeholder="Title"                
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <label  />
               Price
              </div>
              <Input
                {...register("price", { required: true })}               
                type="number"
                placeholder="price"             
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>

            <div>
              <div className="mb-2 block">
                <label />
                description
              </div>
              <Input
              type="text" {...register("description", { required: true })}  placeholder="description"                              
               
                className="w-full border-2 border-gray-300 rounded-xl"
              />
            </div>

            {/* image uploaded */}
          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button type="submit" className="btn flex items-center  bg-slate-700 text-gray-100 p-2  text-base">
            Add Book <BsArrowLeftCircleFill className="ml-2"></BsArrowLeftCircleFill>
          </button>


            {/* <button
              className="bg-indigo-200  font-semibold py-2 rounded-xl hover:bg-slate-300"
              type="submit"
            >
              Submit
            </button> */}
          </form>

        </div>
      </div>
    );
};

export default AddBook;