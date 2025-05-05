import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <img
          src="http://www.wirsolut.com/images/contacto/imagen-contacto-wirsolut.png"
          alt="log"
          className={styles.img}
        />

        <div className={styles.containerText}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>3511 NW 113th ct</p>
          <p className={styles.text}>Doral FL 33178</p>
          <p className={styles.text}>pengersolutionsllc@gmail.com</p>
          <p className={styles.text}>+1 (786) 834 1705</p>
        </div>
      </div>
    </div>
  );
}
