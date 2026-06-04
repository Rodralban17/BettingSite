import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp, Star, Shield, Award, ChevronRight,
  Target, Flame, Clock, CheckCircle, BarChart2, Users
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" }
  })
};

const stats = [
  { value: "87%", label: "Win Rate", icon: <Target size={20} />, color: "#00D68F" },
  { value: "12K+", label: "Active Members", icon: <Users size={20} />, color: "#F0B429" },
  { value: "5+", label: "Years Experience", icon: <Award size={20} />, color: "#F0B429" },
  { value: "3.2K", label: "Tips Published", icon: <BarChart2 size={20} />, color: "#00D68F" },
];

const recentTips = [
  { match: "Real Madrid vs Barcelona", pick: "Real Madrid Win", odds: "1.85", status: "won", league: "La Liga" },
  { match: "Man City vs Arsenal", pick: "Over 2.5 Goals", odds: "1.72", status: "won", league: "Premier League" },
  { match: "PSG vs Lyon", pick: "Both Teams Score", odds: "1.90", status: "pending", league: "Ligue 1" },
  { match: "Bayern vs Dortmund", pick: "Bayern -1 AH", odds: "2.10", status: "won", league: "Bundesliga" },
];

const features = [
  {
    icon: <Flame size={24} />,
    title: "Expert Analysis",
    desc: "Every tip backed by professional analysts with 5+ years of market expertise.",
    color: "#F0B429",
  },
  {
    icon: <Shield size={24} />,
    title: "Verified Results",
    desc: "All predictions publicly tracked and verified. No cherry-picking, no lies.",
    color: "#00D68F",
  },
  {
    icon: <Clock size={24} />,
    title: "Daily Updates",
    desc: "Fresh predictions posted every day at 9am. Never miss a value bet.",
    color: "#F0B429",
  },
  {
    icon: <Star size={24} />,
    title: "VIP Exclusives",
    desc: "Premium members get access to high-confidence bets with 90%+ accuracy.",
    color: "#00D68F",
  },
];

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #F0B429 1px, transparent 1px),
              linear-gradient(to bottom, #F0B429 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#F0B429]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#00D68F]/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-[#00D68F] rounded-full animate-pulse" />
            <span className="text-[#F0B429] text-sm font-medium tracking-wide">
              Live Predictions Available Now
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-900 text-6xl sm:text-7xl lg:text-9xl leading-none tracking-tight mb-4"
          >
            WIN MORE.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #F0B429 0%, #FFD700 50%, #C9922A 100%)",
              }}
            >
              BET SMARTER.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Professional sports predictions with{" "}
            <span className="text-white font-semibold">87% accuracy</span>.
            Expert analysis, verified results, daily updates. Join 12,000+ winning members.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/vip"
              className="group flex items-center gap-2 px-8 py-4 bg-[#F0B429] text-[#050B18] font-bold text-lg rounded-xl hover:bg-[#F0B429]/90 transition-all duration-200 hover:shadow-xl hover:shadow-[#F0B429]/30 hover:-translate-y-0.5"
            >
              <Star size={20} fill="#050B18" />
              Get VIP Access
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/free-tips"
              className="flex items-center gap-2 px-8 py-4 border border-[#1A3055] text-white font-medium text-lg rounded-xl hover:bg-white/5 hover:border-[#F0B429]/30 transition-all duration-200"
            >
              <TrendingUp size={20} />
              Today's Free Tips
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {["Verified Tips", "Secure Payment", "24/7 Support", "Cancel Anytime"].map(
              (badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-500 text-sm">
                  <CheckCircle size={14} className="text-[#00D68F]" />
                  {badge}
                </div>
              )
            )}
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 border-y border-[#1A3055]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-6 text-center group hover:border-[#F0B429]/30 transition-all"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <div
                  className="font-display text-4xl font-900 leading-none mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT TIPS PREVIEW */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <p className="text-[#F0B429] text-sm font-medium tracking-widest uppercase mb-2">
                Latest Picks
              </p>
              <h2 className="font-display text-4xl lg:text-5xl font-800 text-white">
                RECENT RESULTS
              </h2>
            </div>
            <Link
              to="/results"
              className="hidden sm:flex items-center gap-2 text-[#F0B429] text-sm hover:gap-3 transition-all"
            >
              View All <ChevronRight size={16} />
            </Link>
          </motion.div>

          <div className="space-y-3">
            {recentTips.map((tip, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center justify-between bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-5 py-4 hover:border-[#F0B429]/30 transition-all"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      tip.status === "won"
                        ? "bg-[#00D68F]"
                        : tip.status === "lost"
                        ? "bg-[#FF3D57]"
                        : "bg-[#F0B429] animate-pulse"
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="text-white font-medium text-sm truncate">
                      {tip.match}
                    </div>
                    <div className="text-gray-500 text-xs">{tip.league}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="hidden sm:block text-gray-400 text-sm font-medium">
                    {tip.pick}
                  </div>
                  <div className="bg-[#F0B429]/10 text-[#F0B429] px-2 py-1 rounded text-xs font-bold">
                    @{tip.odds}
                  </div>
                  <div
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      tip.status === "won"
                        ? "bg-[#00D68F]/15 text-[#00D68F]"
                        : tip.status === "lost"
                        ? "bg-[#FF3D57]/15 text-[#FF3D57]"
                        : "bg-[#F0B429]/15 text-[#F0B429]"
                    }`}
                  >
                    {tip.status.toUpperCase()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-[#040912]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#F0B429] text-sm font-medium tracking-widest uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-white">
              THE PRONOELITE EDGE
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-6 hover:border-[#F0B429]/30 transition-all group overflow-hidden"
              >
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-3xl opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ backgroundColor: f.color }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${f.color}15`, color: f.color }}
                >
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-700 text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] border border-[#1A3055] rounded-3xl p-10 lg:p-14 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0B429]/5 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-2 mb-6">
                <Star size={14} className="text-[#F0B429]" fill="#F0B429" />
                <span className="text-[#F0B429] text-sm font-medium">
                  Limited VIP Spots Available
                </span>
              </div>
              <h2 className="font-display text-5xl lg:text-6xl font-900 text-white mb-4">
                READY TO START WINNING?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of members who trust PronoElite for daily betting intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/payment"
                  className="px-8 py-4 bg-[#F0B429] text-[#050B18] font-bold rounded-xl text-lg hover:bg-[#F0B429]/90 hover:shadow-xl hover:shadow-[#F0B429]/30 transition-all"
                >
                  View VIP Plans
                </Link>
                <Link
                  to="/free-tips"
                  className="px-8 py-4 border border-[#1A3055] text-white font-medium rounded-xl text-lg hover:bg-white/5 transition-all"
                >
                  Try Free First
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}