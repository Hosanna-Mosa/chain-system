import { Link, useNavigate } from "@tanstack/react-router";

interface TopHeaderProps {
  user?: string;
}

export function TopHeader({ user = "Alex Rivera" }: TopHeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="bg-slate-950/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-white/10 shadow-[0_4px_20px_rgba(108,71,255,0.08)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Link
          to="/dashboard"
          className="text-2xl font-black tracking-tighter text-white font-['Inter']"
        >
          ChainVerse
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            to="/dashboard"
            className="text-slate-400 font-['Inter'] font-medium tracking-tight hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/network"
            className="text-slate-400 font-['Inter'] font-medium tracking-tight hover:text-white transition-colors duration-200"
          >
            Network
          </Link>
          <a
            className="text-slate-400 font-['Inter'] font-medium tracking-tight hover:text-white transition-colors duration-200"
            href="#"
          >
            Wallet
          </a>
          <a
            className="text-slate-400 font-['Inter'] font-medium tracking-tight hover:text-white transition-colors duration-200"
            href="#"
          >
            Profile
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer active:scale-95 transition-transform">
            dark_mode
          </span>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <span className="text-slate-400 text-sm hidden sm:block font-['Inter'] font-medium">
              {user}
            </span>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6C47FF]/30">
              <img
                alt="User profile avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD30qnBweug_yxUc1V67lHrZPzWYRi0IC9gajx5FH9y1hvLdJY0M01r6aU1P7XdxR4iUuFO0yE9oCgM_65JsasrFV5XREWd-doJGIIe2AmlObsMxKgw2XZXZnwkOtNT2mOut-K3-527Qgl621lljxiZLn9NEguMZcNMMggnkQKB9z8LnMYSJynlDLuY0JG3cziKIHOS3i7XXcHVL9rw48NqzOOcd9sO5OMx9YS8dj3Plmib-f0upHXWJ9_7snSfrOGAPTyDe4LT"
              />
            </div>
            <button
              type="button"
              onClick={() => navigate({ to: "/" })}
              className="material-symbols-outlined text-slate-400 hover:text-white cursor-pointer active:scale-95 transition-transform bg-transparent border-0 p-0"
              aria-label="Log out"
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
