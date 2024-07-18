"use client";

import { redirect } from "next/navigation";
import Link from "next/link";

import scenarios from "../../data/scenarios.json";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const scenario = scenarios.find((scenario) => scenario.slug === params.slug);
  const scenarioIndex = scenarios.findIndex((s) => s.slug === params.slug);
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
      <h1>Green Connection&apos;s Oil &amp; Water</h1>
      <h2>{scenario.title}</h2>
      <h3>The setup</h3>
      <p>{scenario.setup}</p>
      <h3>The dilema</h3>
      <p>{scenario.dilema}</p>
      <h3>Your options</h3>
      <ul>
        {scenario.options.map((option, index) => (
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
        ))}
      </ul>
    </>
  );
}
