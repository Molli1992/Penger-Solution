import styles from "./providers.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Providers() {
  const swiperStyles = {
    "--swiper-pagination-color": "#192d2f",
    "--swiper-pagination-bullet-inactive-color": "#192d2f",
  };

  const breakpoints = {
    slidesPerView: 1,
    spaceBetween: 0,
  };

  const arrayImgs = [
    {
      id: "1",
      img: "https://prosertek.com/wp-content/uploads/trabajadores-puerto2.jpg",
    },
    {
      id: "2",
      img: "https://img.interempresas.net/fotos/P1663093.jpg",
    },
    {
      id: "3",
      img: "https://www.ceupe.com/images/easyblog_articles/1386/b2ap3_thumbnail_almacen-suministros.jpg",
    },
    {
      id: "4",
      img: "https://www.rrhhdigital.com/userfiles/operario-trincador.jpg",
    },
    {
      id: "5",
      img: "https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2020/03/493253.jpg",
    },
  ];

  return (
    <div className={styles.body}>
      <div className={styles.sliderContainer}>
        <Swiper
          breakpoints={breakpoints}
          navigation={false}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          style={swiperStyles}
          centeredSlides={true}
        >
          {arrayImgs &&
            arrayImgs.map((data) => {
              return (
                <SwiperSlide key={data.id} className={styles.centeredSlide}>
                  <div className={styles.cardSlider}>
                    <img
                      src={data.img}
                      alt="logo"
                      className={styles.imgSlider}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>

      <div className={styles.containerText}>
        <h1 className={styles.title}>About</h1>
        <h2 className={styles.subtitle}>Freight Payment Providers</h2>

        <p className={styles.description}>
          Freight Payment Providers (FPP) are companies that specialize in
          managing the payment and settlement of freight bills for shippers,
          carriers, and other stakeholders in the transportation industry. FPPs
          typically offer a range of services, including invoice processing,
          dispute resolution, carrier payment, and freight audit and analysis.
        </p>

        <p className={styles.description}>
          With the complex and often fragmented nature of the transportation
          industry, FPPs can help streamline payment processes and improve
          visibility into transportation costs. By consolidating and analyzing
          data from multiple sources, FPPs can identify discrepancies, billing
          errors, and overcharges, helping shippers and carriers to save money
          and improve operational efficiency.
        </p>

        <p className={styles.description}>
          FPPs may also offer value-added services such as benchmarking,
          contract negotiation, and transportation management consulting to help
          their clients optimize their logistics operations and stay competitive
          in the marketplace.
        </p>

        <p className={styles.description}>
          Overall, Freight Payment Providers play a critical role in
          facilitating the movement of goods and services around the world, by
          ensuring that the payment and settlement of freight bills is accurate,
          timely, and efficient.
        </p>
      </div>
    </div>
  );
}
