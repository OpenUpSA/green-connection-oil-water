"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";

import { SharingList } from "components/sharingList";
import { FollowList } from "components/followList";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("debrief");

  return (
    <>
      <h1 className="text-dark-blueish">{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <p className="text-center my-5">{tP.rich("intro")}</p>
      <h3 className="has-title-background-line my-10 text-4xl">
        <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2">
          {tP("share-the-game.heading")}
        </span>
      </h3>
      <p className="text-center my-5">{tP.rich("share-the-game.text")}</p>
      <div className="grid justify-items-center">
        <SharingList />
      </div>
      <h3 className="has-title-background-line my-10 text-4xl">
        <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2">
          {tP("follow-green-connection.heading")}
        </span>
      </h3>
      <p className="text-center my-5">{tP.rich("follow-green-connection.text")}</p>
      <div className="grid justify-items-center">
        <FollowList />
      </div>
      <h3 className="has-title-background-line my-10 text-4xl">
        <span className="text-dark-blueish has-title-underline bg-zinc-100 px-6 py-2">
          {tP("check-our-sources.heading")}
        </span>
      </h3>
      <p className="text-center">{tP.rich("check-our-sources.text")}</p>
      <p className="mt-10">
        <Link
          href={`/references`}
          className="flex justify-center items-center hover:bg-darker-blueish text-white mx-auto red-button"
        >
          {tP("references")}
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
      <p className="text-center m-7 mt-5 text-sm">
        {t("information")}
      </p>
    </>
  );
}
