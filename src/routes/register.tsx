import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TopHeader } from "@/components/TopHeader";
import { BottomNav } from "@/components/BottomNav";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [depositOption, setDepositOption] = useState<"split" | "single">("split");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    referralCode: "",
    usdRefId: "",
    cvRefId: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd validate the ref IDs and send data to API
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Custom Header */}
      <header className="w-full h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#000000]/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight whitespace-nowrap">ChainVerse</span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <span className="text-sm font-medium text-white/70 hidden sm:block">Alex Rivera</span>
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 overflow-hidden flex-shrink-0">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[640px] mx-auto px-6 py-12 flex flex-col items-center">
        {/* Title and Subtitle */}
        <section className="text-center mb-10 w-full">
          <h1 className="text-[40px] sm:text-[56px] font-bold tracking-tight mb-4 leading-tight">
            {step === 1 ? "Join the Verse" : "Finalize Account"}
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-[480px] mx-auto leading-relaxed">
            {step === 1 
              ? "Experience the next generation of decentralized finance with a secure institutional-grade account."
              : "Complete your initial deposit to activate your account and claim your starting bonus reward."
            }
          </p>
        </section>

        {/* Step Indicator */}
        <div className="flex items-center gap-4 mb-8 w-full max-w-[300px]">
          <div className="flex-1 h-1 rounded-full overflow-hidden bg-white/5">
            <div className={`h-full bg-[#D4AF37] transition-all duration-500 ${step >= 1 ? "w-full" : "w-0"}`} />
          </div>
          <div className="flex-1 h-1 rounded-full overflow-hidden bg-white/5">
            <div className={`h-full bg-[#D4AF37] transition-all duration-500 ${step >= 2 ? "w-full" : "w-0"}`} />
          </div>
        </div>

        {/* Register Card */}
        <div className="w-full glass-card rounded-[24px] p-6 sm:p-8 border border-white/5 shadow-2xl">
          {step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-6">
              <div className="space-y-5">
                <div className="group">
                  <label className="block text-[10px] font-bold text-white/40 tracking-widest uppercase mb-2">
                    Full name
                  </label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                    placeholder="Alex Rivera"
                    type="text"
                    required
                  />
                </div>
                
                <div className="group">
                  <label className="block text-[10px] font-bold text-white/40 tracking-widest uppercase mb-2">
                    Email address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                    placeholder="alex.rivera@chainverse.com"
                    type="email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-[10px] font-bold text-white/40 tracking-widest uppercase mb-2">
                      Password
                    </label>
                    <input
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                      placeholder="••••••••"
                      type="password"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] font-bold text-white/40 tracking-widest uppercase mb-2">
                      Confirm password
                    </label>
                    <input
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/50 transition-all"
                      placeholder="••••••••"
                      type="password"
                      required
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase mb-2">
                    Referral Code (Optional)
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37] text-[20px]">confirmation_number</span>
                    <input
                      name="referralCode"
                      value={formData.referralCode}
                      onChange={handleInputChange}
                      className="w-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-[#D4AF37]/40 focus:outline-none focus:border-[#D4AF37] transition-all"
                      placeholder="Enter Referral Code"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <input
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]/50 transition-all cursor-pointer"
                    id="terms"
                    type="checkbox"
                    required
                  />
                  <label className="text-white/40 text-xs leading-relaxed cursor-pointer" htmlFor="terms">
                    I agree to the{" "}
                    <a className="text-[#D4AF37] hover:underline" href="#">
                      Terms & Conditions
                    </a>{" "}
                    and acknowledge the{" "}
                    <a className="text-[#D4AF37] hover:underline" href="#">
                      Privacy Policy
                    </a>{" "}
                    of ChainVerse Global.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-black font-bold rounded-xl shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)] active:scale-[0.98] transition-all duration-300"
                >
                  Continue to Deposit
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-8">
              {/* Deposit Method Selector */}
              <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5">
                <button
                  onClick={() => setDepositOption("single")}
                  className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${
                    depositOption === "single"
                      ? "bg-[#D4AF37] text-black shadow-lg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  Single USD (50 Min)
                </button>
                <button
                  onClick={() => setDepositOption("split")}
                  className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${
                    depositOption === "split"
                      ? "bg-[#D4AF37] text-black shadow-lg"
                      : "text-white/40 hover:text-white"
                  }`}
                >
                  Split USD & CV (25/25)
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-8">
                {/* USD Section (Always visible but min amount changes) */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF0013]/10 flex items-center justify-center border border-[#FF0013]/20">
                        <span className="material-symbols-outlined text-[#85BB65] text-lg">payments</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">USD Deposit</h3>
                    </div>
                    <div className="bg-[#FF0013]/10 border border-[#FF0013]/30 px-3 py-1 rounded-full">
                      <p className="text-[10px] font-black text-[#FF0013] uppercase tracking-tighter">
                        Min Deposit: {depositOption === "single" ? "50" : "25"} USD
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                    <div className="bg-white p-3 rounded-2xl w-32 h-32 mx-auto sm:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center">
                      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=USD_ADDRESS_HERE" alt="QR USD" className="w-full h-full" />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                        <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">USD Wallet Address</p>
                        <p className="text-xs font-mono text-white/80 break-all">TJ3V...9xZ7k</p>
                      </div>
                      <div className="group">
                        <label className="block text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase mb-2">
                          USD Payment Reference ID
                        </label>
                        <input
                          name="usdRefId"
                          value={formData.usdRefId}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] transition-all"
                          placeholder="Enter USD Hash/TXID"
                          type="text"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CV Section (Only visible if split is selected) */}
                {depositOption === "split" && (
                  <>
                    <div className="h-px bg-white/5 w-full" />
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]">
                            <span className="material-symbols-outlined text-[18px]">toll</span>
                          </div>
                          <h3 className="text-lg font-bold text-white">CV Coin Deposit</h3>
                        </div>
                        <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full">
                          <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-tighter">Min Deposit: 25 CV</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                        <div className="bg-white p-3 rounded-2xl w-32 h-32 mx-auto sm:mx-0 shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center">
                          <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=CV_ADDRESS_HERE" alt="QR CV" className="w-full h-full" />
                        </div>
                        <div className="space-y-4">
                          <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                            <p className="text-[10px] font-bold text-white/40 tracking-widest uppercase mb-1">CV Wallet Address</p>
                            <p className="text-xs font-mono text-white/80 break-all">CV_0x...eA4f</p>
                          </div>
                          <div className="group">
                            <label className="block text-[10px] font-bold text-[#D4AF37] tracking-widest uppercase mb-2">
                              CV Payment Reference ID
                            </label>
                            <input
                              name="cvRefId"
                              value={formData.cvRefId}
                              onChange={handleInputChange}
                              className="w-full bg-white/5 border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#D4AF37] transition-all"
                              placeholder="Enter CV Hash/TXID"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37] text-black font-bold rounded-xl shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.5)] active:scale-[0.98] transition-all duration-300"
                  >
                    Complete Registration
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full py-4 text-white/40 font-bold hover:text-white transition-colors"
                  >
                    Back to Account Details
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="text-center mt-8">
            <p className="text-sm text-white/40">
              Already have an account?{" "}
              <Link to="/login" className="text-white font-bold hover:underline ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

