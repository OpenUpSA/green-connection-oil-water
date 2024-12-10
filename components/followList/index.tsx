"use client";

import Image from "next/image";

export function FollowList() {
  return (
    <ul className="flex flex-row gap-4">
      <li>
        <a
          href="https://facebook.com?url=fillin"
          target="_blank"
          className="display-block rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center"
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
          href="https://linkedin.com?url=fillin"
          target="_blank"
          className="display-block rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center"
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
          href="https://twitter.com?url=fillin"
          target="_blank"
          className="display-block rounded-full	bg-red-500 h-11 w-11 text-center flex justify-center items-center"
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
