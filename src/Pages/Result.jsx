import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2, TrendingUp, CheckCircle, XCircle, AlertCircle,
  Trophy, Target, Flame, Calendar, ChevronDown, Filter
} from "lucide-react";

const monthlyStats = [
  { month: "Jan", won: 48, lost: 9, pending: 0, roi: 22 },
  { month: "Feb", won: 52, lost: 8, pending: 0, roi: 28 },
  { month: "Mar", won: 44, lost: 12, pending: 0, roi: 18 },
  { month: "Apr", won: 56, lost: 7, pending: 0, roi: 34 },
  { month: "May", won: 61, lost: 8, pending: 0, roi: 40 },
  { month: "Jun", won: 38, lost: 11, pending: 3, roi: 15 },
];

const allResults = [
  { date: "05 Jun", time: "20:45", match: "Liverpool vs Man City", league: "Premier League", pick: "Liverpool Win & Over 2.5", odds: "3.40", status: "won", type: "VIP" },
  { date: "05 Jun", time: "18:30", match: "Barcelona vs Sevilla", league: "La Liga", pick: "BTTS & Over 2.5", odds: "2.10", status: "won", type: "VIP" },
  { date: "05 Jun", time: "15:00", match: "Chelsea vs Arsenal", league: "Premier League", pick: "Over 2.5 Goals", odds: "1.78", status: "pending", type: "FREE" },
  { date: "04 Jun", time: "21:00", match: "PSG vs Monaco", league: "Ligue 1", pick: "PSG Win & Over 3.5", odds: "2.95", status: "won", type: "VIP" },
  { date: "04 Jun", time: "18:45", match: "Juventus vs Napoli", league: "Serie A", pick: "Asian Handicap -1", odds: "2.75", status: "lost", type: "VIP" },
  { date: "04 Jun", time: "16:00", match: "Atletico vs Villarreal", league: "La Liga", pick: "Atletico Win or Draw", odds: "1.45", status: "won", type: "FREE" },
  { date: "03 Jun", time: "20:00", match: "Inter Milan vs AC Milan", league: "Serie A", pick: "Inter Win", odds: "2.05", status: "won", type: "VIP" },
  { date: "03 Jun", time: "17:30", match: "Bayern vs Dortmund", league: "Bundesliga", pick: "Both Teams Score", odds: "1.65", status: "won", type: "FREE" },
  { date: "03 Jun", time: "15:00", match: "Real Madrid vs Getafe", league: "La Liga", pick: "Real Madrid -2 AH", odds: "2.20", status: "lost", type: "VIP" },
  { date: "02 Jun", time: "21:00", match: "Man United vs Wolves", league: "Premier League", pick: "Under 2.5 Goals", odds: "1.90", status: "won", type: "FREE" },
  { date: "02 Jun", time: "18:00", match: "Napoli vs Roma", league: "Serie A", pick: "Napoli Win", odds: "1.75", status: "won", type: "VIP" },
  { date: "02 Jun", time: "15:30", match: "Nice vs Rennes", league: "Ligue 1", pick: "Over 1.5 Goals", odds: "1.40", status: "won", type: "FREE" },
];

const leagueStats = [
  { league: "Premier League", won: 78, total: 92, rate: 85 },
  { league: "La Liga", won: 71, total: 86, rate: 83 },
  { league: "Serie A", won: 64, total: 80, rate: 80 },
  { league: "Bundesliga", won: 59, total: 72, rate: 82 },
  { league: "Ligue 1", won: 51, total: 65, rate: 78 },
];

const overallStats = [
  { value: "87%", label: "Overall Win Rate", icon: <Target size={20} />, color: "#00D68F" },
  { value: "299", label: "Tips This Year", icon: <BarChart2 size={20} />, color: "#F0B429" },
  { value: "+31%", label: "Avg Monthly ROI", icon: <TrendingUp size={20} />, color: "#00D68F" },
  { value: "14", label: "Current Win Streak", icon: <Flame size={20} />, color: "#F0B429" },
];

const statusConfig = {
  won: { label: "WON", color: "text-[#00D68F]", bg: "bg-[#00D68F]/10", dot: "bg-[#00D68F]" },
  lost: { label: "LOST", color: "text-[#FF3D57]", bg: "bg-[#FF3D57]/10", dot: "bg-[#FF3D57]" },
  pending: { label: "LIVE", color: "text-[#F0B429]", bg: "bg-[#F0B429]/10", dot: "bg-[#F0B429] animate-pulse" },
};

const maxBar = Math.max(...monthlyStats.map(m => m.won + m.lost));

