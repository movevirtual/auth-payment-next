import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 lg:p-24">
      <div className="z-10 w-full max-w-5xl mx-auto items-center justify-center text-sm lg:flex">
        <h2 className="text-4xl lg:text-8xl font-bold tracking-tight text-center bg-gradient-to-tr from-black via-slate-800 to-neutral-600 dark:from-white dark:via-slate-200 dark:to-neutral-300 text-transparent bg-clip-text">
          <Balancer> Document Signing in one Place</Balancer>
        </h2>
      </div>
    </main>
  );
}
