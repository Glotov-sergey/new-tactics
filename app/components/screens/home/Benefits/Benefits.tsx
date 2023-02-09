import {
  benefitsImg,
  intergrationSvg,
  licenseSvg,
  mobileSvg,
  supportSvg,
} from "@/assets/images/home";
import Image from "next/image";
import { FC } from "react";
import styles from "./Benefits.module.scss";

const Benefits: FC = () => {
  return (
    <section className={styles.benefits}>
      <div className="container">
        <div className={styles.benefitsBody}>
          <div>
            <Image src={benefitsImg} alt="наша команда" />
          </div>
          <div className={styles.info}>
            <div className={styles.benefitsItems}>
              <div className={styles.benefitsItem}>
                <Image src={intergrationSvg} alt="Интеграция" />
                <h3>Интеграция с любыми сервисам</h3>
              </div>
              <div className={styles.benefitsItem}>
                <Image src={supportSvg} alt="Интеграция" />
                <h3>Cопровождение и техническая поддержка 24/7</h3>
              </div>
              <div className={styles.benefitsItem}>
                <Image src={mobileSvg} alt="Интеграция" />
                <h3>Мобильное приложение системы (iOS/android)</h3>
              </div>
              <div className={styles.benefitsItem}>
                <Image src={licenseSvg} alt="Интеграция" />
                <h3>Лицензирование и патентование ПО</h3>
              </div>
            </div>
            <p>
              We don&apos;t just help with your IT needs. We focus on the entire
              ecosystem surrounding it. Bringing together people, process, and
              technology, we pride ourselves on delivering solutions that work
              in reality. Not theory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
