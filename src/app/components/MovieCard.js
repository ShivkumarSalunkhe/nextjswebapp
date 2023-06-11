import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

function MovieCard(currElem) {
  const { id, type, title, synopsis } = currElem.jawSummary;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image
            src={currElem.jawSummary.backgroundImage.url}
            alt={title}
            height={200}
            width={260}
          />
        </div>
        <div className={styles.card_data}>
            <h2>{`${title.substring(0,18)}...`}</h2>
            <p>{`${synopsis.substring(0,66)}...`}</p>
            <Link href={`/movie/${id}`}>
                <button>
                    Read More
                </button>
            </Link>

        </div>
      </div>
    </>
  );
}

export default MovieCard;
