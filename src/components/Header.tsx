import React from "react";
import { NavLink } from "react-router-dom";
import { GenreData } from "../actions/GenreActions";

const Header: React.FC<{ genres: GenreData[] }> = ({ genres }) => {
  const genreList = genres.map((genre) => {
    return (
      <NavLink
        className="p-2 mt-2 mr-4 text-gray-900 bg-gray-300 rounded-2xl hover:bg-pink-600 dark:bg-gray-700 hover:text-gray-50 dark:hover:bg-pink-600 dark:text-white"
        key={genre.id}
        to={{
          pathname: "/games",
          search: `?genre=${genre.slug}`,
        }}
        isActive={(match, location) => {
          console.log(location);
          console.log(match);
          return (
            location.pathname + location.search === `/games?genre=${genre.slug}`
          );
        }}
      >
        {genre.name}
      </NavLink>
    );
  });

  return <div className="flex flex-wrap items-center">{genreList}</div>;
};

export default Header;
