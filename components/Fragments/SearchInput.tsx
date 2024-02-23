import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchInput = (props: {
  searchData: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        <input
          type="search"
          className="bg-gray-100 rounded-md px-3 py-2 w-full pl-10 text-sm font-light"
          placeholder={
            props.placeholder === undefined
              ? "Search by keyword"
              : props.placeholder
          }
          value={props.searchData}
          onChange={(e) => {
            props.onChange(e.target.value);
            console.log(e.target.value);
          }}
        />
        <RiSearchLine
          className="absolute top-3 left-3 text-lg"
          style={{ marginTop: "-1.5px" }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
