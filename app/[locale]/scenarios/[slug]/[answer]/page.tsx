"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/[locale]/navigation";

import { ReferencesList } from "components/referencesList";
import { Progress } from "@/components/progress";

export default function Page({
  params,
}: {
  params: { locale: string; slug: string; answer: string };
}) {
  const { locale, slug, answer } = params;
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
      <img
        src={`/images/pin-${answer}.png`}
        className="overlay-pin-answer-header"
      />
      <Progress scenarios={scenarios} scenarioIndex={scenarioIndex} />
      <h1 className="text-dark-blueish mt-[10rem] text-[3rem] leading-[3.25rem] mb-5">
        {scenario.answers[answer].title}
      </h1>
      <p className="text-center">{scenario.answers[answer].description}</p>
      <p className="flex my-5">
        <Link
          href={nextScenario ? `/scenarios/${nextScenario.slug}` : "/debrief"}
          className="flex justify-center items-center hover:bg-darker-blueish text-white mx-auto red-button"
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
      </p>
      <h2 className="like-h3 has-title-background-line mt-10 mb-10 text-5xl">
        <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2 text-5xl">
          {t("learn-more")}
        </span>
      </h2>
      <p className="text-center">{scenario["learn-more"]}</p>
      <img
        src={`/images/${locale}/scenarios/${slug}/learn-more.png`}
        alt={t("learn-more")}
        className="display-block my-5"
      />
      {scenario.references && (
        <>
          <h2 className="like-h3 has-title-background-line mt-10 mb-10 text-5xl">
            <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2 text-5xl">
              {t("references")}
            </span>
          </h2>
          <ReferencesList references={scenario.references} />
        </>
      )}
    </>
  );
}
