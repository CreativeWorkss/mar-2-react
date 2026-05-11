import React from "react";
import "./Hello.css";

function Hello() {
  const movies = [
    {
      title: "Mandalorian",
      image:
        "https://image.tmdb.org/t/p/original/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    },
    {
      title: "Thor",
      image:
        "https://image.tmdb.org/t/p/original/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    },
    {
      title: "Lion King",
      image:
        "https://image.tmdb.org/t/p/original/1TUg5pO1VZ4B0Q1amk3OlXvlpXV.jpg",
    },
    {
      title: "Spider-Man No Way Home",
      image:
        "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
    },
    {
      title: "Iron Man",
      image:
        "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
    },
  ];

  let moviesData = movies.map((value) => {
    return (
      <div className="panel">
        <img className="panel-image" src={value.image} />
      </div>
    );
  });

  return (
    <div className="banner">
      <div className="main">{moviesData}</div>
    </div>
  );
}

export default Hello;
