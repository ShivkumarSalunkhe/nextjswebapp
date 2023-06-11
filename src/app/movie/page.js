import React from "react";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ad9af339d5msh21494400ef67793p175260jsndf4ccf089d7c",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data.titles;
  console.log(mainData);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {mainData.map((currElem) => {
              return <MovieCard key={currElem.id} {...currElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
