import Link from "next/link";

export default function MonkeyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="mb-4 text-4xl font-bold">🐵 Monkey Page</h1>
      <p className="mb-8 text-lg">This is a monkey page.</p>
      <Link href="/">Go to Home Page</Link>
      <img
        src="https://utfs.io/f/b1aba7d6-4157-443c-b095-3b5fd4ebbacb-grmb46.jpg"
        alt=""
        className="h-auto w-full rounded-lg shadow-lg"
      />
    </main>
  );
}
