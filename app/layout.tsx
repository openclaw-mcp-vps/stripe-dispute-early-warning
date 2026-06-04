import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stripe Dispute Early Warning | Monitor Account Health",
  description: "Monitor Stripe account health metrics and predict potential suspensions before they happen. Real-time dispute rate tracking, chargeback alerts, and ML-powered risk scoring."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e5f7c4a5-d4d8-4019-a790-c04254629bae"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
