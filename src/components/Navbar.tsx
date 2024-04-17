import { toggleTheme } from "../scripts/script";

export default function Navbar() {
  return (
    <nav
      className="fixed w-full top-0 bg-white p-3 pr-72 max-[720px]:pr-10 flex justify-between items-center drop-shadow-md z-40"
      id="navbar"
    >
      {/* Search Field */}
      <div className="flex justify-between border w-1/2 mx-2 p-2 px-4 rounded-full">
        <input
          type="text"
          className="grow focus:outline-none w-full"
          placeholder="Search..."
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      {/* Theme Button */}
      <button className="" onClick={toggleTheme}>
        <i className="fa-solid fa-moon"></i>
      </button>
    </nav>
  );
}
