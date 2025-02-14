"use client";

import Text from "@/components/Title";
import { useTranslations } from "next-intl";
import Card from "@/components/Cards";
import StateOfLang from "@/components/StateOfLang";
import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "@/i18n/routing";

const Index = () => {
  const [mode, setMode] = useState(true);
  const locale = useLocale();
  const router = useRouter();

  const switchMode = () => {
    setMode(!mode);
    document.body.classList.toggle("dark");
  };

  const switchLocale = () => {
    if (locale === "ru") router.replace("/", { locale: "en" });
    else router.replace("/", { locale: "ru" });
  };

  const t = useTranslations("HomePage");

  return (
    <div className='w-[1020px] ml-auto mr-auto bg-white dark:bg-gray-500 h-screen '>
      <div className='w-full flex justify-end mb-10'>
        <button
          onClick={switchMode}
          className='text-white dark:bg-sky-500 bg-sky-500 hover:bg-sky-700 p-2 rounded-lg'
        >
          {mode ? t("btn.light") : t("btn.dark")}
        </button>

        <button
          onClick={switchLocale}
          className='ml-5 text-white dark:bg-sky-500 bg-sky-500 hover:bg-sky-700 p-2 rounded-lg'
        >
          {locale}
        </button>
      </div>

      <div>
        <div className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5  w-100'>
          <h1 className='text-black dark:text-white text-2xl font-bold mt-5 text-base font-medium tracking-tight flex justify-center'>
            {t("title")}
          </h1>

          <Text text={t("text")} />
        </div>

        <div className='bg-white mt-10 dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5  w-100'>
          <Text text={t("descr")} />
        </div>

        <div className='flex'>
          {Array.from({ length: 3 }).map((el, index) => (
            <Card
              key={index}
              title={t(`cards.${index}.title`)}
              text={t(`cards.${index}.text`)}
            />
          ))}
        </div>

        <div className='bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5  w-100'>
          <StateOfLang />
        </div>
      </div>
    </div>
  );
};
export default Index;
