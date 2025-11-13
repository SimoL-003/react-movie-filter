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
      {/* ADD FILM BUTTON */}
      <button
        onClick={handleShowForm}
        className={`rounded-full w-14 h-14 md:w-fit md:h-auto text-lg fixed bottom-8 right-8 hover:scale-120 z-40 shadow-2xl ${
          showForm ? "hidden" : "block"
        }`}
      >
        <span className="hidden md:inline">Aggiungi film </span>+
      </button>

      {/* FORM SECTION */}
      <section className={`film-form ${showForm ? "flex" : "hidden"}`}>
        <div className="w-[90vw] h-[90vh] sm:w-[60%] sm:h-[70%] mx-auto my-auto p-[50px] flex flex-col justify-center bg-light-gray rounded-2xl relative">
          <h2 className=" my-10 text-center text-3xl">
            Aggiungi un nuovo film alla lista
          </h2>

          {/* Close form button */}
          <button
            className="rounded-full w-8 h-8 text-xs absolute top-4 right-4 z-40 bg-red-700 p-0 text-white border-0"
            onClick={handleCloseForm}
          >
            x
          </button>

          {/* Form */}
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
