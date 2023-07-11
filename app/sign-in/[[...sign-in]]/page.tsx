import "@/styles/globals.css";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen items-center justify-center tracking-wider lg:h-[90vh]">
      <SignIn
        signUpUrl="/sign-up"
        redirectUrl="/"
        afterSignUpUrl="/"
        routing="hash"
        path="/sign-in"
        appearance={{
          elements: {
            card: "bg-white dark:bg-transparent rounded-lg shadow-none py-2 px-7",
            formButtonPrimary:
              "bg-black hover:bg-slate-800 dark:bg-white text-sm dark:text-black normal-case",
            headerTitle: "text-2xl font-semibold text-black dark:text-white",
            headerSubtitle: "text-sm text-gray-500 dark:text-gray-400",
            socialButtonsBlockButton: "dark:bg-white",
            socialButtonsBlockButtonText:
              "text-sm text-gray-500 dark:text-black font-semibold",
            dividerLine: "bg-black dark:bg-gray-500",
            dividerText: "text-gray-500 dark:text-gray-200",
            formFieldLabel: "text-sm text-gray-500 dark:text-gray-300",
            formFieldInput:
              "dark:bg-zinc-900 dark:border-slate-800 text-[15px] dark:text-white text-black font-medium focus:ring-1 focus:ring-slate-700 dark:focus:ring-slate-200 caret-black dark:caret-white",
            inputLabel: "text-sm text-gray-500 dark:text-gray-400",
            inputText:
              "border border-gray-300 dark:border-gray-700 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white",
            inputTextError:
              "border border-red-500 focus:ring-red-500 focus:border-red-500",
            footerActionText: "text-black dark:text-white font-medium hidden",
            footerActionLink: "hidden",
          },
        }}
      />
      <p className="font-semibold text-sm">
        No account?{" "}
        <Link
          className="text-red-500 hover:underline decoration-red-500 underline-offset-4"
          href={"/sign-up"}
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}
