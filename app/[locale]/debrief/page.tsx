"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("debrief");

  return (
    <>
      <h1>{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <p>{tP.rich("intro")}</p>
      <Link
        href={`/references`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("references")}
      </Link>
    </>
  );
}
