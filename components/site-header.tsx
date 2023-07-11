import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";

export function SiteHeader() {
  const menu = [
    {
      name: "Pricing",
      link: "/pricing",
    },
  ];
  return (
    <div>
      <nav className="max-w-5xl mx-auto py-5">
        <div className="nav-menu w-full flex items-center justify-between">
          <div className="logo">
            <PenTool />
          </div>

          <div className="auth-button flex items-center gap-x-2">
            <Button variant={"link"}>
              <Link href="/pricing">Pricing</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Register</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}