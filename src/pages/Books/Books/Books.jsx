import { useState } from "react";
import useBook from "../../../hooks/useBook";
import BooksCategory from "./BooksCategory";
import { Tab, Tabs, TabPanel } from "react-tabs";

const Books = () => {
  const [books] = useBook([]);
  const [tabIndex, setTabIndex] = useState(0);
  // console.log(books);

  const motivationBook = books.filter(
    (item) => item.category === "motivationBook"
  );
  const islamicBook = books.filter((item) => item.category === "islamicBook");
  const gamesBook = books.filter((item) => item.category === "gamesBook");
  const cartoonBook = books.filter((item) => item.category === "cartoonBook");
  const storyBook = books.filter((item) => item.category === "storyBook");
  const otherBook = books.filter((item) => item.category === "otherBook");

  // console.log(motivationBook);

  return (
    <div className="md:m-20 m-4">
      <h1 className="text-3xl font-semibold text-center my-10 uppercase">Our Books Category</h1>
      <Tabs
        className="gap-0"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <div className="grid lg:grid-cols-6 grid-cols-3 justify-center w-full  my-6 gap-2">
          <Tab className="line-clamp-2 ">
            <button className="btn shadow-lg md:shadow-slate-600  w-full mb-6 p-2 ml-4">
              Motivation Book
            </button>
          </Tab>

          <Tab className="line-clamp-1">
            <button className="btn w-full shadow-lg md:shadow-slate-600 mb-6 p-2 ml-4">
              IslamicBook
            </button>
          </Tab>

          <Tab className="line-clamp-1">
            <button className="btn shadow-lg md:shadow-slate-600 w-full mb-6 p-2 ml-4">
              Games Book
            </button>
          </Tab>

          <Tab className="line-clamp-1">
            <button className="btn shadow-lg md:shadow-slate-600 w-full mb-6 p-2 ml-4">
              Cartoon Book
            </button>
          </Tab>

          <Tab className="line-clamp-1">
            <button className="btn w-full shadow-lg md:shadow-slate-600  mb-6 p-2 ml-4">
              storyBook
            </button>
          </Tab>

          <Tab className="line-clamp-1">
            <button className="btn  w-full shadow-lg md:shadow-slate-600  normal-case p-2 mb-6 ml-4">
              Other Book
            </button>
          </Tab>
        </div>
        <div className="">
          <TabPanel>
            <BooksCategory items={motivationBook}></BooksCategory>
          </TabPanel>
          <TabPanel>
            <BooksCategory items={islamicBook}></BooksCategory>
          </TabPanel>
          <TabPanel>
            <BooksCategory items={gamesBook}></BooksCategory>
          </TabPanel>
          <TabPanel>
            <BooksCategory items={cartoonBook}></BooksCategory>
          </TabPanel>
          <TabPanel>
            <BooksCategory items={storyBook}></BooksCategory>
          </TabPanel>
          <TabPanel>
            <BooksCategory items={otherBook}></BooksCategory>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Books;
