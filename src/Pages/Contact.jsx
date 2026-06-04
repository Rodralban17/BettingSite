import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle, Mail, Send, Phone, MapPin, Clock,
  CheckCircle, Zap, Star, Crown, ChevronRight, ExternalLink
} from "lucide-react";

const whatsappPlans = [
  {
    id: "free",
    icon: <Zap size={20} />,
    name: "Free Community",
    description: "Join our public WhatsApp group and receive daily free tips, match previews, and community discussions.",
    color: "#4A90D9",
    features: ["Daily free tips", "Match previews", "Community chat", "Open to all"],
    cta: "Join Free Group",
    phone: "+237600000000",
    message: "Hello PronoElite! I'd like to join the Free Tips WhatsApp group.",
    members: "2,400+ members",
  },
  {
    id: "pro",
    icon: <Star size={20} />,
    name: "Pro Members",
    description: "Exclusive Pro subscriber group. Receive 10+ daily VIP picks, odds alerts, and live match analysis.",
    color: "#F0B429",
    features: ["10+ VIP picks/day", "Telegram + WhatsApp", "Live odds alerts", "Pro subscribers only"],
    cta: "Join Pro Group",
    phone: "+237600000001",
    message: "Hello PronoElite! I'm a Pro subscriber and want to join the VIP WhatsApp group.",
    members: "Pro plan required",
    locked: true,
  },
  {
    id: "elite",
    icon: <Crown size={20} />,
    name: "Elite VIP",
    description: "Private 1-on-1 channel with your personal tipster. Direct access, priority alerts, and banker bet notifications.",
    color: "#00D68F",
    features: ["Personal tipster", "1-on-1 chat", "Banker bets first", "Elite plan only"],
    cta: "Access Elite Line",
    phone: "+237600000002",
    message: "Hello PronoElite! I'm an Elite subscriber and want to connect with my personal tipster.",
    members: "Elite plan only",
    locked: true,
  },
];

const contactMethods = [
  {
    icon: <Mail size={20} />,
    label: "Email Support",
    value: "support@pronoelite.com",
    desc: "Response within 24 hours",
    color: "#4A90D9",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "WhatsApp",
    value: "+237 600 000 000",
    desc: "Mon–Sat, 8am–10pm",
    color: "#25D366",
  },
  {
    icon: <Send size={20} />,
    label: "Telegram",
    value: "@PronoElite",
    desc: "Instant tips & alerts",
    color: "#229ED9",
  },
];

