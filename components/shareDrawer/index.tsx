"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

import { SharingList } from "components/sharingList";

export function ShareDrawer() {
  const [showShareDrawer, setShowShareDrawer] = useState(false);

  // Do not show share drawer on home or debrief pages
  const path = usePathname();
  if (path.indexOf("debrief") > 1 || path.indexOf("/", 1) == -1) return;

  const toggleShareDrawer = (e: any) => {
    setShowShareDrawer(!showShareDrawer);
  };

  return (
    <div
      className={`fixed right-0 inset-b-50 ${
        showShareDrawer ? "w-15" : "w-12"
      }`}
    >
      <div className="bg-dark-blue rounded-l-full pr-5 shadow-lg">
        <button
          onClick={toggleShareDrawer}
          className={
            "rounded-full	bg-dark-blue h-11 w-11 text-center flex justify-center items-center float-left mr-5" +
            (showShareDrawer ? "" : "")
          }
        >
          <Image
            src="/images/social/share.webp"
            alt="Share icon"
            width="26"
            height="20"
          />
        </button>
        <SharingList bgColorClass="bg-dark-blue" />
      </div>
    </div>
  );
}
