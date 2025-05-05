import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img
          src="https://www.beetrack.com/hs-fs/hubfs/transporte%20logistico%20pdf.jpg?width=724&name=transporte%20logistico%20pdf.jpg"
          alt="logo"
          className={styles.imgRow}
        />

        <div className={styles.containerText}>
          <h1 className={styles.title}>All About Penger Solution</h1>
          <h2 className={styles.subtitle}>
            PROFESSIONALISM. EXCELLENCE. TIMELINESS
          </h2>
          <p className={styles.description}>
            Fast, efficient, and honest, Penger Solution has become a reputable
            and well-known Logistics Service. Our team is up for every job,
            managing projects with the skill and experience our clients have
            come to expect. We want our customers to be satisfied with our work,
            which is why we provide open communication channels throughout the
            duration of each project.
          </p>
        </div>
      </div>
    </div>
  );
}
