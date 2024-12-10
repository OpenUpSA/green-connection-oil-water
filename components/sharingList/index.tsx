"use client";

import Image from "next/image";
import { useState } from "react";

export function SharingList({ bgColorClass }: { bgColorClass?: string }) {
  const [copyLinkPing, setCopyLinkPing] = useState(false);
  const copyLink = (e: any) => {
    setCopyLinkPing(true);
    navigator.clipboard.writeText(
      "https://green-connection-oil-water.netlify.app/"
    );
    setTimeout(() => setCopyLinkPing(false), 750);
  };

  const urlToShare = encodeURIComponent(
    "https://green-connection-oil-water.netlify.app/en/debrief"
  );

  return (
    <ul className="flex flex-row gap-4">
      <li>
        <button
          onClick={copyLink}
          className={
            `rounded-full	${
              bgColorClass ? bgColorClass : "bg-red-500"
            } h-11 w-11 text-center flex justify-center items-center` +
            (copyLinkPing ? " animate-ping" : "")
          }
        >
          <Image
            src="/images/social/link.webp"
            alt="URL icon"
            width="26"
            height="20"
          />
        </button>
      </li>
      <li>
        <a
          href={`https://web.facebook.com/share_channel/?link=${urlToShare}&app_id=966242223397117&source_surface=external_reshare&display&hashtag`}
          target="_blank"
          className={`display-block rounded-full ${
            bgColorClass ? bgColorClass : "bg-red-500"
          } h-11 w-11 text-center flex justify-center items-center`}
        >
          <Image
            src="/images/social/facebook.webp"
            alt="Facebook Logo"
            width="20"
            height="20"
          />
        </a>
      </li>
      <li>
        <a
          href={`https://www.linkedin.com/feed/?shareActive=true&shareUrl=${urlToShare}`}
          target="_blank"
          className={`display-block rounded-full	${
            bgColorClass ? bgColorClass : "bg-red-500"
          } h-11 w-11 text-center flex justify-center items-center`}
        >
          <Image
            src="/images/social/linkedin.webp"
            alt="LinkedIn Logo"
            width="18"
            height="18"
          />
        </a>
      </li>
      <li>
        <a
          href={`https://x.com/intent/tweet?url=${urlToShare}`}
          target="_blank"
          className={`display-block rounded-full	${
            bgColorClass ? bgColorClass : "bg-red-500"
          } h-11 w-11 text-center flex justify-center items-center`}
        >
          <Image
            src="/images/social/twitter.webp"
            alt="Twitter Logo"
            width="20"
            height="18"
          />
        </a>
      </li>
    </ul>
  );
}