export default function Results() {
  const [filter, setFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showCount, setShowCount] = useState(8);

  const filtered = allResults.filter(r => {
    const statusMatch = filter === "all" || r.status === filter;
    const typeMatch = typeFilter === "all" || r.type === typeFilter;
    return statusMatch && typeMatch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-2">
            <BarChart2 size={18} className="text-[#F0B429]" />
            <span className="text-[#F0B429] text-sm font-medium tracking-widest uppercase">
              Verified Track Record
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-900 text-white mb-2">
            RESULTS & STATISTICS
          </h1>
          <p className="text-gray-500 text-sm">
            Every tip publicly tracked — no cherry-picking, no manipulation.
          </p>
        </motion.div>

        {/* Overall Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {overallStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-5 text-center"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${s.color}15`, color: s.color }}
              >
                {s.icon}
              </div>
              <div className="font-display text-3xl font-900 mb-1" style={{ color: s.color }}>
                {s.value}
              </div>
              <div className="text-gray-500 text-xs leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Monthly Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-display text-2xl font-700 text-white">Monthly Performance</h3>
              <p className="text-gray-600 text-xs mt-0.5">Won vs Lost per month</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[#00D68F]" />
                <span className="text-gray-500">Won</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-sm bg-[#FF3D57]" />
                <span className="text-gray-500">Lost</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3 h-36">
            {monthlyStats.map((m, i) => (
              <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: "100px" }}>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(m.lost / maxBar) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    className="w-full bg-[#FF3D57]/70 rounded-t-sm min-h-[3px]"
                  />
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(m.won / maxBar) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08 + 0.1 }}
                    className="w-full bg-[#00D68F] rounded-t-sm"
                  />
                </div>
                <span className="text-gray-600 text-xs">{m.month}</span>
              </div>
            ))}
          </div>
          {/* ROI row */}
          <div className="flex justify-between mt-4 pt-4 border-t border-[#1A3055]">
            {monthlyStats.map((m) => (
              <div key={m.month} className="flex-1 text-center">
                <span
                  className="text-xs font-bold"
                  style={{ color: m.roi >= 25 ? "#00D68F" : "#F0B429" }}
                >
                  +{m.roi}%
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-xs text-center mt-1">ROI per month</p>
        </motion.div>

        {/* League Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-6 mb-8"
        >
          <h3 className="font-display text-2xl font-700 text-white mb-5">
            Performance by League
          </h3>
          <div className="space-y-4">
            {leagueStats.map((lg, i) => (
              <div key={lg.league}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-gray-300 text-sm">{lg.league}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600 text-xs">
                      {lg.won}/{lg.total} tips
                    </span>
                    <span
                      className="font-bold text-sm"
                      style={{ color: lg.rate >= 83 ? "#00D68F" : "#F0B429" }}
                    >
                      {lg.rate}%
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-[#1A3055] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lg.rate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background:
                        lg.rate >= 83
                          ? "linear-gradient(90deg,#00D68F,#00B87A)"
                          : "linear-gradient(90deg,#F0B429,#C9922A)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h3 className="font-display text-2xl font-700 text-white flex items-center gap-2">
              <Calendar size={20} className="text-[#F0B429]" />
              Recent Results
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1 bg-[#0D1F3C] border border-[#1A3055] rounded-xl p-1">
                {["all", "won", "lost", "pending"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium capitalize transition-all ${
                      filter === f
                        ? "bg-[#F0B429] text-[#050B18]"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-1 bg-[#0D1F3C] border border-[#1A3055] rounded-xl p-1">
                {["all", "FREE", "VIP"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                      typeFilter === t
                        ? "bg-[#F0B429] text-[#050B18]"
                        : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {filtered.slice(0, showCount).map((r, i) => {
              const st = statusConfig[r.status];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 flex items-center gap-3 hover:border-[#F0B429]/20 transition-all"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${st.dot}`} />
                  <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-1 sm:gap-4 items-center">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            r.type === "VIP"
                              ? "bg-[#F0B429]/15 text-[#F0B429]"
                              : "bg-[#1A3055] text-gray-500"
                          }`}
                        >
                          {r.type}
                        </span>
                        <span className="text-gray-600 text-xs">{r.league}</span>
                        <span className="text-gray-700 text-xs">{r.date} · {r.time}</span>
                      </div>
                      <span className="text-white text-sm font-medium truncate block">
                        {r.match}
                      </span>
                      <span className="text-gray-500 text-xs">{r.pick}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="bg-[#F0B429]/10 text-[#F0B429] text-xs font-bold px-2 py-0.5 rounded">
                        @{r.odds}
                      </span>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${st.bg} ${st.color}`}>
                        {st.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {showCount < filtered.length && (
            <button
              onClick={() => setShowCount(showCount + 8)}
              className="mt-4 w-full py-3 border border-[#1A3055] rounded-xl text-gray-400 text-sm hover:text-white hover:border-[#F0B429]/30 transition-all flex items-center justify-center gap-2"
            >
              <ChevronDown size={16} /> Load More Results
            </button>
          )}
        </motion.div>

        {/* Win rate donut summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid grid-cols-3 gap-4"
        >
          {[
            { label: "Won", value: 299, pct: 87, color: "#00D68F" },
            { label: "Lost", value: 38, pct: 11, color: "#FF3D57" },
            { label: "Void/Pending", value: 7, pct: 2, color: "#F0B429" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-4 text-center"
            >
              <div
                className="font-display text-3xl font-900 mb-1"
                style={{ color: s.color }}
              >
                {s.pct}%
              </div>
              <div className="text-white text-sm font-medium">{s.label}</div>
              <div className="text-gray-600 text-xs mt-0.5">{s.value} tips</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}