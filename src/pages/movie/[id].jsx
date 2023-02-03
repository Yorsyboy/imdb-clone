import Header from "components/Header";
import Navbar from "components/Navbar";
import Image from "next/image";
import React from "react";
import Providers from "../Providers";

export default function MoviesDetails({ movie }) {
  let genres = movie.genres.map((genre) => genre.name);
  let result = '\n  ' + genres.join(',\n  ') + '\n';
  return (
    <Providers>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* <MovieDetail /> */}
      <div className="w-full">
        <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            className="rounded-lg"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Movie poster"
          ></Image>
          <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">
              {movie.title || movie.name}
            </h2>
            <p className="text-lg mb-3">
              <span className="font-semibold mr-1">Overview:</span>
              {movie.overview}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Date Released:</span>
              {movie.release_date || movie.first_air_date}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Rating:</span>
              {movie.vote_average}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Popularity:</span>
              {movie.popularity}
            </p>
            <p className="mb-3">
              <span className="font-semibold mr-1">Genre:</span>
              {result}
            </p>
          </div>
        </div>
      </div>
    </Providers>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  const MovieDetail = await res.json();

  return {
    props: {
      movie: MovieDetail,
    },
  };
}
