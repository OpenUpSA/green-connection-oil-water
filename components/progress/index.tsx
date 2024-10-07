"use client";

export function Progress({
  scenarios,
  scenarioIndex,
}: {
  scenarios: any;
  scenarioIndex: number;
}) {
  return (
    <div className="grid justify-items-center mt-5 mb-12">
      <ul className="flex flex-row gap-4">
        {scenarios.map((s: any, i: number) => (
          <li
            key={i}
            className={`rounded-full h-5 w-5 ${
              scenarioIndex >= i ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            &nbsp;
          </li>
        ))}
      </ul>
    </div>
  );
}
