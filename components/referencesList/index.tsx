"use client";

import { Key } from "react";

export function ReferencesList({ references }: { references: any }) {
  return (
    <ol className="reference-list">
      {references.map(
        (reference: { title: string; url: string }, index: Key) => (
          <li
            key={index}
            className="text-blueish-gray text-xs flex items-center"
          >
            <div>
              {reference.title && <>{reference.title}, </>}
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
