"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/navigation";
import { useEffect } from "react";

import scenarios from "../../../../data/scenarios.json";

export default function Page({ params }: { params: { slug: string } }) {
  const t = useTranslations("global");
  const scenario = scenarios.find((scenario) => scenario.slug === params.slug);
  const scenarioIndex = scenarios.findIndex((s) => s.slug === params.slug);
  const nextScenarioIndex =
    scenarios.findIndex((s) => s.slug === params.slug) + 1;
  const nextScenario = scenarios[nextScenarioIndex];

  if (!scenario) {
    redirect("/");
  }

  useEffect(() => {
    const data = localStorage.getItem("score");
    if (data) {
      const score = JSON.parse(data);
      score[scenarioIndex] = 0;
      localStorage.setItem("score", JSON.stringify(score));
    }
  });

  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{scenario.title}</h2>
      <h3>{scenario.incorrect.title}</h3>
      <p>{scenario.incorrect.description}</p>
      {nextScenario ? (
        <Link
          href={`/scenarios/${nextScenario.slug}`}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Scenario
        </Link>
      ) : (
        <Link
          href={`/results`}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Finish!
        </Link>
      )}
    </>
  );
}
