// src/components/SearchResults.js
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { data } from "../data";

const SearchResults = ({PageUp}) => {
  const [results, setResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");


  useEffect(() => {
    if (query) {
      // Filter the data array based on the query string
      const filteredResults = data.filter(
        (item) =>
          typeof item.title === "string" &&
          item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div className="relative flex flex-col items-center justify-start ">
      <div className="flex flex-col items-center justify-center md:mt-20 mt-10">
        <h2>Search Results for: {query}</h2>

        <div className="md:w-[70%]  md:px-4 px-2 grid md:grid-cols-4 grid-cols-2  grid-row-auto  text-white md:gap-2 gap-0">
          {results.length > 0 ? (
            <>
              {results.map((item) => (
                <div
                  key={item.id}
                  className="relative  cursor-pointer md:p-0 p-1"
                >
                  <Link
                    to={`/products/${item.handle}`}
                    onClick={() => PageUp()}
                  >
                    <div className="text-white text-[11px] absolute inset-0 md:p-6 p-4 md:opacity-0  hover:opacity-100 transition-opacity">
                      <h1 className="md:flex hidden">{item.vendor}</h1>
                      <h1 className="mt-4 text-sm ">{item.title}</h1>
                      <p className="mt-2 text-[11px]">${item.price / 100}.00</p>
                    </div>
                    <img
                      className="object-cover "
                      loading="lazy"
                      src={item.images}
                      alt={item.title}
                    />
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
