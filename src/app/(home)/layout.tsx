import AOSConfig from "../components/aos-config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-[450px] p-2 bg-[#ececec] mx-auto  min-h-svh overflow-x-hidden">
      {children}
      <AOSConfig />
    </div>
  );
}
