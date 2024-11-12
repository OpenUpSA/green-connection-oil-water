import { getTimeZone, getTranslations } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import IntlProvider from "./IntlProvider";

import { ShareDrawer } from "components/shareDrawer";

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
  params: { locale: string; timeZone: any };
}) {
  const messages = await getMessages();
  const timeZone = await getTimeZone();

  return (
    <html lang={locale}>
      <body>
        <IntlProvider messages={messages} locale={locale} timeZone={timeZone}>
          <main className="px-5 py-10 max-w-sm mx-auto has-main-background min-h-screen">
            {children}
          </main>
          <ShareDrawer />
        </IntlProvider>
      </body>
      <GoogleAnalytics gaId="G-GB9C1NQ8N0" />
    </html>
  );
}
