import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log(request);
  const url = request.nextUrl.clone();
  url.pathname = "/";
  return NextResponse.redirect(url);
}
