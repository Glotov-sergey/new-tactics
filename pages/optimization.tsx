import Layout from "@/components/layout/Layout";
import { ServiceTemplate } from "@/components/screens/service/ServiceTemplate";
import { NextPage } from "next";

const Optimization: NextPage = () => {
  return (
    <Layout
      title="Оптимизация и защита"
      description="страница услуги оптимизации и защиты"
      keywords={["Оптимизация", "Защита", "Услуга"]}
    >
      <ServiceTemplate
        title="Оптимизация и защита"
        advertises={[
          "Используем всю мощность сервера для разделения пользовательких запросов и обращений к Базе Данных для ускорения вашего сайта или системы. Полностью оптимизируем интерфейс и избавляемся от лишних и 'тяжелых' элементов для загрузки. Моментальный отклик системы за счет уникальных программных решений",
        ]}
        label="Оптимизация и защита"
        mainContent="Все данные надежно шифруются первичным и вторичным алгоритмом шифрования с соблюдением всех современных стандартов Информационной Безопасности, заверенных Министерством Цифрового Развития и связи РФ."
      />
    </Layout>
  );
};

export default Optimization;
