import { useSelector } from "react-redux";
import Book from "../book/Book";
import React from "react";

function Booklist({ addBookToBookcase }) {
  const booksList = useSelector((state) => state.booksList.books);

  // console.log("length: " + booksList.length);

  //  const handleAddBook = (book) => {
  //    if (addBookToBookcase) {
  //      addBookToBookcase(book);
  //    } else {
  //      console.error("addBookToBookcase is not defined");
  //    }
  //  };

  const handleAddBook = (book) => {
    if (addBookToBookcase) {
      addBookToBookcase(book);
    }
  };
  

   if (booksList.length === 0) {
     return <p>No books yet ...</p>;
   }

  return (
    <div>
      {/* Without destructuring */}
      {/* {books.map((book) => (
        <Book
          key={book.id}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          price={book.price}
        />
      ))} */}

      {booksList.map((book) => (
        <Book
          key={book.id}
          bookProps={book}
          onAdd={() => handleAddBook(book)}
        />
      ))}
    </div>
  );
}

export default Booklist;
