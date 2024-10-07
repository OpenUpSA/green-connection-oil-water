"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";
import { Fragment } from "react";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("global");
  const tP = useTranslations("how-does-it-work");
  const sections = tP.raw("sections");
  const scenarios = t.raw("scenarios");

  return (
    <>
      <img
        src="/images/pin-header.png"
        className="overlay-pin-header overlay-img-top-left overlay-img-retract-up"
      />
      <h1>{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      {sections?.map(
        (
          section: {
            image: { filename: string; alt: string };
            label: string;
            heading: string;
            text: string;
          },
          index: number
        ) => {
          return (
            <Fragment key={index}>
              {section.label && (
                <h3
                  key={`h3${index}`}
                  className="has-title-ring mt-6 text-gray-800"
                >
                  {section.label}
                </h3>
              )}
              {section.heading && (
                <h4 key={`h4${index}`} className="my-2 text-gray-800">
                  {section.heading}
                </h4>
              )}
              {section.image && (
                <img
                  key={`img${index}`}
                  src={`/images/${locale}/how-does-it-work/${section.image.filename}`}
                  alt={section.image.alt}
                  className="display-block mx-auto mb-3"
                />
              )}
              {section.text && (
                <p key={`p${index}`} className="text-center">
                  {section.text}
                </p>
              )}
            </Fragment>
          );
        }
      )}

      <p className="my-7 text-gray-500 ff-krub-bold text-center">
        {tP("end-line")}
      </p>

      <p className="flex">
        <Link
          href={`/scenarios/${scenarios[0].slug}`}
          className="flex justify-center items-center hover:bg-darker-blueish text-white mx-auto red-button"
        >
          {tP("get-started")}
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
    </>
  );
}
