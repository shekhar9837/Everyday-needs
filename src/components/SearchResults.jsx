import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { data } from "../data";

const SearchResults = ({ PageUp }) => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (query) {
      // Filter the data array based on the query string
      const filteredResults = data.filter(
        (item) =>
          typeof item.handle === "string" &&
          item.handle.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
      console.log("Filtered Results: ", filteredResults); // Debugging
    }
  }, [query]);

  return (
    <div className="relative flex flex-col items-center justify-start">
      <div className="md:w-[70%] w-full flex flex-col items-start justify-center mt-10 md:px-4 px-4">
        <h2 className="py-4 text-black px-2">Search Results for: {query}</h2>
        <div className="px-2 grid md:grid-cols-4 grid-cols-2 grid-row-auto text-white md:gap-2 gap-0">
          {results.length > 0 ? (
            results.map((item) => (
              <Link
                to={`/products/${item.handle}`}
                onClick={PageUp}
                key={item.id}
              >
                <div className="relative cursor-pointer md:p-0 p-1">
                  <div className="text-white text-[11px] absolute inset-0 md:p-6 p-4 md:opacity-0 hover:opacity-100 transition-opacity">
                    <h1 className="md:flex hidden">{item.vendor}</h1>
                    <h1 className="mt-4 text-sm">{item.title}</h1>
                    <p className="mt-2 text-[11px]">${item.price / 100}.00</p>
                  </div>
                  <img
                    className="object-cover"
                    loading="lazy"
                    src={item.images}
                    alt={item.title}
                  />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-black">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
