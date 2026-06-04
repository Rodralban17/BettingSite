import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Lock, Crown, Flame, Shield, ChevronRight, TrendingUp } from "lucide-react";

const vipTips = [
  {
    id: 1,
    time: "13:30",
    match: "Liverpool vs Manchester City",
    league: "Premier League",
    pick: "Liverpool Win & Over 2.5",
    odds: "3.40",
    confidence: 91,
    tag: "BANKER",
    tagColor: "#F0B429",
    blurred: false,
  },
  {
    id: 2,
    time: "16:00",
    match: "Barcelona vs Sevilla",
    league: "La Liga",
    pick: "BTTS & Over 2.5",
    odds: "2.10",
    confidence: 89,
    tag: "HIGH VALUE",
    tagColor: "#00D68F",
    blurred: true,
  },
  {
    id: 3,
    time: "18:45",
    match: "Juventus vs Napoli",
    league: "Serie A",
    pick: "Asian Handicap -1",
    odds: "2.75",
    confidence: 85,
    tag: "SAFE BET",
    tagColor: "#00D68F",
    blurred: true,
  },
  {
    id: 4,
    time: "20:00",
    match: "PSG vs Monaco",
    league: "Ligue 1",
    pick: "PSG Win & Over 3.5",
    odds: "2.95",
    confidence: 88,
    tag: "ACCUMULATOR",
    tagColor: "#F0B429",
    blurred: true,
  },
  {
    id: 5,
    time: "21:00",
    match: "Real Madrid vs Atletico",
    league: "La Liga",
    pick: "Real Madrid Win",
    odds: "2.20",
    confidence: 86,
    tag: "MUST BET",
    tagColor: "#FF3D57",
    blurred: true,
  },
];

const vipPerks = [
  { icon: <Crown size={18} />, text: "10+ exclusive daily picks" },
  { icon: <TrendingUp size={18} />, text: "Accumulators with huge odds" },
  { icon: <Shield size={18} />, text: "90%+ documented accuracy" },
  { icon: <Flame size={18} />, text: "Telegram alerts before kickoff" },
];

export default function VIPPredictions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Crown size={18} className="text-[#F0B429]" />
            <span className="text-[#F0B429] text-sm font-medium tracking-widest uppercase">
              Premium Zone
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-900 text-white mb-2">
            VIP PREDICTIONS
          </h1>
          <p className="text-gray-500">
            High-confidence exclusive picks for our premium members only.
          </p>
        </motion.div>

        {/* Perks row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        >
          {vipPerks.map((p, i) => (
            <div
              key={i}
              className="bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-3 py-3 flex items-center gap-2"
            >
              <span className="text-[#F0B429]">{p.icon}</span>
              <span className="text-gray-400 text-xs">{p.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Tips list */}
        <div className="space-y-4 mb-10">
          {vipTips.map((tip, i) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative"
            >
              <div
                className={`bg-[#0D1F3C] border rounded-2xl p-5 transition-all ${
                  tip.blurred
                    ? "border-[#1A3055]"
                    : "border-[#F0B429]/30 shadow-lg shadow-[#F0B429]/5"
                }`}
              >
                {/* Blurred overlay */}
                {tip.blurred && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden z-10">
                    <div className="absolute inset-0 backdrop-blur-sm bg-[#050B18]/60" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#F0B429]/10 border border-[#F0B429]/20 flex items-center justify-center">
                        <Lock size={18} className="text-[#F0B429]" />
                      </div>
                      <span className="text-white font-semibold text-sm">VIP Members Only</span>
                      <Link
                        to="/payment"
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#F0B429] text-[#050B18] text-xs font-bold rounded-lg hover:bg-[#F0B429]/90 transition-all"
                      >
                        Unlock Now <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-[#1A3055] text-gray-400 px-2 py-0.5 rounded font-medium uppercase tracking-wider">
                        {tip.league}
                      </span>
                      <span className="text-gray-600 text-xs">{tip.time}</span>
                    </div>
                    <h3 className="font-display text-xl font-700 text-white">{tip.match}</h3>
                  </div>
                  <span
                    className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: `${tip.tagColor}15`,
                      color: tip.tagColor,
                    }}
                  >
                    {tip.tag}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Pick:</span>
                    <span className="text-white font-semibold text-sm">{tip.pick}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500 text-sm">Odds:</span>
                    <span className="bg-[#F0B429]/10 text-[#F0B429] px-2 py-0.5 rounded text-sm font-bold">
                      @{tip.odds}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-600 text-xs">Confidence</span>
                    <span className="text-xs font-bold text-white">{tip.confidence}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1A3055] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tip.confidence}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                      className="h-full rounded-full bg-[#00D68F]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#F0B429]/10 to-[#0D1F3C] border border-[#F0B429]/30 rounded-3xl p-8 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0B429]/5 to-transparent" />
          <div className="relative">
            <Crown size={40} className="text-[#F0B429] mx-auto mb-4" />
            <h2 className="font-display text-4xl font-900 text-white mb-2">
              UNLOCK ALL VIP PICKS
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Access all daily premium predictions, Telegram alerts, and weekly accumulators
              starting from just €19.99/month.
            </p>
            <Link
              to="/payment"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F0B429] text-[#050B18] font-bold text-lg rounded-xl hover:bg-[#F0B429]/90 hover:shadow-xl hover:shadow-[#F0B429]/30 transition-all"
            >
              <Star size={20} fill="#050B18" /> View Subscription Plans
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}