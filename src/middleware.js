import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  //   const isAdmin = true;
  const isAdmin = false;
  const isAboutPage = request.nextUrl.pathname.startsWith("/about");
  if (isAboutPage && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
    // return NextResponse.rewrite(new URL("/", request.url));
  } else {
    return NextResponse.next();
  }
}
