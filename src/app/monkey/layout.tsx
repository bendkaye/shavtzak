export default function MonkeyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="w-full">
        something on the top thea[s,xas;l,] second route
      </div>
      {children}
    </div>
  );
}
