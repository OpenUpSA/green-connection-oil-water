"use client";

import { Key } from "react";

export function ReferencesList({ references }: { references: any }) {
  return (
    <ol className="list-decimal">
      {references.map(
        (reference: { title: string; url: string }, index: Key) => (
          <li key={index}>
            {reference.title && <>{reference.title}, </>}
            <a href={reference.url} target="_blank">
              {reference.url}
            </a>
          </li>
        )
      )}
    </ol>
  );
}
