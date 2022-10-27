import React from "react";

export default function SearchBar(props) {
  return (
    <>
      <div className="container">
        <h2 className="search_h2">Need Help?</h2>
        <div className="search__box">
          <button className="btn btnBanner searchBar__button">Search</button>
          <input
            className="searchBar__input"
            type="text"
            placeholder="Enter Question"
          ></input>
        </div>
        <div className="flex">
          <button className="btn btnBanner btn_dis">Search</button>
        </div>
      </div>
    </>
  );
}
