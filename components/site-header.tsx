import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <div>
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-5">
        <div className="nav-menu">
          <ul className="font-semibold">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-x-5">
          <div className="auth-button flex items-center gap-x-5">
            <Button asChild variant={"outline"}>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/login">Register</Link>
            </Button>
          </div>
          <div className="theme-dark-mode-toggler">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
