import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Category", path: "/categories" },
    { label: "Time", path: "/time" },
    { label: "Mood", path: "/mood" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEsc = (e) => e.key === "Escape" && setOpen(false);

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/recipe/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm(""); // optional: clear input after search
      setOpen(false); // close mobile menu if open
    }
  };

  return (
    <div className="h-20 w-full bg-transparent p-4">
      <div className="w-full flex items-center justify-between max-lmd:hidden">
        <div className="h-20 w-72 flex items-center">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="logo" className="h-16" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="flex items-center">
            <label htmlFor="site-search" className="sr-only">
              Search any recipe
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-l-full border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/70 outline-none"
            />
            <button
              type="submit"
              className="rounded-r-full border border-white/20 bg-white/10 px-4 py-2 text-white hover:bg-white/20"
            >
              Search
            </button>
          </form>

          <nav className="flex items-center gap-2">
            {navLinks.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-white/90 px-3 py-2 rounded hover:bg-white/10"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lmd:hidden w-full flex items-center justify-between gap-x-2">
        <div className="h-20 flex items-center flex-shrink-0">
          <Link to="/" aria-label="Home">
            <img src={logo} alt="logo" className="h-12 sm:h-14" />
          </Link>
        </div>

        <div className="relative flex-shrink-0">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2.5 text-white hover:bg-white/20 focus:outline-none"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path d="M3.75 6.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm0 6h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm0 6h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Z" />
            </svg>
          </button>

          <div
            ref={menuRef}
            className={`absolute right-0 top-[calc(100%+0.5rem)] z-50 w-[min(90vw,320px)] origin-top-right rounded-2xl border border-white/15 bg-white/10 p-3 shadow-xl backdrop-blur-xl transition-all ${
              open
                ? "scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            <form onSubmit={handleSearch} className="flex w-full mb-3">
              <label htmlFor="mobile-site-search" className="sr-only">
                Search any recipe
              </label>
              <input
                id="mobile-site-search"
                type="search"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 rounded-l-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/70 outline-none"
              />
              <button
                type="submit"
                className="rounded-r-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 flex-shrink-0"
              >
                Go
              </button>
            </form>

            <div className="flex flex-row gap-2">
              {navLinks.map(({ label, path }) => (
                <Link
                  key={label}
                  to={path}
                  className="text-white/90 px-3 py-2 rounded hover:bg-white/10 text-sm"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
