"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { PenTool } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

export default function Authenticated() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  return (
    <div>
      {isSignedIn ? (
        <div className="flex items-center gap-x-5">
          <img
            className="h-8 w-8 rounded-full drop-shadow-md ring ring-slate-500/40 dark:ring-slate-500/20"
            src={user?.imageUrl}
            alt=""
          />
          <Button asChild variant={"destructive"}>
            <SignOutButton />
          </Button>
        </div>
      ) : (
        <div>
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export async function SiteHeader() {
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
            <Authenticated />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
