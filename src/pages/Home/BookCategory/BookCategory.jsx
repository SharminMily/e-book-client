/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const BookCategory = ({item}) => {
  const {_id, image, category, title} = item;
  console.log(item)
  return (
      <div className="py-2">
            {/* <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Your day your way
          </p>
       
        </CardHeader>
       
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full "
          src={image}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-1 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/90 font-semibold">{category}</p>
              <p className="text-tiny text-white/80">
               {title}
              </p>
            </div>
          </div>
         <Link to={`/bookDetails/${_id}`}>
         <Button radius="full" size="sm">
           About
          </Button>
         </Link>
        
        </CardFooter>
      </Card> */}
      </div>
  );
};

export default BookCategory;
// export default BookCategory;