import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Penger Solution</h1>
        <h2 className={styles.subtitle}>ALWAYS AT YOUR SERVICE</h2>
        <p className={styles.description}>
          Fair prices, superior quality and exceptional customer service are
          guaranteed when you work with us.
        </p>

        <img
          src="https://static.dw.com/image/53823423_605.jpg"
          alt="logo"
          className={styles.img}
        />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>About Penger Solution</h1>
        <h2 className={styles.subtitle}>HONEST & EFFICIENT WORK</h2>
        <p className={styles.description}>
          Order fulfillment: Processing orders from customers, picking, packing,
          and shipping products to the end consumer in a timely and efficient
          manner.
        </p>

        <img
          src="https://www.nationalgeographic.com.es/medio/2022/09/07/medios-de-transporte_b5d866d8_1280x720.jpg"
          alt="logo"
          className={styles.img}
        />
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Our Services</h1>
        <h2 className={styles.subtitle}>WHAT WE PROVIDE</h2>
        <p className={styles.description}>
          Transportation management: Coordinating the movement of goods via
          various modes of transport such as trucks, ships, planes, and trains.
        </p>
        <p className={styles.description}>
          Inventory management: Optimizing inventory levels to ensure that the
          right amount of goods is available at the right time, while minimizing
          inventory carrying costs.
        </p>
      </div>

      <div className={`${styles.container} ${styles.row}`}>
        <img
          src="https://media.ambito.com/p/1689e60e024601bde779f60f9d041ebe/adjuntos/239/imagenes/040/076/0040076901/1200x675/smart/aduanasjpg.jpg"
          alt="logo"
          className={styles.imgRow}
        />

        <div className={styles.containerText}>
          <h2 className={styles.subtitle}>Supply chain management</h2>
          <p className={styles.description}>
            Managing the entire supply chain, from suppliers to manufacturers to
            distributors to retailers and finally to consumers, to ensure
            seamless integration and maximum efficiency.
          </p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.row}`}>
        <div className={styles.containerText}>
          <h2 className={styles.subtitle}>Sustainability</h2>
          <p className={styles.description}>
            Implementing environmentally responsible practices, such as using
            fuel-efficient vehicles, reducing packaging waste, and adopting
            renewable energy sources.
          </p>
        </div>

        <img
          src="https://mobilidade.estadao.com.br/wp-content/uploads/2019/11/iStock-1021291420.jpg"
          alt="logo"
          className={styles.imgRow}
        />
      </div>
    </div>
  );
}
