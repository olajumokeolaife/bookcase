const setBooks = (data) => {
  return{
    type: "SET_BOOKS",
    payload: data,
  };
};

export default setBooks;