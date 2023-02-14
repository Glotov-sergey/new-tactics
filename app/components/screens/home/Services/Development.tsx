import { FC } from "react";

import { motion } from "framer-motion";
import styles from "./Services.module.scss";
import Image from "next/image";
import { developmentSvg } from "@/assets/images/home";
import Link from "next/link";

export const Development: FC = () => {
  return (
    <div className={styles.serviceBlock}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          className={styles.servicesImage}
          src={developmentSvg}
          alt="разработка"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={styles.info}
      >
        <h2>Разработка</h2>
        <p>
          Программирование пользовательских моделей и интерфейсов любой
          сложности с использование всех современных инструментов разработки и
          авторских библиотек
        </p>
        <Link href="/development">перейти к услуге</Link>
      </motion.div>
    </div>
  );
};
