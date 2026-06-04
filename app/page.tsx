export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Payment Security
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Early Warning System for{" "}
          <span className="text-[#58a6ff]">Stripe Account Risks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor dispute rates, chargeback ratios, and transaction patterns. Get ML-powered risk scores and automated alerts before Stripe suspends your account.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Monitoring — $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Dispute Rate Tracking", icon: "📊" },
            { label: "ML Risk Scoring", icon: "🤖" },
            { label: "Instant Alerts", icon: "🔔" }
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="text-sm font-medium text-[#c9d1d9]">{f.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Real-time dispute & chargeback monitoring",
              "ML-powered suspension risk score",
              "Email & webhook alerts",
              "Transaction pattern analysis",
              "Stripe account health dashboard",
              "Cancel anytime"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the early warning system work?",
              a: "We connect to your Stripe account via API and continuously monitor key metrics like dispute rates, chargeback ratios, and refund patterns. Our ML model scores your account risk in real time and alerts you when thresholds approach Stripe's danger zones."
            },
            {
              q: "What counts as a high-risk signal?",
              a: "Stripe typically flags accounts with dispute rates above 0.75% or chargeback ratios above 1%. We alert you well before you hit those limits, giving you time to investigate and take corrective action."
            },
            {
              q: "Is my Stripe data secure?",
              a: "Yes. We use read-only Stripe API keys and never store your raw transaction data. All connections are encrypted and we follow industry-standard security practices to keep your account information safe."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Stripe Dispute Early Warning. All rights reserved.
      </footer>
    </main>
  );
}
