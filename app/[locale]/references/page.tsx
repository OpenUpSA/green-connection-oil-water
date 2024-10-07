"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";

import { ReferencesList } from "components/referencesList";
import { Key } from "react";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("references");
  const scenarios = t.raw("scenarios");

  return (
    <>
      <h1 className="text-dark-blueish">{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      {scenarios.map((scenario: any, index: number) => (
        <>
          {scenario.references && (
            <>
              <h3>
                {t("scenario-count")}
                {index + 1}
              </h3>
              <ReferencesList references={scenario.references} />
            </>
          )}
        </>
      ))}

      <Link
        href={`/debrief`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("back")}
      </Link>
    </>
  );
}
