import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import type { NextFetchEvent } from "next/server";

export function proxy(req: NextRequestWithAuth, event: NextFetchEvent) {
  return withAuth({
    pages: {
      signIn: "/login",
    },
  })(req, event);
}

export default proxy;

export const config = {
  
  matcher: ["/products/:path*"],
};
