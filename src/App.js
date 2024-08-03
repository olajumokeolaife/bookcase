import React, { useState, useEffect } from "react";
import data from "./models/books.json";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Bookcase from "./pages/Bookcase";
import Contact from "./pages/Contact";
// import Book from "./components/book/Book";

function App() {
  const [books, setBooks] = useState([]);
  // const [bookCount, setBookCount] = useState(0);

  const addBookToBookcase = (book) => {
    setBooks((prevBooks) => {
      if (prevBooks.some((b) => b.id === book.id)) {
        return prevBooks; 
      }
      return [...prevBooks, book];
    });
  };


  const removeBook = (bookToRemove) => {
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== bookToRemove.id)
    );
    // setBookCount((prevCount) => Math.max(0, prevCount - 1));
  };

  useEffect(() => {
    document.title = `Bookcase (${books.length})`;
  }, [books]);

  return (
    <div className="container">
      <Router>
        {/* <React.Fragment> */}
        <Header />
        {/* implementing list of books using the 'books' state directly */}

        {/* {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))} */}

        {/* passing the 'books' state to the booksList prop in the Booklist component (child component) */}

        {/* </React.Fragment> */}

        <Routes>
          <Route
            exact
            path="/"
            element={<Home addBookToBookcase={addBookToBookcase} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/bookcase"
            element={
              <Bookcase
                books={books}
                removeBook={removeBook}
                // bookCount={bookCount}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
