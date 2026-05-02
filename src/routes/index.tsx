import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Login — ChainVerse" },
      {
        name: "description",
        content: "Secure login to your ChainVerse decentralized finance account.",
      },
      { property: "og:title", content: "Login — ChainVerse" },
      {
        property: "og:description",
        content: "Secure login to your ChainVerse decentralized finance account.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-12 bg-[#0e0d17]">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 mesh-gradient opacity-40"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-container/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/10 blur-[120px] rounded-full pointer-events-none"></div>

      <header className="fixed top-0 left-0 w-full z-50 flex justify-end items-center px-6 py-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-all">
          <span className="material-symbols-outlined text-[20px]">dark_mode</span>
        </button>
      </header>

      <div className="relative z-10 w-full max-w-[440px] flex flex-col items-center mx-auto">
        {/* Logo and Title */}
        <div className="flex flex-col items-center mb-10 text-center w-full">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-[#6C47FF] blur-3xl opacity-50 rounded-full scale-150"></div>
            <div className="relative w-20 h-20 bg-gradient-to-br from-[#6C47FF] to-[#8A70FF] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(108,71,255,0.6)] border border-white/10">
              <span
                className="material-symbols-outlined text-4xl text-white"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                rocket_launch
              </span>
            </div>
          </div>
          <h1 className="text-[44px] font-bold text-white tracking-tight mb-2 leading-tight">ChainVerse</h1>
          <p className="text-white/60 text-base max-w-[280px] mx-auto leading-relaxed">
            Secure access to the next generation of decentralized finance.
          </p>
        </div>

        {/* Login Card */}
        <div className="w-full glass-card rounded-[24px] p-8 border border-white/5 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <input
                className="w-full bg-[#14121c] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/50 transition-all"
                id="email"
                name="email"
                placeholder="Email Address"
                type="email"
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="relative">
                <input
                  className="w-full bg-[#14121c] border border-white/5 rounded-xl px-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary-container/50 focus:ring-1 focus:ring-primary-container/50 transition-all"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  required
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-white/10 bg-white/5 text-[#6C47FF] focus:ring-[#6C47FF]/50 transition-all cursor-pointer"
                  type="checkbox"
                />
                <span className="text-xs font-medium text-white/50 group-hover:text-white/80 transition-colors">
                  Remember me
                </span>
              </label>
              <a
                className="text-xs font-medium text-[#6C47FF] hover:text-white transition-colors"
                href="#"
              >
                Forgot Password?
              </a>
            </div>

            <button
              className="w-full bg-gradient-to-r from-[#6C47FF] to-[#5e35f1] text-white font-bold py-4 rounded-xl shadow-[0_8px_24px_rgba(108,71,255,0.4)] hover:shadow-[0_12px_32px_rgba(108,71,255,0.6)] active:scale-[0.98] transition-all duration-300"
              type="submit"
            >
              Login
            </button>
          </form>


        </div>

        <p className="mt-8 text-sm text-white/50">
          Don't have an account?{" "}
          <Link to="/register" className="text-white font-bold hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
