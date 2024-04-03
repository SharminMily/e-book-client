/* eslint-disable react/prop-types */
import BooksCard from "./BooksCard";

const BooksCategory = ({items}) => {
    // console.log(items)
    return (
        <div>
            
        <div className="">
          <div className="w-full md:grid grid-cols-2 gap-8 md:px-8">
          {
                 items.map(item => <BooksCard key={item._id} item={item}></BooksCard>)
            }
          </div>
          
        </div>
        </div>
    );
};

export default BooksCategory;