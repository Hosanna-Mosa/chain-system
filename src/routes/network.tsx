import { createFileRoute } from "@tanstack/react-router";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "My Network Tree — ChainVerse" },
      {
        name: "description",
        content:
          "Visualize your multi-tier ChainVerse network. Track node growth, status levels, and branch performance in real time.",
      },
      { property: "og:title", content: "My Network Tree — ChainVerse" },
      {
        property: "og:description",
        content: "Your decentralized network hierarchy at a glance.",
      },
    ],
  }),
  component: NetworkPage,
});

function NetworkPage() {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-12">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Network Tree</h1>
          <p className="text-on-surface-variant max-w-2xl">
            Visualize your multi-tier decentralized hierarchy. Track node growth, status levels,
            and network branch performance in real-time.
          </p>
        </header>

        {/* Binary Tree Visualization Canvas */}
        <div className="relative w-full overflow-x-auto py-12 px-4 rounded-2xl bg-surface-container-lowest border border-white/5 min-h-[700px] flex justify-center">
          <div className="flex flex-col items-center min-w-[800px] space-y-24 relative">
            {/* Level 1: Root */}
            <div className="relative z-10">
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center w-48 shadow-[0_0_30px_rgba(108,71,255,0.15)] border-[#6C47FF]/20">
                <div className="w-20 h-20 rounded-full border-4 border-[#6C47FF] p-1 mb-3 relative">
                  <img
                    alt="User profile"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCupfFzYo-skglopSjMT4IFqkKh7pT3cmiTfvNm9Uz3NGHXcdIGea85IfatQ5n0rvA6-DeF22_2uJK-ZHbhQLbagyOP9q1NprX03tO_GPERfKucQv93CsKQQbptzCGu3uW5iYhBzcM2EoQcA2t_YV1i5DdbYWI5KiDZ3b4c8VTKWIjXx2AiAz6N8EhTO6HkqQNzZAWU_hivK2KV3v6ipqGqtY9SrRYmSI3wayFaYzbP0j9U5r3hO5K9ojbpKTvN-e6mXq4TXWSn"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold">
                    PRO
                  </div>
                </div>
                <span className="font-bold text-white mb-1">Alex Rivera</span>
                <span className="bg-primary-container/20 text-primary-fixed-dim text-[11px] px-3 py-1 rounded-full uppercase tracking-tighter font-bold">
                  Bronze
                </span>
              </div>
              <svg className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] h-24 overflow-visible pointer-events-none">
                <path
                  className="text-white/10"
                  d="M 200 0 L 0 96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="text-white/10"
                  d="M 200 0 L 400 96"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Level 2 */}
            <div className="flex justify-between w-[800px] gap-24 relative z-10">
              {/* Left Branch */}
              <div className="relative flex flex-col items-center">
                <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-40 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-[10px] px-3 py-0.5 rounded-full font-black">
                    L
                  </div>
                  <div className="w-14 h-14 rounded-full border-2 border-cyan-500/50 p-1 mb-2">
                    <img
                      alt="Node User"
                      className="w-full h-full object-cover rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhIRPHC-VaLulk0nPT5XH2niMYHX6rrH4KVKSCrfWtsCIecfDRglDuj9sMQaxZhwvNuYi8jyiPGOZNZGF5qeIvJG0NFvK20j7AQBh2FHep0Jpynj_2VBjAalaXefoGjmzobOlMW5y_wKk3KHx84JHIRyrZN9Uy9dmGDMiSd3AIeFP7OGlmMT074JCLz-ZOEncFXuEjl3clasBDZw5vpO8ZLShrFdIpc9wLsmvA7qltQ9UkmOOa36xydzewbBREcacqCdBjh2gU"
                    />
                  </div>
                  <span className="text-sm font-semibold text-white">Sarah J.</span>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase">Bronze</span>
                </div>
                <svg className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-24 overflow-visible pointer-events-none">
                  <path
                    className="text-white/10"
                    d="M 100 0 L 0 96"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    className="text-white/10"
                    d="M 100 0 L 200 96"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              {/* Right Branch */}
              <div className="relative flex flex-col items-center">
                <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-40 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] px-3 py-0.5 rounded-full font-black">
                    R
                  </div>
                  <div className="w-14 h-14 rounded-full border-2 border-purple-500/50 p-1 mb-2">
                    <img
                      alt="Node User"
                      className="w-full h-full object-cover rounded-full"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf5s6IP12spDTTUHt4s3bYx_9x6M3ug8O0mQsmNluSR6ZsWeYSgjHR78oA1sLHWvmddxBkwAVwIynCoBf2pAyfdNR3AlBgAM0D8Rh2bkcQsWXuWYcIOxBLHX9CmNeXoo7--ZUpFCMa-ymismv1g6rRe5kOK0reTn24ZvujkFhwpsuVq2deZtslMjS9NiUzgjON6qOo5xP1FpiGiIKAl26dlPRoBi5UnVlzZcft8D25i-vpSqdAB-cfEafIoTB0ubnk93IfnuNp"
                    />
                  </div>
                  <span className="text-sm font-semibold text-white">Marcus V.</span>
                  <span className="text-[10px] text-purple-400 font-bold uppercase">Bronze</span>
                </div>
                <svg className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-24 overflow-visible pointer-events-none">
                  <path
                    className="text-white/10"
                    d="M 100 0 L 0 96"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    className="text-white/10"
                    d="M 100 0 L 200 96"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            </div>

            {/* Level 3 */}
            <div className="flex justify-between w-[900px] gap-8 relative z-10">
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-36 border-cyan-500/20 opacity-90">
                <div className="w-12 h-12 rounded-full border-2 border-cyan-500/30 p-1 mb-2">
                  <img
                    alt="Node User"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAk0YlR-NEKY9qInbXSgy1nYPKWXBhef9uwCORBfa5X4IpXi86toU66oKbqxOkD0CpsTa4DGWrA6ZOfHg5ZkmxDEq6QEVPHANxmNAgoSrMTV73L_A52HJNIyjGmt26OE7yZFiAh2iw6syhLTAvclS6B-MXob-fY0foQMvzaJrdjKops-aXK_pWh46ggnHnypyn6_tRK2j1ZsOvXvFxDeYLmbMYGwEVDz1VvZJldUtxcb6Hrh0juBV-UQnpMOGP61ekQXbEbwzD"
                  />
                </div>
                <span className="text-sm font-semibold text-white">Kevin L.</span>
                <span className="text-[9px] text-cyan-400 font-bold uppercase">Bronze</span>
              </div>
              <div className="border-2 border-dashed border-cyan-500/20 bg-cyan-500/5 p-4 rounded-2xl flex flex-col items-center justify-center w-36 cursor-pointer hover:bg-cyan-500/10 transition-colors">
                <span className="material-symbols-outlined text-cyan-400 mb-1">add</span>
                <span className="text-[10px] font-bold text-cyan-400 uppercase">Empty</span>
              </div>
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-36 border-purple-500/20 opacity-90">
                <div className="w-12 h-12 rounded-full border-2 border-purple-500/30 p-1 mb-2">
                  <img
                    alt="Node User"
                    className="w-full h-full object-cover rounded-full"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1LbpBpTjk0w4e8tWG7q6uI64dFuKjLtNmMnmlwBjVjGIxDq52BNArUJyUlGQgn1v3JVveHaOLRckC3JNUCVU2hvsiZAYpwqiBXt-vJqKanmWuPvUY3wI76pJBcTxRGDUEnBrJBCIuM8bOUaaxv7TZ4EYB4Y9KiiEaRWvFVHGnFbhW_C1PGbhbjkqvdUv2ne8t9sxxR36_TjGjjXhsjDApjsTo5OdgqI1LN_f1Mxnj5TSEl4q6gqeucJcblfw12bmPRTFZpVD"
                  />
                </div>
                <span className="text-sm font-semibold text-white">Elena S.</span>
                <span className="text-[9px] text-purple-400 font-bold uppercase">Bronze</span>
              </div>
              <div className="border-2 border-dashed border-purple-500/20 bg-purple-500/5 p-4 rounded-2xl flex flex-col items-center justify-center w-36 cursor-pointer hover:bg-purple-500/10 transition-colors">
                <span className="material-symbols-outlined text-purple-400 mb-1">add</span>
                <span className="text-[10px] font-bold text-purple-400 uppercase">Empty</span>
              </div>
            </div>
          </div>
        </div>

        {/* Network Stats Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pb-12">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#6C47FF]">groups</span>
              <h3 className="font-semibold text-white">Total Nodes</h3>
            </div>
            <div className="text-3xl font-bold text-white">1,248</div>
            <p className="text-tertiary text-sm mt-2 font-medium">+14 this week</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-cyan-400">align_horizontal_left</span>
              <h3 className="font-semibold text-white">Left Branch</h3>
            </div>
            <div className="text-3xl font-bold text-white">612</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-4">
              <div className="bg-cyan-500 h-full rounded-full" style={{ width: "49%" }}></div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-purple-400">align_horizontal_right</span>
              <h3 className="font-semibold text-white">Right Branch</h3>
            </div>
            <div className="text-3xl font-bold text-white">636</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-4">
              <div className="bg-purple-500 h-full rounded-full" style={{ width: "51%" }}></div>
            </div>
          </div>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
