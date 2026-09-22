import './MovieComponent.css';

export const MovieComponent = ({ movie }) => {
  return (
    <div key={movie.id} className="movie-container">
      <ul>
        <li>{movie.id}</li>
        <li>{movie.title}</li>
        <li>{movie.director}</li>
        <li>{movie.rating}</li>
        {movie.genres.map((genre, index) => (
          <li key={`${movie.id}-${genre}-${index}`}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};