const faqs = [
  {
    q: "How do I receive predictions after subscribing?",
    a: "Once subscribed, you'll receive predictions via email and our dedicated WhatsApp/Telegram group based on your plan. You'll be added within 1 hour of payment confirmation.",
  },
  {
    q: "Can I get a refund if I'm not satisfied?",
    a: "We offer a 48-hour satisfaction guarantee for new subscribers. Contact us within 48 hours of your first payment for a full refund — no questions asked.",
  },
  {
    q: "Are predictions available for all sports?",
    a: "We primarily cover football (soccer) — Premier League, La Liga, Serie A, Bundesliga, Ligue 1, and Champions League. We occasionally cover select tennis and basketball matches.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openWhatsApp = (phone, message) => {
    window.open(
      `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

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
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle size={18} className="text-[#F0B429]" />
            <span className="text-[#F0B429] text-sm font-medium tracking-widest uppercase">
              Get in Touch
            </span>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-900 text-white mb-3">
            CONTACT US
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Choose your preferred channel below. WhatsApp groups are tailored to your subscription tier.
          </p>
        </motion.div>

        {/* WhatsApp Subscription Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-7 rounded-lg bg-[#25D366]/15 flex items-center justify-center">
              <MessageCircle size={14} className="text-[#25D366]" />
            </div>
            <h2 className="font-display text-2xl font-700 text-white">
              WhatsApp Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {whatsappPlans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className={`relative bg-[#0D1F3C] border rounded-2xl overflow-hidden transition-all hover:-translate-y-0.5 ${
                  plan.id === "pro"
                    ? "border-[#F0B429]/30 shadow-lg shadow-[#F0B429]/5"
                    : "border-[#1A3055] hover:border-[#F0B429]/20"
                }`}
              >
                {plan.id === "pro" && (
                  <div className="bg-[#F0B429] text-[#050B18] text-[10px] font-bold text-center py-1.5 tracking-widest uppercase">
                    ★ Most Used
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${plan.color}18`, color: plan.color }}
                    >
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-700 text-white">{plan.name}</h3>
                      <span className="text-gray-600 text-xs">{plan.members}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {plan.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-xs">
                        <CheckCircle size={12} style={{ color: plan.color }} className="flex-shrink-0" />
                        <span className="text-gray-400">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.locked ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => openWhatsApp(plan.phone, plan.message)}
                        className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90"
                        style={{
                          backgroundColor: `${plan.color}18`,
                          color: plan.color,
                          border: `1px solid ${plan.color}30`,
                        }}
                      >
                        <MessageCircle size={15} />
                        {plan.cta}
                        <ExternalLink size={13} />
                      </button>
                      <p className="text-center text-gray-700 text-[11px]">
                        Requires active subscription
                      </p>
                    </div>
                  ) : (
                    <button
                      onClick={() => openWhatsApp(plan.phone, plan.message)}
                      className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                      style={{
                        backgroundColor: plan.color,
                        color: "#fff",
                        boxShadow: `0 4px 16px ${plan.color}25`,
                      }}
                    >
                      <MessageCircle size={15} />
                      {plan.cta}
                      <ExternalLink size={13} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {contactMethods.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#0D1F3C] border border-[#1A3055] rounded-xl px-4 py-4 hover:border-[#F0B429]/20 transition-all"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${m.color}15`, color: m.color }}
              >
                {m.icon}
              </div>
              <div className="min-w-0">
                <div className="text-gray-500 text-xs">{m.label}</div>
                <div className="text-white text-sm font-medium truncate">{m.value}</div>
                <div className="text-gray-700 text-xs">{m.desc}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Contact form + info grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-6"
          >
            <h3 className="font-display text-2xl font-700 text-white mb-5">
              Send a Message
            </h3>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#00D68F]/15 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-[#00D68F]" />
                  </div>
                  <h4 className="font-display text-2xl font-700 text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-500 text-sm max-w-xs">
                    We'll get back to you within 24 hours. Check your WhatsApp for faster responses.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-5 text-[#F0B429] text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-500 text-xs mb-1.5 uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#0A1628] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-500 text-xs mb-1.5 uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full bg-[#0A1628] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs mb-1.5 uppercase tracking-wider">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0A1628] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F0B429]/50 transition-colors"
                    >
                      <option value="">Select a topic…</option>
                      <option>Subscription / Billing</option>
                      <option>VIP Access & WhatsApp</option>
                      <option>Technical Issue</option>
                      <option>Prediction Query</option>
                      <option>Partnership / Affiliate</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-500 text-xs mb-1.5 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your question or issue…"
                      className="w-full bg-[#0A1628] border border-[#1A3055] rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#F0B429]/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#F0B429] text-[#050B18] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#F0B429]/90 hover:shadow-lg hover:shadow-[#F0B429]/20 transition-all text-sm"
                  >
                    <Send size={16} /> Send Message
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Hours */}
            <div className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[#F0B429]" />
                <h4 className="font-display text-lg font-700 text-white">Support Hours</h4>
              </div>
              <div className="space-y-2.5">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 10:00 PM" },
                  { day: "Saturday", hours: "9:00 AM – 8:00 PM" },
                  { day: "Sunday", hours: "Predictions only" },
                ].map((row) => (
                  <div key={row.day} className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{row.day}</span>
                    <span className="text-white text-sm font-medium">{row.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-[#1A3055] flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00D68F] animate-pulse" />
                <span className="text-[#00D68F] text-xs font-medium">We're online now</span>
              </div>
            </div>

            {/* Location */}
            <div className="bg-[#0D1F3C] border border-[#1A3055] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-[#F0B429]" />
                <h4 className="font-display text-lg font-700 text-white">Location</h4>
              </div>
              <p className="text-gray-500 text-sm">Yaoundé, Cameroon</p>
              <p className="text-gray-700 text-xs mt-1">Serving clients worldwide</p>
            </div>

            {/* Response time */}
            <div className="bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] border border-[#F0B429]/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-1">
                <Zap size={14} className="text-[#F0B429]" />
                <span className="text-[#F0B429] text-sm font-medium">Fast Response</span>
              </div>
              <p className="text-white font-semibold text-sm">
                WhatsApp replies in under 15 minutes during support hours.
              </p>
              <button
                onClick={() => openWhatsApp("+237600000000", "Hello PronoElite! I have a quick question.")}
                className="mt-3 w-full py-2.5 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-all"
                style={{ backgroundColor: "#25D366", color: "#fff" }}
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-3xl font-800 text-white text-center mb-6">
            QUICK ANSWERS
          </h3>
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
                  <span className="text-white text-sm font-medium pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronRight size={16} className="text-gray-600" />
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
                      <p className="px-5 pb-4 text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}