import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { locales } from "i18n";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: locales,
    defaultLocale: locales[0],
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/", "/(en|xh|af)/:path*"],
};
