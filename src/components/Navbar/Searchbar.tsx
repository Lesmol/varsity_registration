import React from "react";

function Searchbar() {
  return (
    <form className="hidden w-full max-w-[500px] md:block">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="#8C7E54"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full h-[40px] p-4 ps-10 bg-lighter-primary text-sm text-search border rounded-xl focus:ring-dark-brown focus:border-dark-brown placeholder-search"
          placeholder="Search for an institution..."
        />
        <button
          type="submit"
          className="text-primary absolute end-0.5 bottom-0.5 bg-brown hover:bg-dark-brown focus:ring-4 focus:outline-none font-medium rounded-xl text-sm px-4 py-2 transition ease-linear 157"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Searchbar;
