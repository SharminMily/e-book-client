import Books from "../../Books/Books/Books";
import Banner from "../Banner/Banner";

import OldBook from "../OldBook/OldBook";
import PopularBooks from "../PopularBooks/PopularBooks ";
import ReviewsView from "../ReviewsView/ReviewsView";
import Search from "../Search/Search";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Search></Search>
            <PopularBooks></PopularBooks>
           <Books></Books>
            <OldBook></OldBook>
            <ReviewsView></ReviewsView>
        </div>
    );
};

export default Home;