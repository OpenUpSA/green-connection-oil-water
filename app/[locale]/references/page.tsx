"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";

import { ReferencesList } from "components/referencesList";
import { Fragment, Key } from "react";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("references");
  const scenarios = t.raw("scenarios");

  return (
    <Fragment>
      <h1 className="text-dark-blueish">{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      {scenarios.map((scenario: any, index: number) => (
        <Fragment>
          {scenario.references && (
            <Fragment>
              <h3 className="text-dark-blueish mb-5 leading-[4.5rem] has-title-ring-wide">
                {t("scenario-count")}
                {index + 1}
              </h3>
              <ReferencesList references={scenario.references} />
            </Fragment>
          )}
        </Fragment>
      ))}
      <p className="my-10">
        <Link
          href={`/debrief`}
          className="flex justify-center items-center hover:bg-darker-blueish text-white mx-auto red-button"
        >
          <svg
            viewBox="0 0 43 25"
            fill="none"
            width="100%"
            vector-path="non-scaling-stroke"
            aria-hidden="true"
            height="100%"
            className="float-right mr-4 font-serif scale-x-[-1]"
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
          {tP("back")}
        </Link>
      </p>
    </Fragment>
  );
}
