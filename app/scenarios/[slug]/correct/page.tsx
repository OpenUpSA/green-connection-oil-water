"use client";

import { redirect } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";

import scenarios from "../../../data/scenarios.json";

export default function Page({ params }: { params: { slug: string } }) {
  const scenario = scenarios.find((scenario) => scenario.slug === params.slug);

  if (!scenario) {
    redirect("/");
  }

  const scenarioIndex = scenarios.findIndex((s) => s.slug === params.slug);
  const nextScenarioIndex =
    scenarios.findIndex((s) => s.slug === params.slug) + 1;
  const nextScenario = scenarios[nextScenarioIndex];

  useEffect(() => {
    const data = localStorage.getItem("score");
    if (data) {
      const score = JSON.parse(data);
      score[scenarioIndex] = 1;
      localStorage.setItem("score", JSON.stringify(score));
    }
  }, []);

  return (
    <>
      <h1>Green Connection&apos;s Oil &amp; Water</h1>
      <h2>{scenario.title}</h2>
      <h3>{scenario.correct.title}</h3>
      <p>{scenario.correct.description}</p>
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
