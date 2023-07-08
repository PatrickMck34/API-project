import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6"> Anywhere</div>
        <div className=" sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Any Week
        </div>
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3">
          <div className=" sm:block"> Add Guests</div>
          <div>
            <SearchIcon className="bg-rose-500 rounded-xl ml-2 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
