import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = new URL("/", req.nextUrl);
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
