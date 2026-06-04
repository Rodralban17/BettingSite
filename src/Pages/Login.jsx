import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion } from "framer-motion";
import {
  Mail, Lock, Eye, EyeOff, Zap, LogIn,
  AlertCircle, ArrowRight, MessageCircle
} from "lucide-react";

const schema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const InputField = ({ label, name, type = "text", placeholder, icon, register, error, rightElement }) => (
  <div>
    <label className="block text-gray-400 text-xs mb-2 uppercase tracking-wider font-medium">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600">
        {icon}
      </div>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={`w-full bg-[#0A1628] border rounded-xl pl-11 pr-${rightElement ? "12" : "4"} py-3.5 text-white text-sm placeholder-gray-700 focus:outline-none transition-all ${
          error
            ? "border-[#FF3D57]/50 focus:border-[#FF3D57]"
            : "border-[#1A3055] focus:border-[#F0B429]/60"
        }`}
      />
      {rightElement && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">{rightElement}</div>
      )}
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-1.5 text-[#FF3D57] text-xs mt-1.5"
      >
        <AlertCircle size={11} /> {error}
      </motion.p>
    )}
  </div>
);

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left panel — decorative */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#040912] flex-col justify-between p-12"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#F0B429 1px,transparent 1px),linear-gradient(to bottom,#F0B429 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0B429]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-60 h-60 bg-[#00D68F]/8 rounded-full blur-3xl" />

        {/* Logo */}
        <div className="relative flex items-center gap-2.5">
          <div className="w-10 h-10 bg-[#F0B429] rounded-xl flex items-center justify-center">
            <Zap size={20} className="text-[#050B18]" fill="#050B18" />
          </div>
          <span className="font-display text-2xl font-900 text-white tracking-widest uppercase">
            PRONO<span className="text-[#F0B429]">ELITE</span>
          </span>
        </div>

        {/* Hero text */}
        <div className="relative">
          <p className="text-[#F0B429] text-sm font-medium tracking-widest uppercase mb-3">
            Welcome Back
          </p>
          <h2 className="font-display text-6xl font-900 text-white leading-none mb-5">
            BACK TO
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg,#F0B429 0%,#FFD700 50%,#C9922A 100%)",
              }}
            >
              WINNING.
            </span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Your daily predictions, VIP picks, and performance stats are waiting.
          </p>
        </div>

        {/* Stats row */}
        <div className="relative grid grid-cols-3 gap-4">
          {[
            { val: "87%", lbl: "Win Rate" },
            { val: "12K+", lbl: "Members" },
            { val: "+31%", lbl: "Avg ROI" },
          ].map((s) => (
            <div
              key={s.lbl}
              className="bg-[#0D1F3C]/80 border border-[#1A3055] rounded-xl p-4 text-center"
            >
              <div className="font-display text-2xl font-900 text-[#F0B429]">{s.val}</div>
              <div className="text-gray-600 text-xs mt-0.5">{s.lbl}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-[#050B18]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 mb-8">
            <div className="w-9 h-9 bg-[#F0B429] rounded-xl flex items-center justify-center">
              <Zap size={18} className="text-[#050B18]" fill="#050B18" />
            </div>
            <span className="font-display text-xl font-900 text-white tracking-widest uppercase">
              PRONO<span className="text-[#F0B429]">ELITE</span>
            </span>
          </div>

          <div className="mb-8">
            <h1 className="font-display text-4xl font-900 text-white mb-1">
              SIGN IN
            </h1>
            <p className="text-gray-500 text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#F0B429] hover:underline font-medium">
                Create one free
              </Link>
            </p>
          </div>

          

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-[#1A3055]" />
            <span className="text-gray-700 text-xs">or continue with email</span>
            <div className="flex-1 h-px bg-[#1A3055]" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              icon={<Mail size={15} />}
              register={register}
              error={errors.email?.message}
            />

            <InputField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              icon={<Lock size={15} />}
              register={register}
              error={errors.password?.message}
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-600 hover:text-gray-400 transition-colors"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              }
            />

            <div className="flex items-center justify-between pt-1">
              {/* <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border border-[#1A3055] bg-[#0A1628] accent-[#F0B429]"
                />
                <span className="text-gray-500 text-sm">Remember me</span>
              </label> */}
              {/* <Link
                to="#"
                className="text-[#F0B429] text-sm hover:underline"
              >
                Forgot password?
              </Link> */}
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.01 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="w-full py-4 bg-[#F0B429] text-[#050B18] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#F0B429]/90 hover:shadow-xl hover:shadow-[#F0B429]/25 transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#050B18]/30 border-t-[#050B18] rounded-full animate-spin" />
                  Signing in…
                </>
              ) : (
                <>
                  <LogIn size={16} /> Sign In to PronoElite
                  <ArrowRight size={16} className="ml-auto" />
                </>
              )}
            </motion.button>
          </form>

          
        </motion.div>
      </div>
    </div>
  );
}