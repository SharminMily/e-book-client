import { useEffect, useState } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";

const OldBook = () => {
  const [oldBooks, setOldBook] = useState([]);

  useEffect(() => {
    fetch("https://e-book-server.vercel.app/oldBook")
      .then((res) => res.json())
      .then((data) => setOldBook(data));
  }, []);

  // console.log(oldBooks);

  return (
    <div className="mb-10">
      <h1 className="text-3xl font-semibold text-center uppercase my-8">Old Book For Sell</h1>
   <div className="flex justify-center items-center gap-4">
   <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {
            oldBooks.map((oldBook) => (
                <Card key={oldBook._id}   className="border-none w-80 h-80 flex justify-center items-center">
                <Image classNames="w-full h-full"
                  alt="Woman listing to music"
                                   
                  src={oldBook.petImage
                  }
                  
                />
                <CardFooter className="justify-between before:bg-white/80 bg-black/50 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                  <p className="text-xl  text-white/80">{oldBook.bookName}</p>
                  <Button
                    className=" text-white bg-black/70 text-lg"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="lg"
                  >
                    ${oldBook.price}
                  </Button>
                </CardFooter>
              </Card>

            ))
        }
    
      </div>
   </div>
    </div>
  );
};

export default OldBook;

// export default OldBook;