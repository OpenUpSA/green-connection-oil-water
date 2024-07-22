import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <main className="flex h-screen flex-col p-2 max-w-7xl mx-auto">
            <div className="m-auto">
            {children}
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-GB9C1NQ8N0" />
    </html>
  );
}
