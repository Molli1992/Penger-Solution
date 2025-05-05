import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.body}>
      <div className={styles.containerTitle}>
        <h1 className={styles.title}>PROFESSIONAL SERVICES</h1>
        <h2 className={styles.subtitle}>Meeting Your Needs</h2>
      </div>

      <div className={styles.container}>
        <img
          src="https://assets.verizonconnect.com/cdn-cgi/image/width=1900,height=540,format=auto/solutions/uk-fleet/us-desktop-fleet-tracking-banner.jpg"
          alt="logo"
          className={styles.imgRow}
        />

        <div className={styles.containerText}>
          <h2 className={styles.subtitle}>GPS Fleet Tracking</h2>
          <p className={styles.description}>
            Technology solutions: Utilizing the latest technology to optimize
            logistics processes, such as track-and-trace systems, real-time
            inventory tracking, and predictive analytics.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerText}>
          <h2 className={styles.subtitle}>Route Planning</h2>
          <p className={styles.description}>
            Warehousing and distribution: Providing secure, climate- controlled
            storage facilities for goods, as well as managing the sorting,
            packing, and distribution of those goods to their final destination.
          </p>
        </div>

        <img
          src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/a-cartografia-representa-espaco-auxilia-sua-compreensao-5626a9ab82125.jpg"
          alt="logo"
          className={styles.imgRow}
        />
      </div>

      <div className={styles.container}>
        <img
          src="https://aldiaargentina.microjuris.com/wp-content/uploads/2019/03/relacic3b3n-laboral.jpg"
          alt="logo"
          className={styles.imgRow}
        />

        <div className={styles.containerText}>
          <h2 className={styles.subtitle}>Customs brokerage</h2>
          <p className={styles.description}>
            Assisting with customs clearance and compliance to ensure the legal
            import and export of goods.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.containerText}>
          <h2 className={styles.subtitle}>Value-added services</h2>
          <p className={styles.description}>
            Providing additional services such as packaging, labeling, kitting,
            assembly, and quality control.
          </p>
        </div>

        <img
          src="https://www.itc-packaging.com/uploads/job_offers/1024x600%20mozo.jpg"
          alt="logo"
          className={styles.imgRow}
        />
      </div>
    </div>
  );
}
