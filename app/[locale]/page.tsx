"use client";

import { useTranslations } from "next-intl";
import { Link } from "app/navigation";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("global");
  const tP = useTranslations("home");

  return (
    <>
      <h1 className="text-dark-blueish p-0 sm:text-3xl sm:mb-2">{t("title")}</h1>
      <h2 className="text-bigger sm:text-less-big md:text-big text-light-blueish p-0">
        {t("title-name")}
      </h2>
      <h3 className="text-dark-blueish sm:text-2xl sm:mb-2">{t("sub-title")}</h3>
      <p className="m-9 pb-6 sm:mb-8 sm:mt-7">
        <Image
          src="/images/home.png"
          alt="Home"
          width={950}
          height={839}
          sizes="(max-width: 479px) 457.5625px, (max-width: 767px) 100vw, (max-width: 991px) 93vw, 900px"
          className="display-block max-w-lg"
        />
      </p>
      <p className="flex">
        <Link
          href="/intro"
          className="flex justify-center items-center hover:bg-darker-blueish text-white mx-auto red-button sm:text-3xl sm:px-6 sm:py-3"
        >
          {tP("get-started")}
          <svg
            viewBox="0 0 43 25"
            fill="none"
            width="100%"
            vector-path="non-scaling-stroke"
            aria-hidden="true"
            height="100%"
            className="float-right ml-4 font-serif"
          >
            <path
              d="M1.86133 15.1452C14.0743 13.8597 26.4378 14.3777 38.7025 14.3777"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
            <path
              d="M27.8899 2.21729C30.6493 5.16986 33.4775 7.9993 36.657 10.5025C37.7327 11.3494 38.8318 12.1638 39.8748 13.0519C40.1256 13.2654 41.0406 13.9036 41.1339 14.3265C41.2152 14.695 40.2525 15.3177 40.1157 15.4302C39.1696 16.2081 38.207 16.9654 37.2633 17.7463C35.2485 19.4135 33.2496 21.101 31.2475 22.7828"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            ></path>
          </svg>
        </Link>
      </p>
      <p className="text-center m-7 mt-10 text-2xl sm:text-base sm:mt-5">
        {tP("credit")}{" "}
        <Link
          href="https://openup.org.za"
          target="_blank"
          className="underline"
        >
          OpenUp
        </Link>
      </p>
    </>
  );
}
