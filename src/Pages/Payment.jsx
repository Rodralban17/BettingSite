import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle, XCircle, Star, Crown, Zap, Shield,
  CreditCard, Lock, ChevronRight, Sparkles, Trophy,
  MessageCircle, TrendingUp, BarChart2, Bell, Users
} from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: <Zap size={22} />,
    tagline: "Perfect to get started",
    monthlyPrice: 9.99,
    yearlyPrice: 7.99,
    color: "#4A90D9",
    gradient: "from-[#4A90D9]/20 to-transparent",
    borderColor: "border-[#4A90D9]/30",
    buttonStyle: "bg-[#4A90D9] text-white hover:bg-[#4A90D9]/90",
    popular: false,
    features: [
      { text: "3 VIP picks per day", included: true },
      { text: "Weekend accumulators", included: true },
      { text: "Email predictions", included: true },
      { text: "Results history (30 days)", included: true },
      { text: "Telegram alerts", included: false },
      { text: "Live match analysis", included: false },
      { text: "1-on-1 tipster chat", included: false },
      { text: "Exclusive banker bets", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: <Star size={22} />,
    tagline: "Most popular choice",
    monthlyPrice: 19.99,
    yearlyPrice: 15.99,
    color: "#F0B429",
    gradient: "from-[#F0B429]/20 to-transparent",
    borderColor: "border-[#F0B429]/40",
    buttonStyle: "bg-[#F0B429] text-[#050B18] hover:bg-[#F0B429]/90",
    popular: true,
    features: [
      { text: "10+ VIP picks per day", included: true },
      { text: "Weekend accumulators", included: true },
      { text: "Email & Telegram alerts", included: true },
      { text: "Full results history", included: true },
      { text: "Telegram alerts", included: true },
      { text: "Live match analysis", included: true },
      { text: "1-on-1 tipster chat", included: false },
      { text: "Exclusive banker bets", included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    icon: <Crown size={22} />,
    tagline: "For serious bettors",
    monthlyPrice: 39.99,
    yearlyPrice: 31.99,
    color: "#00D68F",
    gradient: "from-[#00D68F]/20 to-transparent",
    borderColor: "border-[#00D68F]/30",
    buttonStyle: "bg-[#00D68F] text-[#050B18] hover:bg-[#00D68F]/90",
    popular: false,
    features: [
      { text: "Unlimited VIP picks", included: true },
      { text: "Weekend accumulators", included: true },
      { text: "Priority Telegram alerts", included: true },
      { text: "Full results history", included: true },
      { text: "Instant Telegram alerts", included: true },
      { text: "Deep live match analysis", included: true },
      { text: "1-on-1 tipster chat", included: true },
      { text: "Exclusive banker bets", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I cancel my subscription at any time?",
    a: "Yes, absolutely. You can cancel your subscription anytime from your account dashboard. No questions asked, no hidden fees.",
  },
  {
    q: "How are predictions delivered?",
    a: "Predictions are posted daily on the platform by 9AM. Pro and Elite members also receive instant Telegram notifications before each match.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit/debit cards (Visa, Mastercard), PayPal, and mobile money (MTN, Orange Money).",
  },
  {
    q: "Is there a free trial?",
    a: "We offer daily free tips on our Free Tips page. You can also check our verified results page before committing to a subscription.",
  },
];

const trustBadges = [
  { icon: <Shield size={18} />, text: "Secure SSL Payment" },
  { icon: <Lock size={18} />, text: "No Hidden Fees" },
  { icon: <CheckCircle size={18} />, text: "Cancel Anytime" },
  { icon: <Users size={18} />, text: "12K+ Members" },
];

export default function Payment() {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ─── PAGE HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#F0B429]/10 border border-[#F0B429]/20 rounded-full px-4 py-2 mb-5">
            <Sparkles size={14} className="text-[#F0B429]" />
            <span className="text-[#F0B429] text-sm font-medium tracking-wide">
              Join 12,000+ Winning Members
            </span>
          </div>
          <h1 className="font-display text-6xl lg:text-7xl font-900 text-white mb-3">
            CHOOSE YOUR PLAN
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Flexible subscriptions for every bettor. Upgrade, downgrade, or cancel anytime.
          </p>
        </motion.div>

        {/* ─── BILLING TOGGLE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${billing === "monthly" ? "text-white" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
            className="relative w-14 h-7 rounded-full bg-[#0D1F3C] border border-[#1A3055] transition-all"
          >
            <motion.div
              animate={{ x: billing === "yearly" ? 28 : 2 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-[#F0B429]"
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${billing === "yearly" ? "text-white" : "text-gray-500"}`}>
              Yearly
            </span>
            <span className="text-[10px] bg-[#00D68F]/15 text-[#00D68F] px-2 py-0.5 rounded-full font-bold">
              SAVE 20%
            </span>
          </div>
        </motion.div>

        {/* ─── PRICING CARDS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => {
            const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            const isSelected = selectedPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-3xl border transition-all duration-300 overflow-hidden ${
                  plan.popular
                    ? `${plan.borderColor} border-2 shadow-2xl`
                    : "border-[#1A3055] hover:border-[#F0B429]/20"
                } ${isSelected ? "scale-[1.02]" : ""}`}
                style={{
                  background: plan.popular
                    ? "linear-gradient(145deg, #0D1F3C 0%, #0A1628 100%)"
                    : "#0D1F3C",
                }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 py-2 text-center"
                    style={{ backgroundColor: plan.color }}>
                    <span className="text-[11px] font-bold text-[#050B18] tracking-widest uppercase">
                      ★ Most Popular
                    </span>
                  </div>
                )}

                <div className={`p-7 flex flex-col flex-1 ${plan.popular ? "pt-10" : ""}`}>
                  {/* Plan header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${plan.color}18`, color: plan.color }}
                    >
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-800 text-white tracking-wide">
                        {plan.name}
                      </h3>
                      <p className="text-gray-500 text-xs">{plan.tagline}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className="text-gray-500 text-lg font-medium">€</span>
                      <motion.span
                        key={`${plan.id}-${billing}`}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-display text-5xl font-900 leading-none"
                        style={{ color: plan.color }}
                      >
                        {price.toFixed(2)}
                      </motion.span>
                      <span className="text-gray-500 text-sm mb-1">/ mo</span>
                    </div>
                    {billing === "yearly" && (
                      <p className="text-gray-600 text-xs mt-1">
                        Billed as €{(price * 12).toFixed(2)}/year
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 flex-1 mb-7">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-center gap-3">
                        {feat.included ? (
                          <CheckCircle
                            size={16}
                            className="flex-shrink-0"
                            style={{ color: plan.color }}
                          />
                        ) : (
                          <XCircle size={16} className="flex-shrink-0 text-gray-700" />
                        )}
                        <span
                          className={`text-sm ${
                            feat.included ? "text-gray-300" : "text-gray-600"
                          }`}
                        >
                          {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedPlan(isSelected ? null : plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.buttonStyle
                    } ${
                      isSelected
                        ? "ring-2 ring-offset-2 ring-offset-[#0D1F3C]"
                        : "hover:shadow-lg"
                    }`}
                    style={isSelected ? { outlineColor: plan.color } : {}}
                  >
                    {isSelected ? (
                      <>
                        <CheckCircle size={16} /> Selected — Continue Below
                      </>
                    ) : (
                      <>
                        Get {plan.name} <ChevronRight size={16} />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ─── PAYMENT FORM (appears when plan selected) ─── */}
        <AnimatePresence>
          {selectedPlan && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: 64 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <PaymentForm
                plan={plans.find((p) => p.id === selectedPlan)}
                billing={billing}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── TRUST BADGES ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16"
        >
          {trustBadges.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2.5 bg-[#0D1F3C] border border-[#1A3055] rounded-xl py-3 px-4"
            >
              <span className="text-[#F0B429]">{b.icon}</span>
              <span className="text-gray-400 text-sm">{b.text}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── COMPARISON TABLE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-800 text-white text-center mb-8">
            FULL COMPARISON
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[#1A3055]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1A3055]">
                  <th className="text-left px-5 py-4 text-gray-500 font-medium">Feature</th>
                  {plans.map((p) => (
                    <th
                      key={p.id}
                      className="text-center px-5 py-4 font-display font-700 text-base"
                      style={{ color: p.color }}
                    >
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Daily VIP Picks", values: ["3 picks", "10+ picks", "Unlimited"] },
                  { label: "Accumulators", values: ["Weekend only", "Daily", "Daily + Special"] },
                  { label: "Telegram Alerts", values: [false, true, true] },
                  { label: "Live Match Analysis", values: [false, true, true] },
                  { label: "Banker Bets", values: [false, false, true] },
                  { label: "1-on-1 Support", values: [false, false, true] },
                  { label: "Results History", values: ["30 days", "Full", "Full"] },
                  { label: "Win Rate Access", values: ["Basic", "Detailed", "Full + Breakdowns"] },
                ].map((row, ri) => (
                  <tr
                    key={ri}
                    className={`border-b border-[#1A3055]/50 ${
                      ri % 2 === 0 ? "bg-[#0D1F3C]" : "bg-[#0A1628]"
                    }`}
                  >
                    <td className="px-5 py-3.5 text-gray-400">{row.label}</td>
                    {row.values.map((val, vi) => (
                      <td key={vi} className="px-5 py-3.5 text-center">
                        {typeof val === "boolean" ? (
                          val ? (
                            <CheckCircle
                              size={16}
                              className="mx-auto"
                              style={{ color: plans[vi].color }}
                            />
                          ) : (
                            <XCircle size={16} className="mx-auto text-gray-700" />
                          )
                        ) : (
                          <span className="text-gray-300 text-xs">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ─── FAQ ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl font-800 text-white text-center mb-8">
            FREQUENTLY ASKED
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#0D1F3C] border border-[#1A3055] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronRight
                      size={16}
                      className="text-gray-500 rotate-90"
                    />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── BOTTOM CTA ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] border border-[#F0B429]/20 rounded-3xl p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F0B429]/5 to-transparent" />
          <div className="relative">
            <Trophy size={40} className="text-[#F0B429] mx-auto mb-4" />
            <h2 className="font-display text-4xl font-900 text-white mb-2">
              STILL UNSURE?
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
              Start with our free daily tips and see our verified results before subscribing.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/free-tips"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#1A3055] text-white font-medium rounded-xl hover:bg-white/5 transition-all text-sm"
              >
                <TrendingUp size={16} /> Try Free Tips
              </Link>
              <Link
                to="/results"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-[#1A3055] text-white font-medium rounded-xl hover:bg-white/5 transition-all text-sm"
              >
                <BarChart2 size={16} /> See Our Results
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#F0B429] text-[#050B18] font-bold rounded-xl hover:bg-[#F0B429]/90 transition-all text-sm"
              >
                <MessageCircle size={16} /> Ask Us Anything
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── PAYMENT FORM COMPONENT ─── */
function PaymentForm({ plan, billing }) {
  const [step, setStep] = useState(1);
  const [payMethod, setPayMethod] = useState("card");
  const price = billing === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

  return (
    <div className="bg-[#0A1628] border-2 rounded-3xl overflow-hidden"
      style={{ borderColor: `${plan.color}40` }}>
      {/* Form header */}
      <div className="px-6 py-5 border-b border-[#1A3055] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: `${plan.color}18`, color: plan.color }}
          >
            {plan.icon}
          </div>
          <div>
            <p className="text-white font-semibold text-sm">
              {plan.name} Plan — €{price.toFixed(2)}/mo
            </p>
            <p className="text-gray-500 text-xs capitalize">{billing} billing</p>
          </div>
        </div>
        {/* Step indicator */}
        <div className="flex items-center gap-2">
          {[1, 2].map((s) => (
            <div
              key={s}
              className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all"
              style={
                step >= s
                  ? { backgroundColor: plan.color, color: "#050B18" }
                  : { backgroundColor: "#1A3055", color: "#4B6C8C" }
              }
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 lg:p-8 grid lg:grid-cols-5 gap-8">
        {/* Left: Form */}
        <div className="lg:col-span-3">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              <h3 className="font-display text-xl font-700 text-white">Your Account</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-xs mb-1.5">WhatsApp / Phone</label>
                <input
                  type="tel"
                  placeholder="+237 6XX XXX XXX"
                  className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                />
              </div>
              <button
                onClick={() => setStep(2)}
                className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  backgroundColor: plan.color,
                  color: plan.id === "starter" ? "#fff" : "#050B18",
                  boxShadow: `0 4px 20px ${plan.color}30`,
                }}
              >
                Continue to Payment <ChevronRight size={16} />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-700 text-white">Payment</h3>
                <button
                  onClick={() => setStep(1)}
                  className="text-gray-500 text-xs hover:text-white transition-colors"
                >
                  ← Back
                </button>
              </div>

              {/* Payment method tabs */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "card", label: "Card", icon: <CreditCard size={15} /> },
                  { id: "paypal", label: "PayPal", icon: <Shield size={15} /> },
                  { id: "mobile", label: "Mobile Money", icon: <Bell size={15} /> },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPayMethod(m.id)}
                    className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border text-xs font-medium transition-all ${
                      payMethod === m.id
                        ? "border-[#F0B429]/50 bg-[#F0B429]/10 text-[#F0B429]"
                        : "border-[#1A3055] bg-[#0D1F3C] text-gray-500 hover:text-gray-300"
                    }`}
                  >
                    {m.icon} {m.label}
                  </button>
                ))}
              </div>

              {payMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Card Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors pr-10"
                      />
                      <CreditCard size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-400 text-xs mb-1.5">Expiry</label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength={7}
                        className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-1.5">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Name on Card</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                    />
                  </div>
                </div>
              )}

              {payMethod === "paypal" && (
                <div className="bg-[#0D1F3C] border border-[#1A3055] rounded-xl p-6 text-center">
                  <Shield size={32} className="text-[#009CDE] mx-auto mb-3" />
                  <p className="text-white font-medium mb-1">Pay with PayPal</p>
                  <p className="text-gray-500 text-sm">
                    You'll be redirected to PayPal to complete your payment securely.
                  </p>
                </div>
              )}

              {payMethod === "mobile" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Operator</label>
                    <select className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors">
                      <option>MTN Mobile Money</option>
                      <option>Orange Money</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+237 6XX XXX XXX"
                      className="w-full bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                    />
                  </div>
                </div>
              )}

              <button
                className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                style={{
                  backgroundColor: plan.color,
                  color: plan.id === "starter" ? "#fff" : "#050B18",
                  boxShadow: `0 4px 20px ${plan.color}30`,
                }}
              >
                <Lock size={16} />
                Pay €{price.toFixed(2)} — Start {plan.name}
              </button>

              <div className="flex items-center justify-center gap-4 pt-1">
                {["Visa", "Mastercard", "PayPal", "MTN", "Orange"].map((brand) => (
                  <span key={brand} className="text-[10px] text-gray-700 font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-5 sticky top-24">
            <h4 className="font-display text-lg font-700 text-white mb-4">Order Summary</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{plan.name} Plan</span>
                <span className="text-white text-sm font-medium">
                  €{price.toFixed(2)}/mo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">Billing</span>
                <span className="text-white text-sm font-medium capitalize">{billing}</span>
              </div>
              {billing === "yearly" && (
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Annual discount</span>
                  <span className="text-[#00D68F] text-sm font-medium">-20%</span>
                </div>
              )}
              <div className="border-t border-[#1A3055] pt-3 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">Total today</span>
                <span
                  className="font-display text-2xl font-800"
                  style={{ color: plan.color }}
                >
                  €{price.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              {plan.features
                .filter((f) => f.included)
                .slice(0, 4)
                .map((f, fi) => (
                  <div key={fi} className="flex items-center gap-2">
                    <CheckCircle size={13} style={{ color: plan.color }} className="flex-shrink-0" />
                    <span className="text-gray-500 text-xs">{f.text}</span>
                  </div>
                ))}
            </div>

            <div className="mt-4 pt-4 border-t border-[#1A3055] flex items-center gap-2">
              <Lock size={12} className="text-gray-600" />
              <span className="text-gray-600 text-xs">
                Secured by 256-bit SSL encryption
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}