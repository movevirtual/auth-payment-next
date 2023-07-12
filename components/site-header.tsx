import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

export function SiteHeader() {
  const menu = [
    {
      name: "Pricing",
      link: "/pricing",
    },
  ];
  return (
    <div>
      <nav className="max-w-5xl mx-auto p-5">
        <div className="nav-menu w-full flex items-center justify-between">
          <div className="logo flex items-center gap-x-2">
            <PenTool className="h-5 w-5" />
            <Link href={"/"} className="font-semibold">
              CODESIGN
            </Link>
          </div>

          <div className="auth-button flex items-center gap-x-2">
            <Button variant={"link"}>
              <Link href="/">Pricing</Link>
            </Button>
            <Button asChild variant={"outline"}>
              <Link href="/sign-in">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Register</Link>
            </Button>
            <Button asChild variant={"destructive"}>
              <SignOutButton />
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
