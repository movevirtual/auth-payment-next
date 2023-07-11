import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h2 className="text-4xl font-bold">Hello this is working</h2>
        <h4>How are you?</h4>
      </div>
    </main>
  );
}
