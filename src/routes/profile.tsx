import { useNavigate } from "react-router-dom";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

const stats = [
  { label: "Total Referrals", value: "24", icon: "group_add", color: "#FFD700" },
  { label: "CV Earned", value: "1,250", icon: "toll", color: "#FFD700" },
  { label: "Days Active", value: "147", icon: "calendar_month", color: "#FFD700" },
  { label: "Current Level", value: "Bronze", icon: "workspace_premium", color: "#CD7F32" },
];

const menuItems = [
  { group: "Account", items: [
    { label: "Edit Profile", icon: "person_edit", desc: "Update your name, photo and bio" },
    { label: "Security", icon: "shield_lock", desc: "Password, 2FA, passkeys" },
    { label: "KYC Verification", icon: "verified_user", desc: "Identity verified ✓", badge: "Verified", badgeColor: "text-[#3adfab] bg-[#3adfab]/10" },
    { label: "Linked Wallets", icon: "account_balance_wallet", desc: "3 wallets connected" },
  ]},
  { group: "Preferences", items: [
    { label: "Notifications", icon: "notifications", desc: "Email and push alerts" },
    { label: "Appearance", icon: "palette", desc: "Dark mode, themes" },
    { label: "Language", icon: "language", desc: "English (US)" },
  ]},
  { group: "Support", items: [
    { label: "Help Center", icon: "help", desc: "FAQs and tutorials" },
    { label: "Contact Support", icon: "support_agent", desc: "Chat with our team" },
    { label: "Terms & Privacy", icon: "policy", desc: "Legal documents" },
  ]},
];

export default function ProfilePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative overflow-x-hidden flex flex-col bg-[#000000]">
      <TopHeader />
      <main className="flex-1 pt-24 pb-32 px-4 sm:px-6 w-full max-w-3xl mx-auto space-y-6">

        {/* Profile Hero */}
        <div className="relative overflow-hidden glass-card rounded-[24px] p-8 border border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-transparent pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FFD700]/15 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#FFD700]/40 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD30qnBweug_yxUc1V67lHrZPzWYRi0IC9gajx5FH9y1hvLdJY0M01r6aU1P7XdxR4iUuFO0yE9oCgM_65JsasrFV5XREWd-doJGIIe2AmlObsMxKgw2XZXZnwkOtNT2mOut-K3-527Qgl621lljxiZLn9NEguMZcNMMggnkQKB9z8LnMYSJynlDLuY0JG3cziKIHOS3i7XXcHVL9rw48NqzOOcd9sO5OMx9YS8dj3Plmib-f0upHXWJ9_7snSfrOGAPTyDe4LT"
                  alt="Alex Rivera"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#3adfab] rounded-full border-2 border-[#000000] flex items-center justify-center">
                <span className="material-symbols-outlined text-[10px] text-[#000000] font-black">check</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                <h1 className="text-2xl font-black text-white">Alex Rivera</h1>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#CD7F32] bg-[#CD7F32]/10 border border-[#CD7F32]/20 px-2 py-0.5 rounded-full mx-auto sm:mx-0">
                  <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                  Bronze
                </span>
              </div>
              <p className="text-white/50 text-sm mb-1">alex.rivera@chainverse.com</p>
              <p className="text-white/30 text-xs font-mono">ID: VERSE-99-RIVERA</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                <button className="flex items-center gap-1.5 text-xs font-bold bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700]/20 px-3 py-1.5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[14px]">person_edit</span>
                  Edit Profile
                </button>
                <button className="flex items-center gap-1.5 text-xs font-bold bg-white/5 border border-white/5 text-white/60 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-[14px]">share</span>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-[18px] p-4 border border-white/5 text-center hover:border-white/10 transition-colors">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
              >
                <span className="material-symbols-outlined text-[18px]" style={{ color: stat.color }}>{stat.icon}</span>
              </div>
              <p className="text-lg font-black text-white leading-tight">{stat.value}</p>
              <p className="text-[10px] font-bold text-white/40 tracking-wider mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Referral Link */}
        <div className="glass-card rounded-[18px] p-5 border border-white/5">
          <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-3">Your Referral Link</p>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm text-white/50 font-mono truncate">
              chainverse.app/reg?ref=alex2024
            </div>
            <button className="bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] hover:bg-[#FFD700] hover:text-black px-4 rounded-xl transition-all font-bold text-xs flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
            </button>
          </div>
        </div>

        {/* Settings Menu */}
        <div className="space-y-5">
          {menuItems.map((group) => (
            <div key={group.group}>
              <p className="text-[10px] font-bold text-white/30 tracking-widest uppercase mb-3 px-1">{group.group}</p>
              <div className="glass-card rounded-[18px] border border-white/5 divide-y divide-white/5 overflow-hidden">
                {group.items.map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-4 p-4 hover:bg-white/[0.03] transition-colors text-left group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700]/10 group-hover:border-[#FFD700]/20 transition-colors">
                      <span className="material-symbols-outlined text-[18px] text-white/50 group-hover:text-[#FFD700] transition-colors">{item.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-white/40 mt-0.5 truncate">{item.desc}</p>
                    </div>
                    {"badge" in item && item.badge ? (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-[18px] text-white/20 flex-shrink-0 group-hover:text-white/50 transition-colors">chevron_right</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/")}
          className="w-full py-4 rounded-[18px] border border-[#ffb4ab]/20 bg-[#ffb4ab]/5 text-[#ffb4ab] font-bold flex items-center justify-center gap-2 hover:bg-[#ffb4ab]/10 active:scale-[0.98] transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">logout</span>
          Log Out
        </button>

      </main>
      <BottomNav />
    </div>
  );
}
