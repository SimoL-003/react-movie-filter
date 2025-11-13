export default function Filter({
  titleInputValue,
  onTitleInputChange,
  genreValue,
  onGenreSelectChange,
  genreList,
}) {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Title input */}
          <label htmlFor="search-title" className="invisible absolute">
            Cerca in base al titolo
          </label>
          <input
            type="text"
            name="search-title"
            id="search-title"
            placeholder="Cerca un film..."
            value={titleInputValue}
            onChange={onTitleInputChange}
          />

          {/* Genre select */}
          <label htmlFor="filter-genre" className="invisible absolute">
            Scegli un genere:
          </label>
          <select
            name="filter-genre"
            id="filter-genre"
            value={genreValue}
            onChange={onGenreSelectChange}
          >
            <option value="">-- Filtra per genere --</option>
            {genreList.map((curGenre, index) => (
              <option key={index} value={curGenre}>
                {curGenre}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
