import React from "react";
import Booklist from "../../src/components/booklist/Booklist";
import Search from "../components/search/Search";



function Home({ addBookToBookcase }) {
  return (
    <>
      <Search />
      <Booklist addBookToBookcase={addBookToBookcase} />
    </>
  );
}

export default Home;
