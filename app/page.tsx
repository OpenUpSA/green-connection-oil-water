"use client";
import Link from "next/link";

import scenarios from "./data/scenarios.json";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    localStorage.setItem(
      "score",
      JSON.stringify(Array.from({ length: scenarios.length }, (v, i) => -1))
    );
  }, []);

  return (
    <>
      <h1>Green Connection&apos;s Oil &amp; Water</h1>
      <h2>Politics, petrochemicals and dogy deals</h2>
      <Link
        href={`/scenarios/${scenarios[0].slug}`}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Get started
      </Link>
    </>
  );
}
