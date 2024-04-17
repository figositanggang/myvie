import { Link, NavLink } from "react-router-dom";

export const MovieLists = {
  popular: "Popular",
  top_rated: "Top Rated",
  upcoming: "Upcoming",
};

export default function Sidebar() {
  let entries = Object.entries(MovieLists);

  return (
    <>
      <div
        id="sidebar"
        className="flex-grow-0 p-4 flex flex-col w-72 h-lvh bg-sky-700 drop-shadow-lg border-r border-white border-opacity-25 max-[720px]:hidden"
      >
        <Link to={"/"} className="mb-7 text-4xl font-semibold">
          Myvie
        </Link>
        <ul>
          {entries.map(([key, value]) => (
            <NavLink
              key={value}
              to={"/" + key}
              className="block py-3 px-3 rounded-lg transition-all hover:bg-teal-500 hover:bg-opacity-75 active:bg-opacity-100 mb-2"
            >
              {value}
            </NavLink>
          ))}
        </ul>
      </div>
    </>
  );
}
