import { Link } from "react-router-dom";
import { Zap,  Send } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#040912] border-t border-[#1A3055] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F0B429] rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-[#050B18]" fill="#050B18" />
              </div>
              <span className="font-display text-lg font-900 text-white tracking-widest uppercase">
                PRONO<span className="text-[#F0B429]">ELITE</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Professional sports predictions powered by advanced analytics and expert analysis.
            </p>
            {/* <div className="flex gap-3 mt-5">
              {[Twitter, Instagram, Youtube, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-[#0D1F3C] border border-[#1A3055] flex items-center justify-center text-gray-500 hover:text-[#F0B429] hover:border-[#F0B429]/30 transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h4 className="font-display text-sm font-700 tracking-widest text-[#F0B429] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                ["Home", "/"],
                ["Free Tips", "/free-tips"],
                ["VIP Predictions", "/vip"],
                ["Results", "/results"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-700 tracking-widest text-[#F0B429] uppercase mb-4">
              Account
            </h4>
            <ul className="space-y-2">
              {[
                ["Login", "/login"],
                ["Register", "/register"],
                ["VIP Plans", "/payment"],
                ["Contact", "/contact"],
              ].map(([label, path]) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-700 tracking-widest text-[#F0B429] uppercase mb-4">
              Newsletter
            </h4>
            <p className="text-gray-500 text-sm mb-3">
              Get free tips directly in your inbox.
            </p>
            {/* <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#0D1F3C] border border-[#1A3055] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#F0B429]/50"
              />
              <button className="px-3 py-2 bg-[#F0B429] rounded-lg text-[#050B18] hover:bg-[#F0B429]/90 transition-all">
                <Send size={14} />
              </button>
            </div> */}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1A3055] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 PronoElite. All rights reserved. Gambling responsibly.
          </p>
          <p className="text-gray-700 text-xs">
            18+ | Predictions for entertainment purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}