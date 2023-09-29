import React from "react";
import "./Search.css";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={`container search d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}
    >
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className="input_tag"
        type="text"
      />
      <button onClick={searchBtn} className={` btn btn-primary fs-5`}>
        Search
      </button>
    </form>
  );
};

export default Search;
