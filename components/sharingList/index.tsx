"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SharingList() {
  const [copyLinkPing, setCopyLinkPing] = useState(false);
  const copyLink = (e: any) => {
    setCopyLinkPing(true);
    navigator.clipboard.writeText(
      "https://green-connection-oil-water.netlify.app/"
    );
    setTimeout(() => setCopyLinkPing(false), 750);
  };

  return (
    <ul className="flex flex-row gap-4">
      <li>
        <button
          onClick={copyLink}
          className={
            "rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center" +
            (copyLinkPing ? " animate-ping" : "")
          }
        >
          <Image
            src="/images/social/link.png"
            alt="URL icon"
            width="26"
            height="20"
          />
        </button>
      </li>
      <li>
        <a
          href="https://facebook.com?url=fillin"
          target="_blank"
          className="display-block rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center"
        >
          <Image
            src="/images/social/facebook.png"
            alt="Facebook Logo"
            width="20"
            height="20"
          />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com?url=fillin"
          target="_blank"
          className="display-block rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center"
        >
          <Image
            src="/images/social/linkedin.png"
            alt="LinkedIn Logo"
            width="18"
            height="18"
          />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com?url=fillin"
          target="_blank"
          className="display-block rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center"
        >
          <Image
            src="/images/social/twitter.png"
            alt="Twitter Logo"
            width="20"
            height="18"
          />
        </a>
      </li>
    </ul>
  );
}
