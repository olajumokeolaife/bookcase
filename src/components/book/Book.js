import PropTypes from "prop-types";
import React, { useState } from "react";

import "./Book.css";

function Book({ bookProps, onAdd, onRemove }) {
  // use object destructuring to extract the book object keys
  const {
    volumeInfo: { title, authors, description },
    price,
  } = bookProps;

  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    if (!isAdded && onAdd) {
      onAdd();
      setIsAdded(true);
    }
  };

 const handleRemoveClick = () => {
   if (onRemove) {
     onRemove();
     setIsAdded(false);
   }
 };

  // const addBook = (titleParameter) => {
  //   console.log(`The title of this book is : ${titleParameter}`);
  // };

  return (
    // without object destructuring
    // <div>
    //   <h2>Title: {props.title}</h2>
    //   <p>by {props.authors}</p>
    //   <p>{props.description}</p>
    //   <span>price: {props.price}</span>
    // </div>
    <div className="add-book">
      <h2>Title: {title}</h2>
      <p>by {authors ? authors.join(",") : "No Authors Listed"}</p>
      <p className="book-description">{description && "Description exists"}</p>
      <span>price: {price ? `£${price}` : "No price listed"}</span>
      {onAdd && (
        <button onClick={handleAddClick} disabled={isAdded}>
          {isAdded ? "Added" : "Add to Bookcase"}
        </button>
      )}
      {onRemove && isAdded && (
        <button onClick={handleRemoveClick}>Remove from Bookcase</button>
      )}
    </div>
  );
}

Book.propTypes = {
  bookProps: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string,
    }),
    price: PropTypes.number.isRequired,
  }).isRequired,
};

// default props: shows the text "No description provided" when the description
// value is not provided.
Book.defaultProps = {
  bookProps: {
    volumeInfo: {
      description: "No description provided",
    },
  },
};

export default Book;
