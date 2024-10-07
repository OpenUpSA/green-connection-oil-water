"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/[locale]/navigation";
import { Fragment, Key } from "react";

import { ReferencesList } from "components/referencesList";
import { Progress } from "@/components/progress";

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
      {scenario.format != "bonus" && (
        <img src="/images/pin-header.png" className="overlay-pin-header" />
      )}
      {scenario.format == "bonus" && (
        <img src="/images/pin-bonus.png" className="overlay-pin-bonus" />
      )}
      <Progress scenarios={scenarios} scenarioIndex={scenarioIndex} />
      {scenario.format != "bonus" && (
        <p className="text-center ff-new-title-regular text-4xl">
          {t("scenario-count")}
          {scenarioIndex + 1}
        </p>
      )}
      <h1 className="hidden">{t("title")}</h1>
      {scenario.format != "bonus" && <h2>{scenario.title}</h2>}
      {scenario["sub-title"] && (
        <h3 className="text-dark-blueish mb-5 leading-[4.5rem] has-title-ring-wide">
          {scenario["sub-title"]}
        </h3>
      )}
      {scenario.sections?.map(
        (
          section: { image: string; heading: string; text: string },
          index: number
        ) => (
          <Fragment key={index}>
            {section.image && (
              <img
                src={`/images/${locale}/scenarios/${slug}/${section.image}`}
                alt={scenario.title}
                className="display-block my-5"
              />
            )}

            {section.heading && (
              <h3 className="has-title-background-line mt-5 mb-10 text-5xl">
                <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2">
                  {section.heading}
                </span>
              </h3>
            )}
            {section.text && (
              <p
                className={`text-center has-pin-${
                  index > 0 ? "torn-" : ""
                }background pt-[6rem] pb-5`}
              >
                <span className="block bg-white px-5 pb-5">{section.text}</span>
              </p>
            )}
          </Fragment>
        )
      )}
      {scenario.options ? (
        <>
          <h3 className="has-title-background-line mt-5 mb-[6rem] text-5xl">
            <span className="text-dark-blueish has-title-tail bg-zinc-100 px-6 pt-2 pb-[4rem]">
              {t("your-options")}
            </span>
          </h3>
          <ul>
            {scenario.options.map(
              (option: { goto: string; text: string }, index: Key) => (
                <li key={index} className="mb-5 has-option-background py-6 animate-slide-up">
                  <Link href={`/scenarios/${scenario.slug}/${option.goto}`} className="block bg-white pt-7 pb-1">
                    <label style={{ display: "flex", alignItems: "center" }} className="has-option-circle-background block pl-[5.5rem] pr-5 cursor-pointer min-h-10">
                      <input type="radio" className="hidden" />
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
