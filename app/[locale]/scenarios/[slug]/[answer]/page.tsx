"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/[locale]/navigation";

import { ReferencesList } from "components/referencesList";

export default function Page({
  params,
}: {
  params: { slug: string; answer: string };
}) {
  const { slug, answer } = params;
  const t = useTranslations("global");
  const scenarios = t.raw("scenarios");
  const scenario = scenarios.find((scenario: any) => scenario.slug === slug);

  if (!scenario) {
    redirect("/");
  }

  const scenarioIndex = scenarios.findIndex((s: any) => s.slug === slug);
  const nextScenarioIndex =
    scenarios.findIndex((s: any) => s.slug === slug) + 1;
  const nextScenario = scenarios[nextScenarioIndex];

  return (
    <>
      <div className="grid justify-items-center">
        <ul className="flex flex-row gap-4">
          {scenarios.map((s: any, i: number) => (
            <li key={i}>{scenarioIndex >= i ? "🔵" : "⚪"}</li>
          ))}
        </ul>
      </div>
      <h1>{t("title")}</h1>
      <h2>{scenario.title}</h2>
      <h3>{scenario.answers[answer].title}</h3>
      <p>{scenario.answers[answer].description}</p>
      {nextScenario ? (
        <Link
          href={`/scenarios/${nextScenario.slug}`}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("next-scenario")}
        </Link>
      ) : (
        <Link
          href={`/debrief`}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("finish")}
        </Link>
      )}
      {scenario.references && (
        <>
          <h3>{t("references")}</h3>
          <ReferencesList references={scenario.references} />
        </>
      )}
    </>
  );
}
