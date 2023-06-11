import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import styles from "@/app/styles/common.module.css";

const Page = async ({params})=> {
  const id = params.id

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ad9af339d5msh21494400ef67793p175260jsndf4ccf089d7c",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const mainData = data[0].details;
  console.log(mainData);

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>Netflix \ <span>{mainData.type}</span></h2>
        <div className={styles.card_section}>
          <Image
            src={mainData.backgroundImage.url}
            alt={mainData.title}
            height={400}
            width={300}
          />
        </div>
        <div>
            <h1>{mainData.title}</h1>
            <p>{mainData.synopsis}</p>
        </div>
      </div>
    </>
  )
}

export default Page