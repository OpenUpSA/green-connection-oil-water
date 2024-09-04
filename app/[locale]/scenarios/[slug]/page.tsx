"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/[locale]/navigation";
import Image from "next/image";
import { Key } from "react";

import { ReferencesList } from "components/referencesList";

export default function Page({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const { locale, slug } = params;
  const t = useTranslations("global");
  const scenarios = t.raw("scenarios");
  const scenario = scenarios.find(
    (scenario: { slug: string }) => scenario.slug === slug
  );
  const scenarioIndex = scenarios.findIndex(
    (s: { slug: string }) => s.slug === slug
  );
  if (!scenario) {
    redirect("/");
  }
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
      <p className="text-center ff-new-title-regular text-2xl">
        {t("scenario-count")}
        {scenarioIndex + 1}
      </p>
      <h1 className="hidden">{t("title")}</h1>

      <h2>{scenario.title}</h2>
      {scenario["sub-title"] && (
        <h3 className="text-dark-blueish sm:text-2xl sm:mb-2">
          {scenario["sub-title"]}
        </h3>
      )}
      {scenario.sections?.map(
        (section: { image: string; heading: string; text: string }) => (
          <>
            {section.image && (
              <Image
                src={`/images/${locale}/scenarios/${slug}/${section.image}`}
                alt={scenario.title}
                sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
                className="display-block max-w-lg mx-auto"
                width="479"
                height="479"
              />
            )}

            {section.heading && <h3>{section.heading}</h3>}
            {section.text && <p>{section.text}</p>}
          </>
        )
      )}
      {scenario.options ? (
        <>
          <h3>{t("your-options")}</h3>
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
      ) : (
        <Link
          href={`/scenarios/${nextScenario.slug}`}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("next-scenario")}
        </Link>
      )}
      {!scenario.options && scenario.references && (
        <>
          <h3>{t("references")}</h3>
          <ReferencesList references={scenario.references} />
        </>
      )}
    </>
  );
}
