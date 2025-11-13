import { useState, useEffect } from "react";
import initialFilmList from "./data/filmList.js"; /* title, genre */
import Filter from "./components/widgets/Filter.jsx";
import NewFilmForm from "./components/widgets/NewFilmForm.jsx";
import FilmCard from "./components/widgets/FilmCard.jsx";
import NoResult from "./components/elements/NoResult.jsx";
import NewFilmFormModal from "./components/Modules/NewFilmFormModal.jsx";

function App() {
  const [filmList, setFilmList] = useState(initialFilmList);
  const [genreFilter, setGenreFilter] = useState("");
  const [titleFilter, setTitleFilter] = useState("");
  const [filteredList, setFilteredList] = useState(filmList);
  const [showForm, setShowForm] = useState(false);
  const [newFilmTitle, setNewFilmTitle] = useState("");
  const [newFilmGenre, setNewFilmGenre] = useState("");
  const [newGenre, setNewGenre] = useState("");
  const [genreList, setGenreList] = useState([]);

  // Crea l'array dei generi
  useEffect(() => {
    for (let i = 0; i < filmList.length; i++) {
      const curFilm = filmList[i];
      if (genreList.includes(curFilm.genre) === false) {
        genreList.push(curFilm.genre);
      }
    }
  }, [filmList]);

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
    // Per avere la prima lettera maiuscola
    let newGenreCapitalized;
    if (newGenre) {
      let firstLetter = newGenre[0].toUpperCase();
      let remainingLetters = newGenre.slice(1);
      newGenreCapitalized = firstLetter + remainingLetters;
    }

    // Crea oggetto nuovo film
    const filmGenre =
      newFilmGenre === "altro" ? newGenreCapitalized : newFilmGenre;
    const newFilm = { title: newFilmTitle, genre: filmGenre };

    setFilmList((prev) => [...prev, newFilm]);

    // Reset
    setNewFilmGenre("");
    setNewFilmTitle("");
    setNewGenre("");
    setShowForm(!showForm);
  }

  return (
    <>
      <main className="min-h-screen pt-8 lg:pt-16">
        <h1 className="container py-8">Il miglior catalogo per film</h1>

        {/* ADD FILM FORM */}
        <NewFilmFormModal
          handleShowForm={() => setShowForm(!showForm)}
          showForm={showForm}
          handleCloseForm={() => setShowForm(!showForm)}
          titleValue={newFilmTitle}
          handleTitleInputChange={(e) => setNewFilmTitle(e.target.value)}
          genreValue={newFilmGenre}
          handleGenreSelectChange={(e) => setNewFilmGenre(e.target.value)}
          genreList={genreList}
          newGenre={newGenre}
          handleNewGenreInputChange={(e) => setNewGenre(e.target.value)}
          handleSubmit={addFilm}
        />

        {/* SEARCH FORM SECTION */}
        <Filter
          titleInputValue={titleFilter}
          onTitleInputChange={(e) => setTitleFilter(e.target.value)}
          genreValue={genreFilter}
          onGenreSelectChange={(e) => setGenreFilter(e.target.value)}
          genreList={genreList}
        />

        {/* FILM CATALOGUE */}
        <section className="mt-8">
          <div className="container">
            <h2 className="py-4">I tuoi film</h2>

            <div className="film-container py-4">
              {filteredList.length ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {filteredList.map((curFilm, index) => (
                    <FilmCard key={index} curFilm={curFilm} />
                  ))}
                </ul>
              ) : (
                <NoResult />
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
