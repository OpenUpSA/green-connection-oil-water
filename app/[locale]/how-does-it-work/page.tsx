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
      <p>
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
      <h3>{tP("what-is-petro-sa.heading")}</h3>
      <p>{tP("what-is-petro-sa.content")}</p>
      <h3>{tP("scenario-steps.heading")}</h3>
      <p>{tP("scenario-steps.content")}</p>

      <h3>{tP("step-1.label")}</h3>
      <h4>{tP("step-1.heading")}</h4>
      <p>
        <Image
          src={`/images/${locale}/how-does-it-work/step-1.png`}
          alt="Cork board with post it notes"
          width={950}
          height={135}
          sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
          className="display-block max-w-lg"
        />
        {tP("step-1.content")}
      </p>

      <h3>{tP("step-2.label")}</h3>
      <h4>{tP("step-2.heading")}</h4>
      <p>
        <Image
          src={`/images/${locale}/how-does-it-work/step-2.png`}
          alt="Cork board with post it notes"
          width={950}
          height={135}
          sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
          className="display-block max-w-lg"
        />
        {tP("step-2.content")}
      </p>

      <h3>{tP("step-3.label")}</h3>
      <h4>{tP("step-3.heading")}</h4>
      <p>
        <Image
          src={`/images/${locale}/how-does-it-work/step-3.png`}
          alt="Cork board with post it notes"
          width={950}
          height={135}
          sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
          className="display-block max-w-lg"
        />
        {tP("step-3.content")}
      </p>

      <h3>{tP("step-4.label")}</h3>
      <h4>{tP("step-4.heading")}</h4>
      <p>
        <Image
          src={`/images/${locale}/how-does-it-work/step-4.png`}
          alt="Cork board with post it notes"
          width={950}
          height={135}
          sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
          className="display-block max-w-lg"
        />
        {tP("step-4.content")}
      </p>

      <p className="ff-krub-bold text-center">{tP("end-line")}</p>

      <Link
        href={`/scenarios/${scenarios[0].slug}`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("get-started")}
      </Link>
    </>
  );
}
