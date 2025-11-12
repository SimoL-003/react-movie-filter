import NewFilmForm from "../widgets/NewFilmForm";

export default function NewFilmFormModal({
  handleShowForm,
  showForm,
  handleCloseForm,
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
    <>
      {" "}
      <button
        onClick={handleShowForm}
        className="rounded-full w-14 h-14 text-lg fixed bottom-8 right-8 hover:scale-150 z-40"
      >
        +
      </button>
      <section className={`film-form ${showForm ? "flex" : "hidden"}`}>
        <div className="w-[60%] h-[70%] mx-auto my-auto p-[50px] flex flex-col justify-center gap-12 bg-light-gray rounded-2xl relative">
          <h2 className="py-4 text-center text-3xl">
            Aggiungi un nuovo film alla lista
          </h2>
          <button
            className="rounded-full w-8 h-8 text-xs absolute top-4 right-4 z-40 bg-red-700 p-0 text-white border-0"
            onClick={handleCloseForm}
          >
            x
          </button>
          <NewFilmForm
            titleValue={titleValue}
            handleTitleInputChange={handleTitleInputChange}
            genreValue={genreValue}
            handleGenreSelectChange={handleGenreSelectChange}
            genreList={genreList}
            newGenre={newGenre}
            handleNewGenreInputChange={handleNewGenreInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </>
  );
}
