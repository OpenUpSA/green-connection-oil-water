"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/navigation";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("home");

  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("sub-title")}</h2>
      <Link
        href="/intro"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("intro")}
      </Link>
    </>
  );
}
