"use client";

import { NextIntlClientProvider, useFormatter, useNow } from "next-intl";

export default function IntlProvider({
  locale,
  timeZone,
  messages,
  children,
}: {
  locale: string;
  timeZone: string;
  messages: any;
  children: any;
}) {
  return (
    <NextIntlClientProvider
      defaultTranslationValues={{
        strong: (text) => <strong>{text}</strong>,
      }}
      onError={(error) => console.error(error)}
      getMessageFallback={({ namespace, key }) => `${namespace}.${key}`}
      locale={locale}
      timeZone={timeZone}
      messages={messages}
    >
      {children}
    </NextIntlClientProvider>
  );
}
