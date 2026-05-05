import { useState } from "react";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

// ─── Deep Tree Data ───────────────────────────────────────────────────────────
type TreeNode = {
  name: string;
  level: string;
  side?: "L" | "R";
  sideColor?: string;
  children?: TreeNode[];
};

const deepTreeData: TreeNode = {
  name: "Alex Rivera", level: "Bronze",
  children: [
    {
      name: "Sarah J.", level: "Bronze", side: "L", sideColor: "gold-light",
      children: [
        {
          name: "Kevin L.", level: "Bronze", side: "L", sideColor: "gold-light",
          children: [
            { name: "Priya M.", level: "Bronze", side: "L", sideColor: "gold-light", children: [{ name: "Tom H.", level: "Bronze", side: "L", sideColor: "gold-light" }, { name: "Empty", level: "", side: "R", sideColor: "gold-light" }] },
            { name: "Jake W.", level: "Bronze", side: "R", sideColor: "gold-light", children: [{ name: "Lena K.", level: "Bronze", side: "L", sideColor: "gold-light" }, { name: "Empty", level: "", side: "R", sideColor: "gold-light" }] },
          ],
        },
        {
          name: "Empty", level: "", side: "R", sideColor: "gold-light",
        },
      ],
    },
    {
      name: "Marcus V.", level: "Bronze", side: "R", sideColor: "gold-dark",
      children: [
        {
          name: "Elena S.", level: "Bronze", side: "L", sideColor: "gold-dark",
          children: [
            { name: "Raj P.", level: "Bronze", side: "L", sideColor: "gold-dark", children: [{ name: "Nina O.", level: "Bronze", side: "L", sideColor: "gold-dark" }, { name: "Empty", level: "", side: "R", sideColor: "gold-dark" }] },
            { name: "Zoe C.", level: "Bronze", side: "R", sideColor: "gold-dark", children: [{ name: "Empty", level: "", side: "L", sideColor: "gold-dark" }, { name: "Empty", level: "", side: "R", sideColor: "gold-dark" }] },
          ],
        },
        {
          name: "Empty", level: "", side: "R", sideColor: "gold-dark",
        },
      ],
    },
  ],
};

