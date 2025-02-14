"use client";
import { useTranslations } from "next-intl";

const Index = () => {
  const t = useTranslations("HomePage");

  const title = () => {
    const newTitle = t("stateOfLang").split(" ");
    if (t("locale") === "ru") {
      newTitle.splice(4, 1, `<span>${newTitle[4]}</span>`);
    } else {
      newTitle.splice(6, 1, `<span>${newTitle[6]}</span>`);
    }
    return newTitle.join(" ");
  };

  return (
    <div
      className='text-gray-900 dark:text-white span-wrap'
      dangerouslySetInnerHTML={{ __html: title() }}
    ></div>
  );
};
export default Index;
