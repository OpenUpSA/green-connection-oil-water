"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/[locale]/navigation";

import { useEffect } from "react";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("how-does-it-work");
  const scenarios = t.raw("scenarios");

  return (
    <>
      <h1>{tP("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <p>{tP.rich("intro")}</p>
      <Link
        href={`/scenarios/${scenarios[0].slug}`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("get-started")}
      </Link>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod
      </p>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod
      </p>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmodlorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod
      </p>
    </>
  );
}
