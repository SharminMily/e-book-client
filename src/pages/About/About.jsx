import {Input} from "@nextui-org/react";
// import {SearchIcon} from "./SearchIcon";

const About = () => {
    return (
        <div className="mx-20 my-32">
         
           <h1 className="text-3xl font-semibold text-center mb-8 uppercase"> About us</h1>
     <div className="flex justify-center items-center">
     <div className="w-full h-full px-8 py-20 rounded-2xl bg-gradient-to-tr from-blue-800 to-indigo-300 text-white shadow-lg ">
     <div className="flex justify-center items-center ">
        
     <Input
        label="name"
        isClearable
        radius="lg"
        
        placeholder="Type to your name..."        
      />
     </div>
    
    <div className="flex justify-center items-center mt-6 ]">
    <textarea className="w-full p-2 rounded-xl h-[300px"
        label="Search"    
        placeholder="Type to Do you want you know?..."        
      />
    </div>
    </div>
     </div>

  
        </div>
    );
};

export default About;