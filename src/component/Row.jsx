/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

import Movie from "./Movie";

const Row = ({ title, fetchURL }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setmovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center">
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie item={item} key={id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
