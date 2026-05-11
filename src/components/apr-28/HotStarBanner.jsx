import React from "react";
import "./HotstarBanner.css";

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

const HotStarBanner = () => {
  return (
    <div className="banner">
      {/* Flex Panels */}
      <div className="banner-panels">
        {movies.map((movie) => (
          <div
            className="panel"
            style={{ backgroundImage: `url(${movie.image})` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="overlay" />

      {/* Center Content */}
      <div className="banner-content">
        <div className="logo-wrapper">
          <div className="disney">
            Disney<span className="plus">+</span>
          </div>
          <div className="arc"></div>
          <div className="hotstar">hotstar</div>
        </div>

        <div className="languages">
          <span>English</span>
          <span>हिंदी</span>
          <span>தமிழ்</span>
          <span>తెలుగు</span>
        </div>
      </div>
    </div>
  );
};

export default HotStarBanner;
