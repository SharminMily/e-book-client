import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/From/Login/Login";
import SignUp from "../pages/From/SignUp/SignUp";
import Books from "../pages/Books/Books/Books";
import BooksCard from "../pages/Books/Books/BooksCard";
import BookDetails from "../pages/Books/BookDetails/BookDetails";

import Error from "../pages/Error/Error";
import PrivateRoute from './PrivateRoute';
import Dashboard from "../Layout/Dashboard";
import MyBook from "../pages/Dashboard/Dashboard/UsersDashboard/MyBook/MyBook";
import AllUser from "../pages/Dashboard/Dashboard/AdminDashboard/AllUser";
import AddBook from "../pages/Dashboard/Dashboard/UsersDashboard/AddBook";
import MyOldBook from "../pages/Dashboard/Dashboard/UsersDashboard/MyBook/MyOldBook";
import UserHome from "../pages/Dashboard/Dashboard/UsersDashboard/UseHome/UseHome";
import AdminProfile from "../pages/Dashboard/Dashboard/AdminDashboard/AdminProfile";
import About from "../pages/About/About";
import Review from "../pages/Dashboard/Dashboard/UsersDashboard/Review/Review";
import Payment from "../pages/Dashboard/Dashboard/UsersDashboard/Payment/Payment";
import PaymentHistorys from "../pages/Dashboard/Dashboard/UsersDashboard/Payment/PaymentHistorys";
import ManageBook from "../pages/Dashboard/Dashboard/AdminDashboard/ManageBook";
import AdminAddBook from "../pages/Dashboard/Dashboard/AdminDashboard/AdminAddBook";
import OrderList from "../pages/Dashboard/Dashboard/AdminDashboard/OrderList";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,       
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/books",
            element: <Books></Books>,
          },
          {
            path: "/booksCard",
            element: <BooksCard></BooksCard>,
          },
          {
            path: "/bookDetails/:id",
            element: <BookDetails></BookDetails>,
            loader: ({ params }) => fetch(`https://e-book-server.vercel.app/books/${params.id}`)
          },         
       
        ]},
        // from
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>,
        },

        //  Dashboard 
        {
          path: "dashboard",
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            // user
            {              
              path: "userHome",
              element: <UserHome></UserHome>
                   
            },
            {              
              path: "myBook",
              element: <MyBook></MyBook>
                   
            },
            {              
              path: "payment",
              element: <Payment></Payment>
                   
            },
            {              
              path: "addOldBook",
              element: <AddBook></AddBook>
                   
            },
            {              
              path: "myOldBook",
              element: <MyOldBook></MyOldBook>
                   
            },
            {              
              path: "review",
              element: <Review></Review>                   
            },        
            {              
              path: "paymentHistorys",
              element: <PaymentHistorys></PaymentHistorys>                   
            },
            // admin
            {              
              path: "adminHome",
              element: <AdminProfile></AdminProfile>                   
            },
            {              
              path: "manageBook",
              element: <ManageBook></ManageBook>                   
            },
            {              
              path: "addBook",
              element: <AdminAddBook></AdminAddBook>                   
            },
            {              
              path: "order",
              element: <OrderList></OrderList>,                   
            },
            {              
              path: "allUser",
              element: <AllUser></AllUser>,                   
            },
          ]
          //   {              
          //     path: "allUser",
          //     element: <AllUser></AllUser>,                   
          //   },
          // ]
        },
        
])

export default router;