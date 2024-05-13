import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/b1aba7d6-4157-443c-b095-3b5fd4ebbacb-grmb46.jpg",
  "https://utfs.io/f/b1aba7d6-4157-443c-b095-3b5fd4ebbacb-grmb46.jpg",
  "https://utfs.io/f/b1aba7d6-4157-443c-b095-3b5fd4ebbacb-grmb46.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1 className="mb-4 text-4xl font-bold">🏠 Home Page</h1>
      <Link href="/monkey"> Go to Monkey Page</Link>
      <div className="flex flex-wrap">
        {[...mockImages, ...mockImages].map((image) => (
          <div
            key={image.id}
            className="w-1/2 p-2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          >
            <img
              src={image.url}
              alt=""
              className="h-auto w-full rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
