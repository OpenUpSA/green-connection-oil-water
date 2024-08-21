"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("references");

  return (
    <>
      <h1>{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <Link
        href={`/debrief`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("back")}
      </Link>
    </>
  );
}
