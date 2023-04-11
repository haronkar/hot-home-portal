import Sidebar from "./sidebar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className="bg-backroundDark">
        <div className="w-18 md:w-40 fixed py-4 h-screen">
          <Sidebar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
