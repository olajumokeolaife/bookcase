import React from "react";
import Book from "../components/book/Book";

function Bookcase({ books, removeBook }) {
  return (
    <div>
      {books.length === 0 ? (
        <p>No books added.</p>
      ) : (
        <>
          <p>Total books in bookcase: {books.length}</p>
          {books.map((book) => (
            <div key={book.id}>
              <Book bookProps={book} />
              <button onClick={() => removeBook(book)}>
                Remove from Bookcase
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Bookcase;
