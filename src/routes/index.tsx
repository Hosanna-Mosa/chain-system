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
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-gutter py-xl">
      <div className="fixed inset-0 z-[-1] mesh-gradient opacity-60"></div>
      <div className="fixed top-[20%] left-[10%] w-[300px] h-[300px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[10%] right-[5%] w-[400px] h-[400px] bg-secondary-container/5 blur-[150px] rounded-full pointer-events-none"></div>

      <header className="fixed top-0 left-0 w-full z-50 flex justify-end items-center px-6 py-4">
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:text-white transition-colors duration-200">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
      </header>

      <div className="flex flex-col items-center mb-10 text-center">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-primary-container blur-2xl opacity-40 rounded-full"></div>
          <div className="relative w-20 h-20 bg-gradient-to-br from-primary-container to-on-primary-fixed-variant rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(108,71,255,0.4)]">
            <span
              className="material-symbols-outlined text-4xl text-white"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              rocket_launch
            </span>
          </div>
        </div>
        <h1 className="text-display-lg text-white tracking-tighter mb-2">ChainVerse</h1>
        <p className="text-on-surface-variant text-body-md max-w-sm">
          Secure access to the next generation of decentralized finance.
        </p>
      </div>

      <div className="w-full max-w-md glass-card rounded-[16px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative floating-label-input group">
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 pt-6 pb-2 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              id="email"
              name="email"
              placeholder=" "
              type="email"
              required
            />
            <label
              className="absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none origin-left"
              htmlFor="email"
            >
              Email Address
            </label>
          </div>
          <div className="relative floating-label-input group">
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 pt-6 pb-2 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
              id="password"
              name="password"
              placeholder=" "
              type="password"
              required
            />
            <label
              className="absolute left-4 top-4 text-on-surface-variant transition-all pointer-events-none origin-left"
              htmlFor="password"
            >
              Password
            </label>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white mt-2"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">visibility</span>
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2 cursor-pointer group">
              <input
                className="rounded border-outline-variant bg-surface-container-lowest text-primary-container focus:ring-primary-container"
                type="checkbox"
              />
              <span className="text-label-caps text-on-surface-variant group-hover:text-white transition-colors">
                Remember me
              </span>
            </label>
            <a
              className="text-label-caps text-primary-fixed-dim hover:text-white transition-colors"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <button
            className="w-full bg-gradient-to-r from-primary-container to-on-primary-fixed-variant text-white text-title-sm py-4 rounded-xl shadow-[0_4px_20px_rgba(108,71,255,0.3)] hover:shadow-[0_4px_30px_rgba(108,71,255,0.5)] active:scale-[0.98] transition-all duration-200"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-8 flex flex-col items-center">
          <div className="w-full flex items-center mb-6">
            <div className="flex-1 h-px bg-outline-variant/30"></div>
            <span className="px-4 text-label-caps text-on-surface-variant">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-outline-variant/30"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <button className="flex items-center justify-center space-x-2 py-3 px-4 glass-card rounded-xl hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[20px]">
                account_balance_wallet
              </span>
              <span className="text-label-caps">Wallet</span>
            </button>
            <button className="flex items-center justify-center space-x-2 py-3 px-4 glass-card rounded-xl hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[20px]">fingerprint</span>
              <span className="text-label-caps">Passkey</span>
            </button>
          </div>
        </div>
      </div>
      <p className="mt-8 text-on-surface-variant text-body-md">
        Don't have an account?{" "}
        <Link to="/register" className="text-primary-fixed-dim font-bold hover:underline ml-1">
          Register
        </Link>
      </p>
    </div>
  );
}
