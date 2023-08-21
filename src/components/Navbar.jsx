import React from "react";
import { ImSearch } from "react-icons/im";


const Navbar = ({handleSubmit, search, setSearch}) => {
    return (
        <nav>
            <a href="/">
                <img className="logo" src="logo.svg" alt="logo" width="120px" />
            </a>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    placeholder="Search by title..."
                    className="input"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit" className="search">
                    <ImSearch />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;
