import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <main className="flex min-h-screen flex-col items-center justify-between p-5 max-w-md bg-slate-200 dark:bg-slate-900 mx-auto">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
