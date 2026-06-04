import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy, TrendingUp, Star, BarChart2, CreditCard,
  MessageCircle, LogIn, UserPlus, Menu, X, Zap
} from "lucide-react";

const navLinks = [
  { path: "/", label: "Home", icon: <Trophy size={15} /> },
  { path: "/free-tips", label: "Free Tips", icon: <TrendingUp size={15} /> },
  { path: "/vip", label: "VIP", icon: <Star size={15} /> },
  { path: "/results", label: "Results", icon: <BarChart2 size={15} /> },
  { path: "/payment", label: "Pricing", icon: <CreditCard size={15} /> },
  { path: "/contact", label: "Contact", icon: <MessageCircle size={15} /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050B18]/95 backdrop-blur-xl border-b border-[#1A3055]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-9 h-9 bg-[#F0B429] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap size={20} className="text-[#050B18]" fill="#050B18" />
                </div>
                <div className="absolute inset-0 bg-[#F0B429] rounded-lg blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-900 text-white tracking-widest uppercase">
                  PRONO<span className="text-[#F0B429]">ELITE</span>
                </span>
                <span className="text-[10px] text-[#F0B429]/60 tracking-[0.3em] uppercase font-body font-300">
                  Expert Predictions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ path, label, icon }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      active
                        ? "text-[#F0B429]"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#F0B429]/10 rounded-lg border border-[#F0B429]/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{icon}</span>
                    <span className="relative z-10">{label}</span>
                    {path === "/vip" && (
                      <span className="relative z-10 text-[9px] bg-[#F0B429] text-[#050B18] px-1 py-0.5 rounded font-bold leading-none">
                        HOT
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons */}
            {/* <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/login"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                <LogIn size={15} /> Login
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 px-4 py-2 bg-[#F0B429] text-[#050B18] rounded-lg text-sm font-bold hover:bg-[#F0B429]/90 transition-all duration-200 hover:shadow-lg hover:shadow-[#F0B429]/30"
              >
                <UserPlus size={15} /> Get Started
              </Link>
            </div> */}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0A1628]/98 backdrop-blur-xl border-b border-[#1A3055] lg:hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ path, label, icon }) => {
                const active = location.pathname === path;
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                      active
                        ? "bg-[#F0B429]/15 text-[#F0B429] border border-[#F0B429]/20"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {icon} {label}
                    {path === "/vip" && (
                      <span className="ml-auto text-[9px] bg-[#F0B429] text-[#050B18] px-1.5 py-0.5 rounded font-bold">
                        HOT
                      </span>
                    )}
                  </Link>
                );
              })}
              {/* <div className="grid grid-cols-2 gap-2 pt-2 mt-2 border-t border-[#1A3055]">
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 py-2.5 border border-[#1A3055] rounded-xl text-sm font-medium text-gray-300 hover:text-white hover:border-[#F0B429]/30 transition-all"
                >
                  <LogIn size={15} /> Login
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#F0B429] rounded-xl text-sm font-bold text-[#050B18] hover:bg-[#F0B429]/90 transition-all"
                >
                  <UserPlus size={15} /> Register
                </Link>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}