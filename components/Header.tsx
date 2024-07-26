import React from "react";

interface Props {
  category: string;
  query: string;
}

const Header = ({ category, query }: Props) => {
  if (query && category) {
    return (
      <h3>
        Search results for "{query}" in <span>{category}</span>
      </h3>
    );
  }

  if (query) {
    return <h3>Search results for "{query}"</h3>;
  }

  if (category) {
    return <h3>{category}</h3>;
  }

  return <div>Results not found</div>;
};

export default Header;
