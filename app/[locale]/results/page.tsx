"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("results");

  const [score, setScore] = useState([]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("score");
    if (data) {
      const jsonData = JSON.parse(data);
      setScore(jsonData);
      setTotalScore(jsonData.reduce((a: number, b: number) => a + b, 0));
    }
  }, []);
  return (
    <>
      <div className="grid justify-items-center">
        <ul className="flex flex-row gap-4">
          {score.map((s, i) => (
            <li key={i}>{s === 1 ? "🟢" : "🔴"}</li>
          ))}
        </ul>
      </div>
      <h1>{t("title")}</h1>
      <h2>{tP("sub-title")}</h2>
      <p>{tP("score", { totalScore: totalScore, score: score.length })}</p>
      <Link
        href={`/intro`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        {tP("start-over")}
      </Link>
    </>
  );
}
