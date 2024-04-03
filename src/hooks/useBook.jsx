import { useEffect } from "react";
import { useState } from "react";

const useBook = () => {
    const [books, setBooks] = useState([])
    const[loading, setLoading] = useState(true);
  
    useEffect(() => {
        fetch("https://e-book-server.vercel.app/books")
          .then((res) => res.json())
          .then((data) => {
            setBooks(data)
            setLoading(false)
        });
      }, []);
        
    return [books, loading]
};

export default useBook;