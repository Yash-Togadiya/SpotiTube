import React from "react";
import "./Search.css";

function Search() {
    return (
        <div className="search">
            <input type="search" placeholder="Search" />
            <button>
                <img
                    src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-search-icon-png-image_320926.jpg"
                    alt="search"
                />
            </button>
        </div>
    );
}

export default Search;
