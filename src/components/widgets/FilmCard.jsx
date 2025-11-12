export default function FilmCard({ curFilm }) {
  return (
    <li className="film-card">
      <h4 className="mb-4">{curFilm.title}</h4>
      <span className="badge">{curFilm.genre}</span>
    </li>
  );
}
