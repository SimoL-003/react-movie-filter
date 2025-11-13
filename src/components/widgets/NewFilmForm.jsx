import SubmitButton from "../elements/SubmitButton";

export default function NewFilmForm({
  titleValue,
  handleTitleInputChange,
  genreValue,
  handleGenreSelectChange,
  genreList,
  newGenre,
  handleNewGenreInputChange,
  handleSubmit,
}) {
  return (
    <form action="" onSubmit={handleSubmit}>
      {/* INPUTS */}
      <div className="flex flex-col gap-8">
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
            value={titleValue}
            onChange={handleTitleInputChange}
            className="w-full"
          />
        </div>

        {/* Select genere */}
        <div className="flex flex-col md:flex-row gap-4">
          <label htmlFor="genre" className="invisible absolute">
            Scegli un genere:
          </label>
          <select
            required
            name="genre"
            id="genre"
            value={genreValue}
            onChange={handleGenreSelectChange}
            className={genreValue === "altro" ? "stretch md:w-1/3" : "stretch"}
          >
            <option value="">-- Scegli un genere --</option>
            {genreList.map((curGenre, index) => (
              <option key={index} value={curGenre}>
                {curGenre}
              </option>
            ))}
            <option value="altro">Altro</option>
          </select>
          {genreValue === "altro" && (
            <input
              id="custom-genre"
              name="custom-genre"
              placeholder="Aggiungi un nuovo genere"
              required
              value={newGenre}
              onChange={handleNewGenreInputChange}
              className="stretch md:w-2/3"
            />
          )}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="text-center my-10">
        <SubmitButton text={"Aggiungi film"} />
      </div>
    </form>
  );
}
