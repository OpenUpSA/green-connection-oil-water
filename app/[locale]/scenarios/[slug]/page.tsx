"use client";

import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";
import { Link } from "app/navigation";

import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const t = useTranslations("global");
  const scenarios = t.raw("scenarios");
  const scenario = scenarios.find(
    (scenario: { slug: string }) => scenario.slug === params.slug
  );
  const scenarioIndex = scenarios.findIndex(
    (s: { slug: string }) => s.slug === params.slug
  );
  const [score, setScore] = useState([]);
  if (!scenario) {
    redirect("/");
  }
  useEffect(() => {
    const data = localStorage.getItem("score");
    if (data) {
      const jsonData = JSON.parse(data);
      setScore(jsonData);
    }
  }, []);
  return (
    <>
      <div className="grid justify-items-center">
        <ul className="flex flex-row gap-4">
          {score.map((s, i) => (
            <li key={i}>
              {scenarioIndex === i
                ? "🔵"
                : s === -1
                ? "⚪"
                : s === 1
                ? "🟢"
                : "🔴"}
            </li>
          ))}
        </ul>
      </div>
      <h1>{t("title")}</h1>
      <h2>{scenario.title}</h2>
      <h3>The setup</h3>
      <p>{scenario.setup}</p>
      <h3>The dilema</h3>
      <p>{scenario.dilema}</p>
      <h3>Your options</h3>
      <ul>
        {scenario.options.map(
          (option: { correct: any; text: string }, index: Key) => (
            <li key={index} className="mb-5">
              <Link
                href={`/scenarios/${scenario.slug}/${
                  option.correct ? "correct" : "incorrect"
                }`}
              >
                <label style={{ display: "flex", alignItems: "center" }}>
                  <input type="radio" className="mr-5" />
                  {option.text} ({option.correct ? "correct" : "incorrect"})
                </label>
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
}
