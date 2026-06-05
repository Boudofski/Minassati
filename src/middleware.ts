import { NextResponse, type NextRequest } from "next/server";

const hiddenPrefixes = [
  "/quran",
  "/audio",
  "/courses",
  "/orientation",
  "/careers",
  "/paths",
  "/resources",
  "/scholarships",
  "/pricing",
  "/instructors",
  "/student-dashboard-preview",
  "/creator-preview",
  "/games",
  "/badges",
  "/challenges",
  "/family-dashboard",
  "/kids-zone",
  "/islamic-kids",
  "/activities",
  "/quizzes",
  "/stories",
  "/learn",
  "/parents",
  "/daily",
  "/adhkar",
  "/content-review",
];

const incompleteLocalePrefixes = ["/ar", "/en", "/fr", "/es"];

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (
    hiddenPrefixes.some((prefix) => request.nextUrl.pathname === prefix || request.nextUrl.pathname.startsWith(`${prefix}/`)) ||
    incompleteLocalePrefixes.some((prefix) => request.nextUrl.pathname === prefix || request.nextUrl.pathname.startsWith(`${prefix}/`))
  ) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|ads.txt|robots.txt|sitemap.xml).*)"],
};
