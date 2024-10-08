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
    <Fragment>
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
      {scenario.format !== "bonus" && <h2 className="leading-[1em]">{scenario.title}</h2>}
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
                className="display-block my-5 w-full"
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
        <Fragment>
          <h3 className="has-title-background-line mt-5 mb-[6rem] text-5xl">
            <span className="text-dark-blueish has-title-tail bg-zinc-100 px-6 pt-2 pb-[4rem]">
              {t("your-options")}
            </span>
          </h3>
          <ul>
            {scenario.options.map(
              (option: { goto: string; text: string }, index: Key) => (
                <li
                  key={index}
                  className="mb-5 has-option-background py-6 animate-slide-up"
                >
                  <Link
                    href={`/scenarios/${scenario.slug}/${option.goto}`}
                    className="block bg-white pt-7 pb-1"
                  >
                    <label
                      style={{ display: "flex", alignItems: "center" }}
                      className="has-option-circle-background block pl-[5.5rem] pr-5 cursor-pointer min-h-10"
                    >
                      <input type="radio" className="hidden" />
                      {option.text}
                    </label>
                  </Link>
                </li>
              )
            )}
          </ul>
        </Fragment>
      ) : (
        <Link
          href={nextScenario ? `/scenarios/${nextScenario.slug}` : '/debrief'}
          className="flex justify-center items-center hover:bg-darker-blueish text-white mx-auto red-button my-5"
        >
          {t(nextScenario ? "next-scenario" : "finish")}
          <svg
            viewBox="0 0 43 25"
            fill="none"
            width="100%"
            vector-path="non-scaling-stroke"
            aria-hidden="true"
            height="100%"
            className="float-right ml-4 font-serif"
          >
            <path
              d="M1.86133 15.1452C14.0743 13.8597 26.4378 14.3777 38.7025 14.3777"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
            <path
              d="M27.8899 2.21729C30.6493 5.16986 33.4775 7.9993 36.657 10.5025C37.7327 11.3494 38.8318 12.1638 39.8748 13.0519C40.1256 13.2654 41.0406 13.9036 41.1339 14.3265C41.2152 14.695 40.2525 15.3177 40.1157 15.4302C39.1696 16.2081 38.207 16.9654 37.2633 17.7463C35.2485 19.4135 33.2496 21.101 31.2475 22.7828"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      )}
      {!scenario.options && scenario.references && (
        <Fragment>
          <h2 className="like-h3 has-title-background-line mt-10 mb-10 text-5xl">
            <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2 text-5xl">
              {t("references")}
            </span>
          </h2>
          <ReferencesList references={scenario.references} />
        </Fragment>
      )}
    </Fragment>
  );
}
