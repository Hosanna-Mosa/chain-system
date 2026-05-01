import { createFileRoute } from "@tanstack/react-router";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — ChainVerse" },
      {
        name: "description",
        content:
          "Track your ChainVerse portfolio, level progress, referral bonuses, and daily ROI in real time.",
      },
      { property: "og:title", content: "Dashboard — ChainVerse" },
      {
        property: "og:description",
        content: "Your ChainVerse portfolio at a glance.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col">
      <TopHeader />
      <main className="flex-1 pt-24 pb-32 px-6 md:px-xl w-full max-w-7xl mx-auto space-y-8 overflow-y-auto">
        {/* Welcome Banner */}
        <div className="relative overflow-hidden glass-card rounded-[24px] p-xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-sm z-10">
            <div className="inline-flex items-center gap-xs px-md py-1 bg-[#CD7F32]/20 text-[#CD7F32] rounded-full border border-[#CD7F32]/30">
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                workspace_premium
              </span>
              <span className="text-label-caps uppercase ml-1">Bronze Level</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-4">
              Welcome back, Alex
            </h2>
            <p className="text-on-surface-variant text-lg">
              Your portfolio is up <span className="text-tertiary">+12.4%</span> this week.
            </p>
          </div>
          <div className="relative z-10 flex gap-md">
            <button className="primary-gradient text-white px-xl py-md rounded-[12px] font-bold shadow-lg shadow-primary-container/30">
              Add Funds
            </button>
            <button className="glass-card px-xl py-md rounded-[12px] font-bold border-white/10 hover:bg-white/5">
              Withdraw
            </button>
          </div>
          <div className="absolute -right-10 -top-10 w-64 h-64 primary-gradient blur-[100px] opacity-20 rounded-full"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-6 rounded-[20px] space-y-4 border-l-4 border-primary">
            <div className="flex justify-between items-start">
              <p className="text-on-surface-variant text-sm font-medium">Total Coins</p>
              <span className="material-symbols-outlined text-primary">toll</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">1,250.00 CV</h3>
              <p className="text-sm text-tertiary">≈ $3,125.00 USD</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-[20px] space-y-4 border-l-4 border-secondary">
            <div className="flex justify-between items-start">
              <p className="text-on-surface-variant text-sm font-medium">Referral Bonus</p>
              <span className="material-symbols-outlined text-secondary">group_add</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">450.50 CV</h3>
              <p className="text-sm text-on-surface-variant">24 Active Referrals</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-[20px] space-y-4 border-l-4 border-tertiary">
            <div className="flex justify-between items-start">
              <p className="text-on-surface-variant text-sm font-medium">Daily ROI</p>
              <span className="material-symbols-outlined text-tertiary">trending_up</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">1.25 %</h3>
              <p className="text-sm text-tertiary">+12.50 CV earned today</p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-[20px] space-y-4 border-l-4 border-error">
            <div className="flex justify-between items-start">
              <p className="text-on-surface-variant text-sm font-medium">Monthly Bonus</p>
              <span className="material-symbols-outlined text-error">calendar_month</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">125.00 CV</h3>
              <p className="text-sm text-on-surface-variant">Claim in 4 days</p>
            </div>
          </div>
        </div>

        {/* Level Journey */}
        <div className="glass-card p-xl rounded-[24px] space-y-xl">
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white">Your Level Journey</h3>
              <p className="text-on-surface-variant text-sm">
                Progress to next level: Silver (75%)
              </p>
            </div>
            <button className="text-primary text-sm font-bold flex items-center gap-1">
              View Rewards <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="relative pt-10 pb-4">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-surface-container-highest -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-0 w-[8%] h-1 primary-gradient -translate-y-1/2 shadow-[0_0_15px_#6C47FF]"></div>
            <div className="relative flex justify-between w-full">
              <div className="flex flex-col items-center gap-xs -translate-x-1/2">
                <div className="w-4 h-4 rounded-full primary-gradient ring-4 ring-primary-container/20"></div>
                <span className="text-[10px] uppercase font-bold text-primary mt-2">Bronze</span>
              </div>
              <div className="flex flex-col items-center gap-xs -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-surface-container-highest"></div>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant mt-2">
                  Silver
                </span>
              </div>
              <div className="flex flex-col items-center gap-xs -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-surface-container-highest"></div>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant mt-2">
                  Gold
                </span>
              </div>
              <div className="hidden md:flex flex-col items-center gap-xs -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-surface-container-highest"></div>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant mt-2">
                  Platinum
                </span>
              </div>
              <div className="flex flex-col items-center gap-xs -translate-x-1/2">
                <div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-[12px] text-secondary">star</span>
                </div>
                <span className="text-[10px] uppercase font-bold text-on-surface-variant mt-1">
                  Celestial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Referral & Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-lg pb-12">
          <div className="lg:col-span-1 glass-card p-8 rounded-[24px] space-y-md">
            <h3 className="text-lg font-bold text-white">Your Referral Link</h3>
            <div className="flex gap-sm">
              <div className="flex-1 bg-surface-container-lowest p-md rounded-[12px] text-sm text-on-surface-variant truncate font-mono">
                chainverse.app/reg?ref=alex2024
              </div>
              <button className="bg-primary-container/20 text-primary-container p-md rounded-[12px] hover:bg-primary-container hover:text-white transition-all">
                <span className="material-symbols-outlined">content_copy</span>
              </button>
            </div>
            <p className="text-[12px] text-on-surface-variant">
              Share this link to earn 5% on every direct deposit.
            </p>
          </div>
          <div className="lg:col-span-2 glass-card p-8 rounded-[24px] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex-1 p-md space-y-2 text-center">
              <p className="text-label-caps text-on-surface-variant">Left Network</p>
              <p className="text-4xl font-bold text-primary">1,420</p>
              <p className="text-sm text-on-surface-variant">Active Nodes</p>
            </div>
            <div className="flex-1 p-md space-y-2 text-center">
              <p className="text-label-caps text-on-surface-variant">Right Network</p>
              <p className="text-4xl font-bold text-secondary">890</p>
              <p className="text-sm text-on-surface-variant">Active Nodes</p>
            </div>
            <div className="flex-1 p-md space-y-2 text-center">
              <p className="text-label-caps text-on-surface-variant">Total Volume</p>
              <p className="text-4xl font-bold text-tertiary">42.5K</p>
              <p className="text-sm text-on-surface-variant">CV Coins</p>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
