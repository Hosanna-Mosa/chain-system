import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Zap, 
  Users, 
  BarChart3, 
  Lock, 
  Globe, 
  ArrowRight, 
  Flame, 
  Droplets, 
  Coins,
  Cpu,
  Vote,
  AlertTriangle,
  Layers,
  Network
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-primary-container selection:text-black font-sans">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 mesh-gradient opacity-40 pointer-events-none"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary-container/20 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary-container/10 blur-[140px] rounded-full pointer-events-none"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] glass-panel border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center shadow-lg shadow-primary-container/20 group-hover:scale-110 transition-all duration-300">
              <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Apex Bull Coin</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-white/60 hover:text-white transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container transition-all group-hover:w-full"></span>
            </a>
            <a href="#tokenomics" className="text-sm font-semibold text-white/60 hover:text-white transition-colors relative group">
              Tokenomics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container transition-all group-hover:w-full"></span>
            </a>
            <a href="#utility" className="text-sm font-semibold text-white/60 hover:text-white transition-colors relative group">
              Utility
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container transition-all group-hover:w-full"></span>
            </a>
            <a href="#roadmap" className="text-sm font-semibold text-white/60 hover:text-white transition-colors relative group">
              Roadmap
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-container transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="px-5 py-2 text-sm font-bold text-white/70 hover:text-white transition-colors hidden sm:block"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="px-6 py-2.5 text-sm font-bold primary-gradient rounded-full shadow-[0_8px_20px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_25px_rgba(212,175,55,0.5)] hover:scale-[1.05] text-black active:scale-[0.98] transition-all duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-primary-fixed-dim">Apex Bull Coin — Official Whitepaper Draft</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1] max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            The Future of <span className="text-primary-container bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]">Community-Driven</span> Finance
          </h1>
          
          <p className="text-lg md:text-2xl text-white/50 max-w-3xl mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Apex Bull Coin (ABC) is a decentralized digital asset designed to combine sustainable tokenomics, real-world utility, and community governance.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-24 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <Link 
              to="/register" 
              className="px-10 py-5 text-lg font-bold primary-gradient rounded-2xl flex items-center gap-3 group shadow-2xl shadow-primary-container/20 hover:shadow-primary-container/40 hover:-translate-y-1 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="#about" 
              className="px-10 py-5 text-lg font-bold bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all hover:-translate-y-1"
            >
              Read Whitepaper
            </a>
          </div>

          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-5xl glass-card p-12 rounded-[32px] border-white/5 shadow-2xl animate-in fade-in slide-in-from-bottom-20 duration-1000 delay-400">
            <div>
              <div className="text-4xl font-black mb-2 text-white">1,000,000,000</div>
              <div className="text-xs text-primary-container uppercase tracking-[0.2em] font-black">Total ABC Supply</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-white">40%</div>
              <div className="text-xs text-primary-container uppercase tracking-[0.2em] font-black">Public Allocation</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-white">DAO</div>
              <div className="text-xs text-primary-container uppercase tracking-[0.2em] font-black">Community Led</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2 text-white">Deflation</div>
              <div className="text-xs text-primary-container uppercase tracking-[0.2em] font-black">Supply Model</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="about" className="py-32 px-6 relative bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-black uppercase tracking-widest">
                01. Vision & Mission
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Empowering Global Users through Transparency</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Our mission is to build a balanced crypto environment where users benefit from secure transactions, staking rewards, and ecosystem participation.
              </p>
              <div className="grid gap-6 pt-4">
                {[
                  { title: "Strong Community", desc: "Build an engaged and active global community." },
                  { title: "Real Utility", desc: "Provide value that goes beyond mere speculation." },
                  { title: "Sustainable Value", desc: "Ensure long-term growth through smart tokenomics." },
                  { title: "Financial Inclusion", desc: "Promote decentralization for everyone, everywhere." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group">
                    <div className="mt-1 w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center group-hover:bg-primary-container transition-colors">
                      <ShieldCheck className="w-4 h-4 text-primary-container group-hover:text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-white/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary-container/30 blur-[120px] rounded-full group-hover:bg-primary-container/40 transition-colors duration-500"></div>
              <div className="relative glass-card p-12 rounded-[40px] border-white/10 space-y-12 premium-glow">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-container/30 to-secondary-container/10 rounded-2xl flex items-center justify-center text-secondary-container shadow-inner">
                    <Zap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Utility-First</h3>
                    <p className="text-sm text-white/40">Real-world applications integrated from day one.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-tertiary-container/30 to-tertiary-container/10 rounded-2xl flex items-center justify-center text-tertiary shadow-inner">
                    <Globe className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Scalable Architecture</h3>
                    <p className="text-sm text-white/40">Built for mass adoption across multiple chains.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 shadow-inner">
                    <Network className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Decentralized Governance</h3>
                    <p className="text-sm text-white/40">Your voice matters in every major decision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest mb-6">
              02. Market Analysis
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">The Problem & The Solution</h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
              Identifying the core issues in modern DeFi and providing robust, transparent solutions to protect and empower investors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* <div className="glass-card p-12 rounded-[40px] border border-red-500/10 hover:border-red-500/20 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[80px] -mr-16 -mt-16 group-hover:bg-red-500/10 transition-colors"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-6 h-6" />
                Problem Statement
              </h3>
              <div className="space-y-8">
                {[
                  "Lack of transparency in new tokens leads to investor risk.",
                  "Unsustainable pump & dump cycles hurt long-term holders.",
                  "Limited real-world utility makes many tokens speculative only.",
                  "Poor community governance creates centralized control."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/40 mt-2 flex-shrink-0"></div>
                    <p className="text-white/40 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="glass-card p-12 rounded-[40px] border border-primary-container/20 hover:border-primary-container/40 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 blur-[80px] -mr-16 -mt-16 group-hover:bg-primary-container/20 transition-colors"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-primary-container">
                <ShieldCheck className="w-6 h-6" />
                The ABC Solution
              </h3>
              <div className="space-y-8">
                {[
                  "Deflationary token model to systematically reduce supply.",
                  "Staking mechanisms providing consistent passive income.",
                  "Community governance via transparent DAO voting systems.",
                  "Multi-chain compatibility for future ecosystem scalability."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start group/item">
                    <div className="w-6 h-6 rounded-lg bg-primary-container/20 flex items-center justify-center mt-0.5 group-hover/item:bg-primary-container transition-colors">
                      <span className="text-primary-container text-xs font-black group-hover/item:text-white">✓</span>
                    </div>
                    <p className="text-white/80 leading-relaxed font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-6">
                  <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
                    <div className="text-blue-400 font-black text-xl">ERC-20 / BEP-20</div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Standard</p>
                  </div>
                  <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
                    <div className="text-blue-400 font-black text-xl">Audited</div>
                    <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Smart Contracts</p>
                  </div>
                  <div className="col-span-2 glass-card p-8 rounded-3xl border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-white font-black text-2xl">Multi-Chain</div>
                      <p className="text-xs text-white/40 uppercase tracking-widest font-bold">Support Planned</p>
                    </div>
                    <Layers className="w-10 h-10 text-white/20" />
                  </div>
                </div>
             </div>
             <div className="order-1 md:order-2 space-y-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-widest">
                  03. Technology
                </div>
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">Advanced Blockchain Infrastructure</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Apex Bull Coin is built on robust, audited, and open-source smart contracts. We prioritize multi-layer verification to ensure maximum security for our holders.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-white/80 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    Open-source and transparent contract logic
                  </li>
                  <li className="flex items-center gap-3 text-white/80 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                    Integrated security protocols for transaction safety
                  </li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="max-w-2xl space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 border border-secondary-container/20 text-secondary-container text-xs font-black uppercase tracking-widest">
                04. Tokenomics
              </div>
              <h2 className="text-4xl md:text-6xl font-bold">Smart Distribution for Long-term Stability</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Our token distribution is carefully designed to foster community growth while ensuring the team and project remain committed for years.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-4 items-center px-6 py-4 rounded-2xl bg-white/5 border border-white/10">
                <Coins className="w-8 h-8 text-secondary-container" />
                <div>
                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest">Ticker Symbol</div>
                  <div className="text-2xl font-black text-white">$ABC</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              {[
                { label: "Public Sale / Liquidity", value: "40%", desc: "Open to the community for immediate growth.", color: "bg-[#D4AF37]" },
                { label: "Staking Rewards", value: "20%", desc: "Rewarding long-term holders and participants.", color: "bg-[#D4AF37]" },
                { label: "Team (Locked 2 Years)", value: "15%", desc: "Ensuring long-term commitment and trust.", color: "bg-[#3adfab]" },
                { label: "Marketing & Partnerships", value: "15%", desc: "Fueling global adoption and ecosystem reach.", color: "bg-blue-500" },
                { label: "Reserve Fund", value: "10%", desc: "Safety net for unexpected ecosystem needs.", color: "bg-white/20" }
              ].map((item, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="flex justify-between items-end mb-3">
                    <div>
                      <h4 className="font-black text-white text-lg">{item.label}</h4>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                    <span className="text-2xl font-black text-white">{item.value}</span>
                  </div>
                  <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} group-hover:brightness-125 transition-all duration-300`} style={{ width: item.value }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass-card p-10 rounded-[32px] border-orange-500/10 hover:border-orange-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center text-orange-500 mb-6">
                  <Flame className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">2% Burn Tax</h4>
                <p className="text-sm text-white/50 leading-relaxed">Systematic deflationary mechanism to increase token scarcity and long-term value.</p>
              </div>
              <div className="glass-card p-10 rounded-[32px] border-blue-500/10 hover:border-blue-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500 mb-6">
                  <Droplets className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">3% Liquidity</h4>
                <p className="text-sm text-white/50 leading-relaxed">Every transaction contributes to the liquidity pool, ensuring stable trading environments.</p>
              </div>
              <div className="glass-card p-10 rounded-[32px] border-green-500/10 hover:border-green-500/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                  <Coins className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">2% Holder Rewards</h4>
                <p className="text-sm text-white/50 leading-relaxed">Earn passive ABC simply by holding. Redistributed automatically to all community wallets.</p>
              </div>
              <div className="glass-card p-10 rounded-[32px] border-[#D4AF37]/10 hover:border-[#D4AF37]/30 transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6">
                  <Lock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">2-Year Lock</h4>
                <p className="text-sm text-white/50 leading-relaxed">Team tokens are securely locked to align interests with our growing investor community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Utility Section */}
      <section id="utility" className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary text-xs font-black uppercase tracking-widest">
              05. Utility
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">Real Ecosystem Power</h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
              Apex Bull Coin is more than just a currency; it's the utility token powering a full suite of decentralized financial services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 />, title: "Staking & Yield", desc: "Lock your ABC to earn high-yield rewards and passive income." },
              { icon: <Vote />, title: "DAO Governance", desc: "Use your tokens to vote on treasury allocation and ecosystem updates." },
              { icon: <Zap />, title: "Ecosystem Payments", desc: "Pay for premium services and fees within our partner dApps." },
              { icon: <Cpu />, title: "NFT Integration", desc: "Exclusive access to our upcoming NFT marketplace and unique digital assets." }
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-10 rounded-[40px] border-white/5 hover:border-primary-container/30 transition-all duration-500 text-center group premium-glow">
                <div className="w-20 h-20 mx-auto mb-8 bg-white/5 rounded-[24px] flex items-center justify-center text-primary-container group-hover:scale-110 group-hover:bg-primary-container group-hover:text-white transition-all duration-500 shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-32 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/5 blur-[160px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 text-xs font-black uppercase tracking-widest">
              06. Roadmap
            </div>
            <h2 className="text-4xl md:text-6xl font-bold">The Path Forward</h2>
            <p className="text-white/50 max-w-3xl mx-auto text-lg leading-relaxed">
              Our strategic timeline for the next 24 months, focusing on sustainable growth and widespread adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "Phase 1", title: "Foundation", items: ["Smart Contract Creation", "Official Website Launch", "Community Building Initiatives"] },
              { phase: "Phase 2", title: "Market Growth", items: ["CEX & DEX Listings", "Global Marketing Campaigns", "Staking Platform v1 Launch"] },
              { phase: "Phase 3", title: "Governance", items: ["DAO Governance Model", "Ecosystem Partnerships", "Strategic App Integrations"] },
              { phase: "Phase 4", title: "Expansion", items: ["Multi-chain Bridge", "Native dApp Ecosystem", "NFT Marketplace Launch"] }
            ].map((step, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center shadow-lg shadow-primary-container/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg font-black">{idx + 1}</span>
                  </div>
                  <div className="h-[1px] flex-grow bg-white/10"></div>
                </div>
                <div className="glass-card p-8 rounded-3xl border-white/5 h-full hover:border-primary-container/20 transition-colors">
                  <div className="text-primary-container text-xs font-black uppercase mb-3 tracking-widest">{step.phase}</div>
                  <h3 className="text-2xl font-bold mb-6">{step.title}</h3>
                  <ul className="space-y-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-white/50 group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-container/40 mt-1.5"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Transparency */}
      <section className="py-32 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-primary-container/20 blur-[120px] rounded-full"></div>
                <div className="relative grid grid-cols-2 gap-8">
                  <div className="glass-card p-10 rounded-[32px] border-white/10 hover:bg-white/5 transition-all group">
                    <ShieldCheck className="w-12 h-12 text-green-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold mb-2">Audited Security</h4>
                    <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-bold">CertiK & Hacken Audits Planned</p>
                  </div>
                  <div className="glass-card p-10 rounded-[32px] border-white/10 hover:bg-white/5 transition-all group">
                    <Users className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-bold mb-2">Public Ledger</h4>
                    <p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-bold">100% On-Chain Transparency</p>
                  </div>
                  <div className="col-span-2 glass-card p-10 rounded-[32px] border-white/10 hover:bg-white/5 transition-all group flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                        <Vote className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold">DAO Controlled</h4>
                        <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest font-black">Community Led Governance</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="order-1 md:order-2 space-y-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary text-xs font-black uppercase tracking-widest">
                07. Security & Transparency
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Built on the Foundation of Trust</h2>
              <p className="text-white/60 text-xl leading-relaxed">
                Apex Bull Coin is committed to the highest standards of decentralized security. Every major upgrade is community-voted, and every contract is publicly tracked.
              </p>
              <div className="flex gap-12 pt-4">
                <div className="space-y-1">
                  <div className="text-4xl font-black text-white">100%</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-black">Open Source</p>
                </div>
                <div className="space-y-1">
                  <div className="text-4xl font-black text-white">Audited</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-black">Contract Model</p>
                </div>
              </div>
              <div className="pt-4">
                 <Link to="/register" className="inline-flex items-center gap-2 text-primary-container font-black hover:gap-4 transition-all">
                   Join the DAO Community <ArrowRight className="w-5 h-5" />
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-44 px-6 relative overflow-hidden">
        <div className="absolute inset-0 primary-gradient opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">Join the Future of Decentralized Growth</h2>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto">
            Apex Bull Coin aims to bridge the gap between community-driven tokens and real utility, offering a scalable ecosystem for everyone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Link 
              to="/register" 
              className="px-12 py-6 text-xl font-black primary-gradient rounded-[24px] shadow-2xl shadow-primary-container/30 hover:shadow-primary-container/60 text-black font-black hover:-translate-y-2 active:scale-[0.98] transition-all duration-500"
            >
              Get $ABC Tokens
            </Link>
            <Link 
              to="/login" 
              className="px-12 py-6 text-xl font-black bg-white/5 hover:bg-white/10 border border-white/10 rounded-[24px] transition-all hover:-translate-y-2"
            >
              Member Login
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-1 space-y-8">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-white text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                </div>
                <span className="text-2xl font-black tracking-tight">Apex Bull Coin</span>
              </div>
              <p className="text-white/40 leading-relaxed font-medium">
                The leading decentralized asset designed for sustainable growth, community participation, and long-term utility.
              </p>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm">Ecosystem</h4>
              <ul className="space-y-6 text-sm font-bold text-white/40">
                <li><a href="#" className="hover:text-primary-container transition-colors">Stake ABC</a></li>
                <li><a href="#" className="hover:text-primary-container transition-colors">DAO Governance</a></li>
                <li><a href="#" className="hover:text-primary-container transition-colors">Ecosystem dApps</a></li>
                <li><a href="#" className="hover:text-primary-container transition-colors">NFT Marketplace</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-white mb-8 uppercase tracking-widest text-sm">Community</h4>
              <ul className="space-y-6 text-sm font-bold text-white/40">
                <li><a href="#" className="hover:text-primary-container transition-colors">Telegram</a></li>
                <li><a href="#" className="hover:text-primary-container transition-colors">Twitter (X)</a></li>
                <li><a href="#" className="hover:text-primary-container transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-primary-container transition-colors">Medium</a></li>
              </ul>
            </div>

            <div className="space-y-8">
              <h4 className="font-black text-white mb-2 uppercase tracking-widest text-sm text-primary-container">Legal Disclaimer</h4>
              <p className="text-[10px] leading-loose text-white/30 uppercase font-black">
                Investors should conduct independent research before participating. Market volatility, regulatory changes, and adoption uncertainty are inherent risks. This document is for informational purposes only and does not constitute financial advice.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 text-[10px] text-white/30 uppercase tracking-[0.3em] font-black">
            <div>© 2026 Apex Bull Coin Ecosystem. All rights reserved.</div>
            <div className="flex gap-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
