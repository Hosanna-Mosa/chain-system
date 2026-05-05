import { Link, useLocation } from "react-router-dom";

export function BottomNav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-black/90 backdrop-blur-lg flex justify-around items-center px-4 pb-6 pt-3 border-t border-white/10 rounded-t-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.5)] md:hidden">
      <Link
        to="/dashboard"
        className={`flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-300 ${
          isActive("/dashboard")
            ? "text-[#D4AF37] bg-[#D4AF37]/10 rounded-xl"
            : "text-slate-500 hover:bg-white/5"
        }`}
      >
        <span
          className={`material-symbols-outlined mb-1 ${
            isActive("/dashboard") ? "fill-1" : ""
          }`}
        >
          dashboard
        </span>
        <span className="text-[11px] font-semibold font-['Inter'] uppercase tracking-widest">
          Home
        </span>
      </Link>
      <Link
        to="/network"
        className={`flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-300 ${
          isActive("/network")
            ? "text-[#D4AF37] bg-[#D4AF37]/10 rounded-xl"
            : "text-slate-500 hover:bg-white/5"
        }`}
      >
        <span
          className={`material-symbols-outlined mb-1 ${
            isActive("/network") ? "fill-1" : ""
          }`}
        >
          account_tree
        </span>
        <span className="text-[11px] font-semibold font-['Inter'] uppercase tracking-widest">
          Network
        </span>
      </Link>
      <Link
        to="/wallet"
        className={`flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-300 ${
          isActive("/wallet")
            ? "text-[#D4AF37] bg-[#D4AF37]/10 rounded-xl"
            : "text-slate-500 hover:bg-white/5"
        }`}
      >
        <span
          className={`material-symbols-outlined mb-1 ${
            isActive("/wallet") ? "fill-1" : ""
          }`}
        >
          account_balance_wallet
        </span>
        <span className="text-[11px] font-semibold font-['Inter'] uppercase tracking-widest">
          Wallet
        </span>
      </Link>
      <Link
        to="/profile"
        className={`flex flex-col items-center justify-center px-4 py-2 transition-all active:scale-90 duration-300 ${
          isActive("/profile")
            ? "text-[#D4AF37] bg-[#D4AF37]/10 rounded-xl"
            : "text-slate-500 hover:bg-white/5"
        }`}
      >
        <span
          className={`material-symbols-outlined mb-1 ${
            isActive("/profile") ? "fill-1" : ""
          }`}
        >
          person
        </span>
        <span className="text-[11px] font-semibold font-['Inter'] uppercase tracking-widest">
          Profile
        </span>
      </Link>
    </nav>
  );
}