// ─── Recursive Tree Node Component ───────────────────────────────────────────
function FullTreeNode({ node, depth = 0 }: { node: TreeNode; depth?: number }) {
  const [open, setOpen] = useState(depth < 2);
  const isEmpty = node.name === "Empty";
  const hasChildren = node.children && node.children.length > 0;
  const colorClass = node.sideColor === "gold-light" ? "border-[#D4AF37]/40 text-[#D4AF37]" : node.sideColor === "gold-dark" ? "border-[#D4AF37]/40 text-[#D4AF37]" : "border-[#D4AF37]/40 text-[#D4AF37]";
  const bgClass = node.sideColor === "gold-light" ? "bg-[#D4AF37]/10" : node.sideColor === "gold-dark" ? "bg-[#D4AF37]/10" : "bg-[#D4AF37]/10";

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center gap-2">
        {/* connector indent */}
        {depth > 0 && <div className="w-6 h-px bg-white/10 flex-shrink-0" />}

        {/* node card */}
        {isEmpty ? (
          <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed ${colorClass} ${bgClass} opacity-60 text-xs font-bold`}>
            <span className="material-symbols-outlined text-[14px]">add</span> Empty
          </div>
        ) : (
          <div
            className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${colorClass} ${bgClass} cursor-pointer hover:opacity-90 transition-opacity select-none`}
            onClick={() => hasChildren && setOpen((p) => !p)}
          >
            {node.side && (
              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${node.sideColor === "gold-light" ? "bg-[#D4AF37] text-black" : "bg-[#D4AF37] text-black"}`}>
                {node.side}
              </span>
            )}
            <div className="w-7 h-7 rounded-full bg-white/10 overflow-hidden flex-shrink-0">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${node.name}`} alt={node.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-tight">{node.name}</p>
              {node.level && <p className={`text-[9px] font-bold ${colorClass}`}>{node.level}</p>}
            </div>
            {hasChildren && (
              <span className="material-symbols-outlined text-[14px] text-white/30 ml-1">{open ? "expand_less" : "expand_more"}</span>
            )}
          </div>
        )}
      </div>

      {/* children */}
      {open && hasChildren && (
        <div className="ml-8 mt-2 border-l border-white/10 pl-2 space-y-2">
          {node.children!.map((child, i) => (
            <FullTreeNode key={i} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Full Tree Modal ──────────────────────────────────────────────────────────
function FullTreeModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-[#000000] border border-white/10 rounded-[24px] shadow-2xl flex flex-col max-h-[85vh]">
        {/* header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 flex-shrink-0">
          <div>
            <h2 className="text-lg font-black text-white">Full Network Tree</h2>
            <p className="text-xs text-white/40 mt-0.5">Click any node to expand / collapse its branch</p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* scrollable tree */}
        <div className="overflow-y-auto overflow-x-auto p-6 space-y-2 flex-1">
          <FullTreeNode node={deepTreeData} depth={0} />
        </div>

        {/* footer */}
        <div className="px-6 py-3 border-t border-white/5 flex-shrink-0 flex items-center justify-between">
          <p className="text-[10px] text-white/30 font-bold tracking-widest uppercase">Total: 1,248 Nodes</p>
          <button onClick={onClose} className="text-xs font-bold text-[#D4AF37] hover:underline">Close</button>
        </div>
      </div>
    </div>
  );
}

// ─── Network Page ─────────────────────────────────────────────────────────────
export default function NetworkPage() {
  const [showFullTree, setShowFullTree] = useState(false);

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

        {/* Tree Canvas */}
        <div className="relative w-full overflow-x-auto py-12 px-4 rounded-2xl bg-surface-container-lowest border border-white/5 min-h-[700px] flex justify-center">
          <div className="flex flex-col items-center min-w-[800px] space-y-24 relative">
            {/* Level 1 */}
            <div className="relative z-10">
              <div className="glass-card p-6 rounded-2xl flex flex-col items-center w-48 shadow-[0_0_30px_rgba(212,175,55,0.15)] border-[#D4AF37]/20">
                <div className="w-20 h-20 rounded-full border-4 border-[#D4AF37] p-1 mb-3 relative">
                  <img alt="User profile" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCupfFzYo-skglopSjMT4IFqkKh7pT3cmiTfvNm9Uz3NGHXcdIGea85IfatQ5n0rvA6-DeF22_2uJK-ZHbhQLbagyOP9q1NprX03tO_GPERfKucQv93CsKQQbptzCGu3uW5iYhBzcM2EoQcA2t_YV1i5DdbYWI5KiDZ3b4c8VTKWIjXx2AiAz6N8EhTO6HkqQNzZAWU_hivK2KV3v6ipqGqtY9SrRYmSI3wayFaYzbP0j9U5r3hO5K9ojbpKTvN-e6mXq4TXWSn" />
                  <div className="absolute -bottom-1 -right-1 bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold">PRO</div>
                </div>
                <span className="font-bold text-white mb-1">Alex Rivera</span>
                <span className="bg-primary-container/20 text-primary-fixed-dim text-[11px] px-3 py-1 rounded-full uppercase tracking-tighter font-bold">Bronze</span>
              </div>
              <svg className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] h-24 overflow-visible pointer-events-none">
                <path className="text-white/10" d="M 200 0 L 0 96" fill="none" stroke="currentColor" strokeWidth="2" />
                <path className="text-white/10" d="M 200 0 L 400 96" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            {/* Level 2 */}
            <div className="flex justify-between w-[800px] gap-24 relative z-10">
              <div className="relative flex flex-col items-center">
                <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-40 border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] px-3 py-0.5 rounded-full font-black">L</div>
                  <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37]/50 p-1 mb-2">
                    <img alt="Node User" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhIRPHC-VaLulk0nPT5XH2niMYHX6rrH4KVKSCrfWtsCIecfDRglDuj9sMQaxZhwvNuYi8jyiPGOZNZGF5qeIvJG0NFvK20j7AQBh2FHep0Jpynj_2VBjAalaXefoGjmzobOlMW5y_wKk3KHx84JHIRyrZN9Uy9dmGDMiSd3AIeFP7OGlmMT074JCLz-ZOEncFXuEjl3clasBDZw5vpO8ZLShrFdIpc9wLsmvA7qltQ9UkmOOa36xydzewbBREcacqCdBjh2gU" />
                  </div>
                  <span className="text-sm font-semibold text-white">Sarah J.</span>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Bronze</span>
                </div>
                <svg className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-24 overflow-visible pointer-events-none">
                  <path className="text-white/10" d="M 100 0 L 0 96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path className="text-white/10" d="M 100 0 L 200 96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-40 border-[#D4AF37]/30 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-white text-[10px] px-3 py-0.5 rounded-full font-black">R</div>
                  <div className="w-14 h-14 rounded-full border-2 border-[#D4AF37]/50 p-1 mb-2">
                    <img alt="Node User" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf5s6IP12spDTTUHt4s3bYx_9x6M3ug8O0mQsmNluSR6ZsWeYSgjHR78oA1sLHWvmddxBkwAVwIynCoBf2pAyfdNR3AlBgAM0D8Rh2bkcQsWXuWYcIOxBLHX9CmNeXoo7--ZUpFCMa-ymismv1g6rRe5kOK0reTn24ZvujkFhwpsuVq2deZtslMjS9NiUzgjON6qOo5xP1FpiGiIKAl26dlPRoBi5UnVlzZcft8D25i-vpSqdAB-cfEafIoTB0ubnk93IfnuNp" />
                  </div>
                  <span className="text-sm font-semibold text-white">Marcus V.</span>
                  <span className="text-[10px] text-[#D4AF37] font-bold uppercase">Bronze</span>
                </div>
                <svg className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] h-24 overflow-visible pointer-events-none">
                  <path className="text-white/10" d="M 100 0 L 0 96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path className="text-white/10" d="M 100 0 L 200 96" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            {/* Level 3 */}
            <div className="flex justify-between w-[900px] gap-8 relative z-10">
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-36 border-[#D4AF37]/20 opacity-90">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30 p-1 mb-2">
                  <img alt="Node User" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAk0YlR-NEKY9qInbXSgy1nYPKWXBhef9uwCORBfa5X4IpXi86toU66oKbqxOkD0CpsTa4DGWrA6ZOfHg5ZkmxDEq6QEVPHANxmNAgoSrMTV73L_A52HJNIyjGmt26OE7yZFiAh2iw6syhLTAvclS6B-MXob-fY0foQMvzaJrdjKops-aXK_pWh46ggnHnypyn6_tRK2j1ZsOvXvFxDeYLmbMYGwEVDz1VvZJldUtxcb6Hrh0juBV-UQnpMOGP61ekQXbEbwzD" />
                </div>
                <span className="text-sm font-semibold text-white">Kevin L.</span>
                <span className="text-[9px] text-[#D4AF37] font-bold uppercase">Bronze</span>
              </div>
              <div className="border-2 border-dashed border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4 rounded-2xl flex flex-col items-center justify-center w-36 cursor-pointer hover:bg-[#D4AF37]/10 transition-colors">
                <span className="material-symbols-outlined text-[#D4AF37] mb-1">add</span>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase">Empty</span>
              </div>
              <div className="glass-card p-4 rounded-2xl flex flex-col items-center w-36 border-[#D4AF37]/20 opacity-90">
                <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37]/30 p-1 mb-2">
                  <img alt="Node User" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1LbpBpTjk0w4e8tWG7q6uI64dFuKjLtNmMnmlwBjVjGIxDq52BNArUJyUlGQgn1v3JVveHaOLRckC3JNUCVU2hvsiZAYpwqiBXt-vJqKanmWuPvUY3wI76pJBcTxRGDUEnBrJBCIuM8bOUaaxv7TZ4EYB4Y9KiiEaRWvFVHGnFbhW_C1PGbhbjkqvdUv2ne8t9sxxR36_TjGjjXhsjDApjsTo5OdgqI1LN_f1Mxnj5TSEl4q6gqeucJcblfw12bmPRTFZpVD" />
                </div>
                <span className="text-sm font-semibold text-white">Elena S.</span>
                <span className="text-[9px] text-[#D4AF37] font-bold uppercase">Bronze</span>
              </div>
              <div className="border-2 border-dashed border-[#D4AF37]/20 bg-[#D4AF37]/5 p-4 rounded-2xl flex flex-col items-center justify-center w-36 cursor-pointer hover:bg-[#D4AF37]/10 transition-colors">
                <span className="material-symbols-outlined text-[#D4AF37] mb-1">add</span>
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase">Empty</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── View Full Tree Button ── */}
        <div className="flex justify-center mt-6 mb-4">
          <button
            id="view-full-tree-btn"
            onClick={() => setShowFullTree(true)}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-black font-bold rounded-2xl shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)] active:scale-[0.97] transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[22px]">account_tree</span>
            View Full Network Tree
            <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">1,248 nodes</span>
          </button>
        </div>

        {/* Network Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pb-12">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#D4AF37]">groups</span>
              <h3 className="font-semibold text-white">Total Nodes</h3>
            </div>
            <div className="text-3xl font-bold text-white">1,248</div>
            <p className="text-tertiary text-sm mt-2 font-medium">+14 this week</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#D4AF37]">align_horizontal_left</span>
              <h3 className="font-semibold text-white">Left Branch</h3>
            </div>
            <div className="text-3xl font-bold text-white">612</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-4">
              <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: "49%" }} />
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-[#D4AF37]">align_horizontal_right</span>
              <h3 className="font-semibold text-white">Right Branch</h3>
            </div>
            <div className="text-3xl font-bold text-white">636</div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-4">
              <div className="bg-[#D4AF37] h-full rounded-full" style={{ width: "51%" }} />
            </div>
          </div>
        </div>
      </main>

      {/* Full Tree Modal */}
      {showFullTree && <FullTreeModal onClose={() => setShowFullTree(false)} />}

      <BottomNav />
    </div>
  );
}
