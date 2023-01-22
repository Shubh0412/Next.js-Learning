import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul
        className={`main-nav ${
          !session && status === "loading" ? "loading" : "loaded"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">
            <p>Dashboard</p>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <p>Blog</p>
          </Link>
        </li>

        {!session && status !== "authenticated" && (
          <li>
            <Link href="/api/auth/signin">
              <p
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </p>
            </Link>
          </li>
        )}

        {session && status !== "unauthenticated" && (
          <li>
            <Link href="/api/auth/signout">
              <p
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </p>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
