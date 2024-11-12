"use client";

import { Key } from "react";

export function ReferencesList({ references }: { references: any }) {
  return (
    <ol className="reference-list">
      {references.map(
        (reference: { number: number, title: string; url: string }, index: number) => (
          <li
            key={index}
            className="text-blueish-gray text-xs flex items-center"
          >
            <span className="counter">{(reference.number ? reference.number : index + 1)}</span>
            <div className="truncate">
              {reference.title && <>{reference.title}, <br /></>}
              <a
                href={reference.url}
                target="_blank"
                className="text-blueish-gray text-xs"
              >
                {reference.url}
              </a>
            </div>
          </li>
        )
      )}
    </ol>
  );
}
