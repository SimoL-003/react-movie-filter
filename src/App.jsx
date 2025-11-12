import { useState, useEffect } from "react";
import initialFilmList from "./data/filmList.js"; /* title, genre */

/**
 * BASE
 * - Lista dei film creata dinamicamente
 * - Form che tramite menu a tendina permetta di selezionare il genere del film (uno o più??) => deve funzionare live, quindi senza submit button, quindi basta solo l'imput, non il form (??)
 * Di conseguenza, sistemare la lista dei film in modo che sia aggiornata sulla base del filtro
 *
 */

function App() {
  const [filmList, setFilmList] = useState(initialFilmList);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState(filmList);

  useEffect(() => {
    filter
      ? setFilteredList(
          filmList.filter(
            (curFilm) => curFilm.genre.toLowerCase() === filter.toLowerCase()
          )
        )
      : setFilteredList(filmList);
  }, [filter, filmList]);

  return (
    <>
      <main className="min-h-screen">
        <div className="container py-16">
          <h1>Il nostro catalogo</h1>

          <section className="form my-8">
            <label htmlFor="genre-select" className="mr-2">
              Scegli un genere:
            </label>
            <select
              name="genre-select"
              id="genre-select"
              className="px-2 py-1 border-2 border-black"
              onChange={(e) => setFilter(e.target.value)}
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
