import { useRouter } from "next/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Back Button (if not on Home) */}
      {router.pathname !== "/" && (
        <div className="container mx-auto px-6 mt-4">
          <button
            onClick={() => {
              try {
                router.push("/");
              } catch (error) {
                console.error("Failed to navigate:", error);
              }
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            ← Back to Home
          </button>
        </div>
      )}

      {/* Page Content */}
      <main className="flex-grow container mx-auto px-6">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
