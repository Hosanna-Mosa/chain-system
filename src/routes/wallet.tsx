import { createFileRoute } from "@tanstack/react-router";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/wallet")({
  head: () => ({
    meta: [
      { title: "Wallet — ChainVerse" },
      {
        name: "description",
        content: "Manage your ChainVerse wallet. Deposit, withdraw, and track your crypto assets.",
      },
      { property: "og:title", content: "Wallet — ChainVerse" },
      { property: "og:description", content: "Your ChainVerse crypto wallet at a glance." },
    ],
  }),
  component: WalletPage,
});

const assets = [
  { symbol: "CV", name: "ChainVerse Coin", balance: "1,250.00", usd: "$3,125.00", change: "+5.2%", positive: true, icon: "toll" },
  { symbol: "UTR", name: "UTR Crypto", balance: "25.00", usd: "$62.50", change: "+1.8%", positive: true, icon: "currency_bitcoin" },
  { symbol: "ETH", name: "Ethereum", balance: "0.412", usd: "$1,024.00", change: "-0.4%", positive: false, icon: "diamond" },
  { symbol: "USDT", name: "Tether USD", balance: "500.00", usd: "$500.00", change: "0.0%", positive: true, icon: "attach_money" },
];

const transactions = [
  { type: "Deposit", amount: "+25 UTR", usd: "+$62.50", date: "May 1, 2026", icon: "arrow_downward", positive: true },
  { type: "Referral Bonus", amount: "+50 CV", usd: "+$125.00", date: "Apr 30, 2026", icon: "group_add", positive: true },
  { type: "Withdrawal", amount: "-100 CV", usd: "-$250.00", date: "Apr 28, 2026", icon: "arrow_upward", positive: false },
  { type: "Daily ROI", amount: "+12.5 CV", usd: "+$31.25", date: "Apr 27, 2026", icon: "trending_up", positive: true },
  { type: "Transfer", amount: "-0.05 ETH", usd: "-$124.00", date: "Apr 25, 2026", icon: "swap_horiz", positive: false },
];

function WalletPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col bg-[#0e0d17]">
      <TopHeader />
      <main className="flex-1 pt-24 pb-32 px-4 sm:px-6 w-full max-w-5xl mx-auto space-y-6">

        {/* Total Balance Card */}
        <div className="relative overflow-hidden glass-card rounded-[24px] p-8 text-center border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6C47FF]/10 to-transparent pointer-events-none" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#6C47FF]/20 blur-[80px] rounded-full pointer-events-none" />
          <p className="text-xs font-bold text-white/40 tracking-widest uppercase mb-3">Total Portfolio Value</p>
          <h1 className="text-5xl font-black text-white tracking-tight mb-1">$4,711.50</h1>
          <p className="text-sm text-[#3adfab] font-semibold">
            <span className="material-symbols-outlined text-[16px] align-middle">trending_up</span>{" "}
            +$231.20 (5.2%) this week
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">arrow_upward</span>
              Withdraw
            </button>
            <button className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all">
              <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
              Swap
            </button>
          </div>
        </div>

        {/* Assets */}
        <div>
          <h2 className="text-base font-bold text-white/60 tracking-widest uppercase mb-4">Your Assets</h2>
          <div className="space-y-3">
            {assets.map((asset) => (
              <div
                key={asset.symbol}
                className="glass-card rounded-[18px] p-5 border border-white/5 flex items-center gap-4 hover:border-white/10 hover:bg-white/[0.03] transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#6C47FF]/10 border border-[#6C47FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6C47FF]/20 transition-colors">
                  <span className="material-symbols-outlined text-[#6C47FF] text-[22px]">{asset.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-bold text-white">{asset.symbol}</span>
                    <span className="text-xs text-white/40 truncate">{asset.name}</span>
                  </div>
                  <p className="text-sm text-white/60 mt-0.5">{asset.balance} {asset.symbol}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-white">{asset.usd}</p>
                  <p className={`text-xs font-semibold mt-0.5 ${asset.positive ? "text-[#3adfab]" : "text-[#ffb4ab]"}`}>
                    {asset.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-white/60 tracking-widest uppercase">Transactions</h2>
            <button className="text-[#6C47FF] text-xs font-bold hover:underline flex items-center gap-1">
              View all <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
          <div className="glass-card rounded-[18px] border border-white/5 divide-y divide-white/5 overflow-hidden">
            {transactions.map((tx, i) => (
              <div key={i} className="flex items-center gap-4 p-4 hover:bg-white/[0.02] transition-colors">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${tx.positive ? "bg-[#3adfab]/10 text-[#3adfab]" : "bg-[#ffb4ab]/10 text-[#ffb4ab]"}`}>
                  <span className="material-symbols-outlined text-[20px]">{tx.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white">{tx.type}</p>
                  <p className="text-xs text-white/40 mt-0.5">{tx.date}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className={`text-sm font-bold ${tx.positive ? "text-[#3adfab]" : "text-[#ffb4ab]"}`}>{tx.amount}</p>
                  <p className="text-xs text-white/40 mt-0.5">{tx.usd}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
      <BottomNav />
    </div>
  );
}
