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
      <h1>{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <p className="text-center">{tP.rich("intro")}</p>
      <h3>{tP("share-the-game.heading")}</h3>
      <p className="text-center">{tP.rich("share-the-game.text")}</p>
      <div className="grid justify-items-center">
        <SharingList />
      </div>
      <h3>{tP("follow-green-connection.heading")}</h3>
      <p className="text-center">{tP.rich("follow-green-connection.text")}</p>
      <div className="grid justify-items-center">
        <FollowList />
      </div>
      <h3>{tP("check-our-sources.heading")}</h3>
      <p className="text-center">{tP.rich("check-our-sources.text")}</p>
      <Link
        href={`/references`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("references")}
      </Link>
    </>
  );
}
