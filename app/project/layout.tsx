import ColorPicker from "@/components/colorPicker";
import Header from "@/components/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center p-5 text-black">
        <Header />
        <section className="w-full flex justify-end">
          <ColorPicker items={["Yellow", "Orange", "Green"]} />
        </section>
        {children}
      </body>
    </html>
  );
}
