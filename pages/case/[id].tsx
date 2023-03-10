import Layout from "@/components/layout/Layout";
import { Case } from "@/components/screens/case/Case/Case";
import { casesData } from "@/utils/cases.data";
import { useRouter } from "next/router";
import React from "react";

const CaseItem = () => {
  const router = useRouter();
  const { id } = router.query;

  const currentItem = casesData.find((item) => item.id === Number(id));

  console.log(currentItem);

  return (
    <>
      <Layout
        title={currentItem?.title ? currentItem.title : "Кейс"}
        description={currentItem?.description}
      >
        <Case
          results={currentItem?.results ? currentItem?.results : [""]}
          title={currentItem?.title ? currentItem.title : ""}
          description={currentItem?.description ? currentItem.description : ""}
          imageUrl={currentItem?.imageUrl ? currentItem.imageUrl : ""}
        />
      </Layout>
    </>
  );
};

export default CaseItem;
