import Banner from "../Banner/Banner";
import BookCategory from "../BookCategory/BookCategory";
import OldBook from "../OldBook/OldBook";
import PopularBooks from "../PopularBooks/PopularBooks ";
import ReviewsView from "../ReviewsView/ReviewsView";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BookCategory></BookCategory>
            <PopularBooks></PopularBooks>
            <OldBook></OldBook>
            <ReviewsView></ReviewsView>
        </div>
    );
};

export default Home;