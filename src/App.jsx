import { useState, useEffect } from "react";
import initialFilmList from "./data/filmList.js"; /* title, genre */
import Filter from "./components/widgets/Filter.jsx";

function App() {
  const [filmList, setFilmList] = useState(initialFilmList);
  const [genreFilter, setGenreFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [filteredList, setFilteredList] = useState(filmList);
  const [newFilmTitle, setNewFilmTitle] = useState("");
  const [newFilmGenre, setNewFilmGenre] = useState("");
  const [newGenre, setNewGenre] = useState("");

  const genreList = [];
  for (let i = 0; i < filmList.length; i++) {
    const curFilm = filmList[i];
    if (genreList.includes(curFilm.genre)) {
    } else genreList.push(curFilm.genre);
  }

  // Filtro
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

  function addFilm(e) {
    e.preventDefault();

    const filmGenre = newFilmGenre === "altro" ? newGenre : newFilmGenre;
    const newFilm = { title: newFilmTitle, genre: filmGenre };

    setFilmList((prev) => [...prev, newFilm]);

    setNewFilmGenre("");
    setNewFilmTitle("");
    setNewGenre("");
  }

  return (
    <>
      <main className="min-h-screen pt-16">
        {/* SEARCH FORM SECTION */}
        <h1 className="container py-8">Il miglior catalogo per film</h1>
        <Filter
          titleInputValue={titleFilter}
          onTitleInputChange={(e) => setTitleFilter(e.target.value)}
          genreValue={genreFilter}
          onGenreSelectChange={(e) => setGenreFilter(e.target.value)}
          genreList={genreList}
        />

        {/* ADD FILM FORM */}
        <section className="my-8">
          <div className="container">
            <h2 className="py-4">Aggiungi un nuovo film alla lista</h2>

            <form action="" onSubmit={addFilm}>
              {/* Inputs */}
              <div className="grid grid-cols-2 gap-8 my-4">
                {/* Input titolo */}
                <div>
                  <label htmlFor="title" className="invisible absolute">
                    Titolo del film
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    placeholder="Scrivi il titolo..."
                    value={newFilmTitle}
                    onChange={(e) => setNewFilmTitle(e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Select genere */}
                <div className="flex gap-4">
                  <label htmlFor="genre" className="invisible absolute">
                    Scegli un genere:
                  </label>
                  <select
                    required
                    name="genre"
                    id="genre"
                    value={newFilmGenre}
                    onChange={(e) => setNewFilmGenre(e.target.value)}
                    className={newFilmGenre === "altro" ? "w-1/3" : "stretch"}
                  >
                    <option value="">-- Scegli un genere --</option>
                    {genreList.map((curGenre, index) => (
                      <option key={index} value={curGenre}>
                        {curGenre}
                      </option>
                    ))}
                    <option value="altro">Altro</option>
                  </select>
                  {newFilmGenre === "altro" && (
                    <input
                      id="custom-genre"
                      name="custom-genre"
                      placeholder="Aggiungi un nuovo genere"
                      required
                      value={newGenre}
                      onChange={(e) => setNewGenre(e.target.value)}
                      className="w-2/3"
                    />
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div className="text-end">
                <button type="submit">Aggiungi film</button>
              </div>
            </form>
          </div>
        </section>

        {/* FILM CATALOGUE */}
        <section className="mt-8">
          <div className="container">
            <h2 className="py-4">I tuoi film</h2>

            <div className="film-container py-4">
              <ul className="grid grid-cols-4 gap-4">
                {filteredList.map((curFilm, index) => (
                  <li className="film-card" key={index}>
                    <h4 className="mb-4">{curFilm.title}</h4>
                    <span className="badge">{curFilm.genre}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
