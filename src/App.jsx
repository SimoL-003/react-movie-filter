import { useState, useEffect } from "react";
import filmList from "./data/filmList.js"; /* title, genre */

function App() {
  return (
    <>
      <main className="min-h-screen">
        <div className="container py-16">
          <h1>Il nostro catalogo</h1>
          <section className="form"></section>
          <section className="catalogo py-8">
            <h2>I film della settimana</h2>
            <div className="film-container py-4">
              <ul className="grid grid-cols-5 gap-4">
                {filmList.map((curFilm) => (
                  <li className="p-4 border-2">
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
