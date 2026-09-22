import { usersData } from "../../data/movies.js";
import { MovieComponent } from "../MovieComponent/MovieComponent.jsx";


const fetchMovieData = () => {
  return usersData;
};

export  const MoviesComponent = () => {
  const movies = fetchMovieData();
  console.log(movies);

  return (
    <div>
      <h1>This is MoviesComponent</h1>
      {movies.map((data, index) => {
        return <MovieComponent key={index} movie={data}/>
      })}
    </div>
  );
};


