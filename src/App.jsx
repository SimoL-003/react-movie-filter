import { useState, useEffect } from "react";
import initialFilmList from "./data/filmList.js"; /* title, genre */

function App() {
  const [filmList, setFilmList] = useState(initialFilmList);
  const [genreFilter, setGenreFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [filteredList, setFilteredList] = useState(filmList);
  const [newFilmTitle, setNewFilmTitle] = useState("");
  const [newFilmGenre, setNewFilmGenre] = useState("");

  const genreList = [];
  for (let i = 0; i < filmList.length; i++) {
    const curFilm = filmList[i];
    if (genreList.includes(curFilm.genre)) {
    } else genreList.push(curFilm.genre);
  }

  // Filtro per il genere
  useEffect(() => {
    genreFilter
      ? setFilteredList(
          filmList.filter(
            (curFilm) =>
              curFilm.genre.toLowerCase() === genreFilter.toLowerCase() &&
              curFilm.title
                .toLowerCase()
                .includes(titleFilter.trim().toLowerCase())
          )
        )
      : setFilteredList(
          filmList.filter((curFilm) =>
            curFilm.title
              .toLowerCase()
              .includes(titleFilter.trim().toLowerCase())
          )
        );
  }, [genreFilter, titleFilter, filmList]);

  // Filtro per il titolo
  useEffect(() => {}, [titleFilter, filmList]);

  function addFilm(e) {
    e.preventDefault();
    const newFilm = { title: newFilmTitle, genre: newFilmGenre };
    setFilmList((prev) => [...prev, newFilm]);
    setNewFilmGenre("");
    setNewFilmTitle("");
  }

  return (
    <>
      <main className="min-h-screen">
        <div className="container py-16">
          <h1>Il nostro catalogo</h1>

          <section className="search-form my-8">
            <label htmlFor="search-title" className="invisible">
              Cerca in base al titolo
            </label>
            <input
              type="text"
              name="search-title"
              id="search-title"
              placeholder="Cerca un film..."
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
              className="px-2 py-1 border-2 border-black mr-8"
            />

            <label htmlFor="filter-genre" className="mr-2">
              Scegli un genere:
            </label>
            <select
              name="filter-genre"
              id="filter-genre"
              className="px-2 py-1 border-2 border-black"
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="">--Scegli un genere--</option>
              {genreList.map((curGenre, index) => (
                <option key={index} value={curGenre}>
                  {curGenre}
                </option>
              ))}
            </select>
          </section>

          <section className="add-form">
            <h2 className="py-4">Aggiungi un nuovo film alla lista</h2>

            <form action="" onSubmit={addFilm}>
              {/* Input titolo */}
              <label htmlFor="title">Titolo del film</label>
              <input
                type="text"
                name="title"
                id="title"
                required
                className="px-2 py-1 border-2 border-black mx-4"
                value={newFilmTitle}
                onChange={(e) => setNewFilmTitle(e.target.value)}
              />

              {/* Select genere */}
              <label htmlFor="genre" className="mr-2">
                Scegli un genere:
              </label>
              <select
                required
                name="genre"
                id="genre"
                className="px-2 py-1 border-2 border-black"
                value={newFilmGenre}
                onChange={(e) => setNewFilmGenre(e.target.value)}
              >
                <option value="">--Scegli un genere--</option>
                {genreList.map((curGenre, index) => (
                  <option key={index} value={curGenre}>
                    {curGenre}
                  </option>
                ))}
                <option value="altro">Altro</option>
              </select>

              {/* Submit button */}
              <button
                type="submit"
                className="ml-4 px-2 py-1 border-2 border-black cursor-pointer"
              >
                Aggiungi film
              </button>
            </form>
          </section>

          <section className="catalogo my-8">
            <h2>I film della settimana</h2>

            <div className="film-container py-4">
              <ul className="grid grid-cols-5 gap-4">
                {filteredList.map((curFilm, index) => (
                  <li className="p-4 border-2" key={index}>
                    <h4 className="mb-4">{curFilm.title}</h4>
                    <span className="px-2 py-2 bg-amber-300 capitalize text-sm">
                      {curFilm.genre}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
