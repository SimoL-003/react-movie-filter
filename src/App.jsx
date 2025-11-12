import { useState, useEffect } from "react";
import initialFilmList from "./data/filmList.js"; /* title, genre */

function App() {
  const [filmList, setFilmList] = useState(initialFilmList);
  const [genreFilter, setGenreFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [filteredList, setFilteredList] = useState(filmList);

  // Filtro per il genere
  useEffect(() => {
    genreFilter
      ? setFilteredList(
          filmList.filter(
            (curFilm) =>
              curFilm.genre.toLowerCase() === genreFilter.toLowerCase()
          )
        )
      : setFilteredList(filmList);
  }, [genreFilter, filmList]);

  // Filtro per il titolo
  useEffect(() => {
    setFilteredList(
      filmList.filter((curFilm) =>
        curFilm.title.toLowerCase().includes(titleFilter.toLowerCase())
      )
    );
  }, [titleFilter, filmList]);

  return (
    <>
      <main className="min-h-screen">
        <div className="container py-16">
          <h1>Il nostro catalogo</h1>

          <section className="form my-8">
            <label htmlFor="title" className="invisible">
              Cerca in base al titolo
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Cerca un film..."
              value={titleFilter}
              onChange={(e) => setTitleFilter(e.target.value)}
              className="px-2 py-1 border-2 border-black mr-8"
            />

            <label htmlFor="genre-select" className="mr-2">
              Scegli un genere:
            </label>
            <select
              name="genre-select"
              id="genre-select"
              className="px-2 py-1 border-2 border-black"
              onChange={(e) => setGenreFilter(e.target.value)}
            >
              <option value="">--Scegli un genere--</option>
              <option value="fantascienza">Fantascienza</option>
              <option value="thriller">Thriller</option>
              <option value="romantico">Romantico</option>
              <option value="azione">Azione</option>
            </select>
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
