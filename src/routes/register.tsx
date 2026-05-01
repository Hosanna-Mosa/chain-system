import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Account — ChainVerse" },
      {
        name: "description",
        content:
          "Join ChainVerse and claim your starting bonus. Open an institutional-grade decentralized finance account in minutes.",
      },
      { property: "og:title", content: "Create Account — ChainVerse" },
      {
        property: "og:description",
        content: "Join ChainVerse and claim your starting bonus reward.",
      },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const navigate = useNavigate();
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen pb-32">
      <TopHeader />
      <main className="max-w-xl mx-auto px-6 mt-32 mb-12">
        <section className="text-center mb-10">
          <h1 className="text-display-lg text-on-background mb-4">Join the Verse</h1>
          <p className="text-on-surface-variant max-w-md mx-auto">
            Experience the next generation of decentralized finance with a secure
            institutional-grade account.
          </p>
        </section>
        <div className="glass-panel rounded-xl p-8 premium-glow">
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-4">
              <div className="group">
                <label className="block text-label-caps text-on-surface-variant mb-2">
                  Full name
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="Alex Rivera"
                  type="text"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-label-caps text-on-surface-variant mb-2">
                  Email address
                </label>
                <input
                  className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  placeholder="alex.rivera@chainverse.com"
                  type="email"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="group">
                  <label className="block text-label-caps text-on-surface-variant mb-2">
                    Password
                  </label>
                  <input
                    className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-label-caps text-on-surface-variant mb-2">
                    Confirm password
                  </label>
                  <input
                    className="w-full bg-surface-container border border-outline-variant rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                    placeholder="••••••••"
                    type="password"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary-container/10 border border-primary-container/20 rounded-lg p-4 flex items-center gap-4">
              <div className="bg-primary-container text-on-primary-container w-10 h-10 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined">confirmation_number</span>
              </div>
              <div>
                <p className="text-label-caps text-primary">REFERRAL CODE APPLIED</p>
                <p className="text-title-sm text-white">VERSE-99-RIVERA</p>
              </div>
            </div>
            <div className="gold-border rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-[64px]">auto_awesome</span>
              </div>
              <h3 className="text-title-sm text-secondary mb-4 flex items-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  stars
                </span>
                Starting Bonus Reward
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-on-surface-variant">
                  <span>1. Deposit 25 UTR Crypto Coins</span>
                  <span className="text-white font-semibold">25 UTR</span>
                </li>
                <li className="flex justify-between items-center text-on-surface-variant">
                  <span>2. Receive 25 Platform Coins</span>
                  <span className="text-secondary font-semibold">+25 CV</span>
                </li>
                <li className="pt-3 border-t border-white/5 flex justify-between items-center">
                  <span className="font-bold text-white">Total Starting Balance</span>
                  <span className="text-2xl font-black text-secondary">50 Coins</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <input
                  className="mt-1 rounded border-outline-variant bg-surface-container text-primary-container focus:ring-primary-container"
                  id="terms"
                  type="checkbox"
                  required
                />
                <label className="text-on-surface-variant text-sm" htmlFor="terms">
                  I agree to the{" "}
                  <a className="text-primary hover:underline" href="#">
                    Terms &amp; Conditions
                  </a>{" "}
                  and acknowledge the{" "}
                  <a className="text-primary hover:underline" href="#">
                    Privacy Policy
                  </a>{" "}
                  of ChainVerse Global.
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#6C47FF] to-[#5e35f1] text-white font-bold rounded-xl shadow-lg shadow-primary-container/20 active:scale-95 transition-transform"
              >
                Create Account &amp; Deposit
              </button>
              <div className="text-center">
                <p className="text-on-surface-variant">
                  Already have an account?{" "}
                  <Link to="/" className="text-primary font-semibold hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
