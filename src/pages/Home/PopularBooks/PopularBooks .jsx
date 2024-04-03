import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const PopularBooks  = () => {

    const list = [
        {
          title: "Soul River",
          img: "https://i.ibb.co/bvhyL7r/photo-1511108690759-009324a90311-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
          price: "$5.50",
        },
        {
          title: "content Fbet",
          img: "https://i.ibb.co/37dxq6L/photo-1607702610000-8be9a650bb89-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
          price: "$3.00",
        },
        {
          title: "Matt Ridley",
          img: "https://i.ibb.co/PDxDrrs/photo-1589829085413-56de8ae18c73-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
          price: "$10.00",
        },
        {
          title: "Psychology",
          img: "https://i.ibb.co/QKLGwcv/photo-1592496431122-2349e0fbc666-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
          price: "$5.30",
        },
        {
          title: "PosTers",
          img: "https://i.ibb.co/chBYnvM/photo-1619164816991-22d393238d8f-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpgg",
          price: "$15.70",
        },
        {
          title: "Scuipture",
          img: "https://i.ibb.co/r7xS6cP/photo-1619164594191-eba71b205211-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
          price: "$8.00",
        },
        {
          title: "Seeds",
          img: "https://i.ibb.co/fprh1xJ/photo-1536340314100-5147a6eb2b41-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg",
          price: "$7.50",
        },
        {
          title: "The Field",
          img: "https://i.ibb.co/DksTHh6/photo-1543278418-7028dd55b221-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg",
          price: "$12.20",
        },
      ];

    return (
        <div className="my-16 mx-4">
            <h1 className="text-3xl text-center mb-10 uppercase font-semibold">Popular Books</h1>

            <div className="">
            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4 lg:mx-20 md:mx-10">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full rounded-b-none object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between bg-indigo-50">
            <b>{item.title}</b>
            <p className="font-bold text-indigo-600">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
            </div>
        </div>
    );
};

export default PopularBooks ;