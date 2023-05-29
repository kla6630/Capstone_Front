import { useState, useEffect, useRef } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";

export const SearchSection = () => {
  const [results, setResults] = useState([]);
  const searchResultsRef = useRef(null);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        // 27 is the keyCode for the "Esc" key
        setResults([]); // Clear the results when "Esc" key is pressed
      }
    };

    const handleClickOutside = (event) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
        setResults([]); // Clear the results when clicking outside the component
      }
    };

    document.addEventListener("keydown", handleEscKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="searchSection">
      <div className="searchBarContainer">
        <SearchBar setResults={setResults} />
        <div ref={searchResultsRef}>
          <SearchResultsList results={results} />
        </div>
      </div>
    </div>
  );
};
