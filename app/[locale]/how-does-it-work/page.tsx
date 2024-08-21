"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";
import Image from "next/image";

export default function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("global");
  const tP = useTranslations("how-does-it-work");
  const scenarios = t.raw("scenarios");

  return (
    <>
      <h1>{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <p>{tP.rich("intro")}</p>
      <h3>{tP("your-role.heading")}</h3>
      <p className="m-9 pb-6 sm:mb-8 sm:mt-7">
        <Image
          src={`/images/${locale}/how-does-it-work/your-role.png`}
          alt="Image of silhouetted portraits"
          width={950}
          height={839}
          sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
          className="display-block max-w-lg"
        />
        {tP("your-role.content")}
      </p>
      <Link
        href={`/scenarios/${scenarios[0].slug}`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("get-started")}
      </Link>
    </>
  );
}
