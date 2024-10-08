"use client";

import { Key } from "react";

export function ReferencesList({ references }: { references: any }) {
  return (
    <ol className="reference-list">
      {references.map(
        (reference: { title: string; url: string }, index: Key) => (
          <li key={index} className="text-blueish-gray text-xs">
            {reference.title && <>{reference.title}, </>}
            <a href={reference.url} target="_blank" className="text-blueish-gray text-xs break-words">
              {reference.url}
            </a>
          </li>
        )
      )}
    </ol>
  );
}
