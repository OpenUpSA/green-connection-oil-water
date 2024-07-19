"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/navigation";

import { useEffect } from "react";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("home");
  const scenarios = t.raw("scenarios");
  useEffect(() => {
    localStorage.setItem(
      "score",
      JSON.stringify(Array.from({ length: scenarios.length }, (v, i) => -1))
    );
  });

  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("sub-title")}</h2>
      <Link
        href={`/scenarios/${scenarios[0].slug}`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("get-started")}
      </Link>
    </>
  );
}
