import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Filter, Clock, CheckCircle, XCircle, AlertCircle, ChevronRight, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const tips = [
  {
    id: 1,
    time: "15:00",
    match: "Chelsea vs Tottenham",
    league: "Premier League",
    pick: "Over 2.5 Goals",
    odds: "1.78",
    confidence: 82,
    status: "pending",
    analysis: "Both teams averaging 2.4 goals per game this season. High-tempo derby expected.",
  },
  {
    id: 2,
    time: "17:30",
    match: "Atletico Madrid vs Villarreal",
    league: "La Liga",
    pick: "Atletico Win or Draw",
    odds: "1.45",
    confidence: 88,
    status: "pending",
    analysis: "Atletico unbeaten in last 8 home games. Defensive solidity is their strength.",
  },
  {
    id: 3,
    time: "20:00",
    match: "Inter Milan vs AC Milan",
    league: "Serie A",
    pick: "Inter Milan Win",
    odds: "2.05",
    confidence: 74,
    status: "won",
    analysis: "Inter dominant in recent derbies. Home advantage crucial.",
  },
  {
    id: 4,
    time: "20:45",
    match: "Borussia Dortmund vs RB Leipzig",
    league: "Bundesliga",
    pick: "Both Teams Score",
    odds: "1.65",
    confidence: 85,
    status: "won",
    analysis: "BTTS in 7 of last 8 meetings. Both attacking squads in fine form.",
  },
  {
    id: 5,
    time: "21:00",
    match: "Marseille vs Nice",
    league: "Ligue 1",
    pick: "Marseille Win",
    odds: "1.90",
    confidence: 70,
    status: "lost",
    analysis: "Marseille strong at home but Nice has been impressive away from home.",
  },
];

const statusConfig = {
  won: { label: "WON", color: "text-[#00D68F]", bg: "bg-[#00D68F]/15", icon: <CheckCircle size={14} /> },
  lost: { label: "LOST", color: "text-[#FF3D57]", bg: "bg-[#FF3D57]/15", icon: <XCircle size={14} /> },
  pending: { label: "PENDING", color: "text-[#F0B429]", bg: "bg-[#F0B429]/15", icon: <AlertCircle size={14} /> },
};

export default function FreeTips() {
  const [filter, setFilter] = useState("all");
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const filtered = filter === "all" ? tips : tips.filter((t) => t.status === filter);

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
            <TrendingUp size={18} className="text-[#F0B429]" />
            <span className="text-[#F0B429] text-sm font-medium tracking-widest uppercase">
              Free Predictions
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-900 text-white mb-2">
            TODAY'S FREE TIPS
          </h1>
          <p className="text-gray-500 flex items-center gap-2">
            <Clock size={14} />
            {today} · Updated at 09:00 AM
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 mb-6"
        >
          <Filter size={14} className="text-gray-600" />
          {["all", "pending", "won", "lost"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${
                filter === f
                  ? "bg-[#F0B429] text-[#050B18]"
                  : "bg-[#0D1F3C] text-gray-400 hover:text-white border border-[#1A3055]"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Tips */}
        <div className="space-y-4">
          {filtered.map((tip, i) => {
            const st = statusConfig[tip.status];
            return (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-5 hover:border-[#F0B429]/30 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] bg-[#1A3055] text-gray-400 px-2 py-0.5 rounded font-medium uppercase tracking-wider">
                        {tip.league}
                      </span>
                      <span className="text-gray-600 text-xs flex items-center gap-1">
                        <Clock size={11} /> {tip.time}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-700 text-white">{tip.match}</h3>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0 ${st.bg} ${st.color}`}>
                    {st.icon} {st.label}
                  </div>
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

                {/* Confidence bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-600 text-xs">Confidence</span>
                    <span className="text-xs font-bold text-white">{tip.confidence}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1A3055] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tip.confidence}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor:
                          tip.confidence >= 80 ? "#00D68F" : "#F0B429",
                      }}
                    />
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed">{tip.analysis}</p>
              </motion.div>
            );
          })}
        </div>

        {/* VIP Upsell Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 relative bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] border border-[#F0B429]/20 rounded-2xl p-6 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#F0B429]/5 rounded-full blur-2xl" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lock size={14} className="text-[#F0B429]" />
                <span className="text-[#F0B429] text-sm font-medium">Unlock Premium</span>
              </div>
              <h3 className="font-display text-2xl font-700 text-white">
                Want 5x More Predictions?
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                VIP members get 10+ daily tips with 90%+ accuracy. No risk, cancel anytime.
              </p>
            </div>
            <Link
              to="/payment"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-[#F0B429] text-[#050B18] font-bold rounded-xl hover:bg-[#F0B429]/90 transition-all"
            >
              Get VIP <ChevronRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}