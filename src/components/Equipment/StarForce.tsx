import styles from './starForce.module.css';

interface SProps {
  starCount: number;
}

export default function StarForce({ starCount }: SProps) {
  const totalStars = Array(25).fill(false).map((_, index) => index < starCount);

  const starRows = [];
  for (let i = 0; i < totalStars.length; i += 5) {
    starRows.push(totalStars.slice(i, i + 5));
  }

  return (
    <div className={styles.starContainer}>
      {starRows.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.starRow}>
          {row.map((isFilled, starIndex) => (
            <span key={starIndex} className={isFilled ? styles.filledStar : styles.emptyStar}>
              ★
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
