"use client"; // Required for client-side hooks

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="mt-4">
      <button
        onClick={() => {
          try {
            router.push("/"); // Navigate to the homepage
          } catch (error) {
            console.error("Navigation error:", error);
          }
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition transform hover:scale-105 hover:shadow-md"
        aria-label="Go back to the homepage"
      >
        ← Back to Home
      </button>
    </div>
  );
}
