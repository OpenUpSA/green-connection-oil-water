"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/[locale]/navigation";

import { Key } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const t = useTranslations("global");
  const scenarios = t.raw("scenarios");
  const scenario = scenarios.find(
    (scenario: { slug: string }) => scenario.slug === params.slug
  );
  const scenarioIndex = scenarios.findIndex(
    (s: { slug: string }) => s.slug === params.slug
  );
  if (!scenario) {
    redirect("/");
  }
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
      <h3>The setup</h3>
      <p>{scenario.setup}</p>
      <h3>The dilema</h3>
      <p>{scenario.dilema}</p>
      <h3>Your options</h3>
      <ul>
        {scenario.options.map(
          (option: { goto: string; text: string }, index: Key) => (
            <li key={index} className="mb-5">
              <Link href={`/scenarios/${scenario.slug}/${option.goto}`}>
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input type="radio" className="mr-5" />
                  {option.text}
                </label>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}
