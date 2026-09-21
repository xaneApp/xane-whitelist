import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import xaneLogo from "@/assets/xane-logo.png";
import xaneIcon from "@/assets/xane-icon.png";

export interface WaitlistFormData {
  fullName: string;
  phone: string;
  email: string;
  freeTag: string;
  premiumTag: string;
}

interface WaitlistFormProps {
  onSubmitSuccess: (data: WaitlistFormData) => void;
}

type OtpState =
  | "idle"
  | "typing"
  | "ready"
  | "otp-sent"
  | "verifying"
  | "verified"
  | "error-invalid"
  | "expired";

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSubmitSuccess }) => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [freeTag, setFreeTag] = useState("");
  const [premiumTag, setPremiumTag] = useState("");

  // 8-State OTP Verification System
  const [otpState, setOtpState] = useState<OtpState>("idle");
  const [otpCode, setOtpCode] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Phone input listener
  const handlePhoneChange = (val: string) => {
    const cleaned = val.replace(/\D/g, "");
    setPhone(cleaned);

    if (cleaned.length >= 10 && otpState === "idle") {
      setOtpState("ready");
    } else if (cleaned.length < 10 && otpState !== "verified") {
      setOtpState("typing");
    }
  };

  // Send OTP trigger
  const handleSendOtp = () => {
    if (phone.length < 10) return;
    setOtpState("otp-sent");
    setResendTimer(60);
  };

  // Resend countdown timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (otpState === "otp-sent" && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpState, resendTimer]);

  // Handle OTP Code input
  const handleOtpChange = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 6);
    setOtpCode(cleaned);

    if (cleaned.length === 6) {
      setOtpState("verifying");
      // Simulate verification
      setTimeout(() => {
        setOtpState("verified");
      }, 900);
    }
  };

  // Format Free Tag
  const handleFreeTagChange = (val: string) => {
    let clean = val.toLowerCase().replace(/[^a-z0-9_.]/g, "");
    if (!clean.startsWith("@") && clean.length > 0) {
      clean = "@" + clean;
    }
    setFreeTag(clean);
  };

  // Format Premium Tag (Clear prefix handling)
  const handlePremiumTagChange = (val: string) => {
    let clean = val.toLowerCase().replace(/[^a-z0-9_.]/g, "");
    clean = clean.replace(/^@+/, "");
    setPremiumTag(clean ? "@" + clean : "");
  };

  // Check overall form validity
  const isFormValid =
    fullName.trim().length >= 2 &&
    phone.length >= 10 &&
    (otpState === "verified" || otpState === "ready" || otpState === "otp-sent") &&
    email.includes("@") &&
    email.includes(".") &&
    freeTag.length >= 3;

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("Name", fullName);
    formData.append("Phone", `+234${phone}`);
    formData.append("Email", email);
    formData.append("FreeXaneTag", freeTag);
    formData.append("PremiumXaneTag", premiumTag || "None");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzAUCnxTKKYzeSth2LiF0ROigPtV-XeliqmEs0YVFmvOYZEBL2NkzF4YPKblxvOCWE/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );
    } catch (err) {
      console.warn("Google Apps Script submit:", err);
    } finally {
      setIsSubmitting(false);
      const data: WaitlistFormData = {
        fullName,
        phone: `+234${phone}`,
        email,
        freeTag: freeTag.endsWith(".xane") ? freeTag : `${freeTag}.xane`,
        premiumTag: premiumTag
          ? premiumTag.endsWith(".xane")
            ? premiumTag
            : `${premiumTag}.xane`
          : "",
      };
      onSubmitSuccess(data);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[720px] flex-col items-center px-4 py-8 sm:py-12">
      {/* Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="font-sans text-[34px] sm:text-[46px] md:text-[54px] font-black tracking-tight text-white leading-tight">
          Join the Xane Waitlist.
        </h1>
        <p className="mt-2.5 text-base sm:text-lg md:text-xl font-medium text-white/90">
          Get early access, reserve your XaneTag before launch.
        </p>
      </motion.div>

      {/* Main Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mt-8 sm:mt-10 w-full rounded-[32px] bg-white p-6 sm:p-8 md:p-11 shadow-2xl text-[#111111]"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 1. Full Name */}
          <div className="space-y-1.5 text-left">
            <label className="text-xs font-black tracking-wider text-[#111111] uppercase">
              FULL NAME
            </label>
            <div className="relative flex items-center">
              <div className="pointer-events-none absolute left-4 flex items-center text-gray-400">
                <User size={19} />
              </div>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="e.g your name"
                className="w-full rounded-[16px] border border-gray-300 py-3.5 pl-12 pr-4 text-sm sm:text-base font-medium text-[#111111] outline-none transition-all placeholder:text-gray-400 focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/10"
              />
            </div>
          </div>

          {/* 2. Phone Number & Email Address (2-Column Grid) */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
            
            {/* Phone Number Field */}
            <div className="space-y-1.5 text-left">
              <label className="text-xs font-black tracking-wider text-[#111111] uppercase">
                PHONE NUMBER
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-600 whitespace-nowrap">
                  +234
                </span>
                <div
                  className={`relative flex flex-1 items-center rounded-[16px] border bg-white transition-all ${
                    otpState.startsWith("error")
                      ? "border-red-500 ring-4 ring-red-500/10"
                      : "border-gray-300 focus-within:border-[#0047FF] focus-within:ring-4 focus-within:ring-[#0047FF]/10"
                  } ${otpState === "verified" || otpState === "otp-sent" ? "bg-gray-50" : ""}`}
                >
                  <div className="pointer-events-none absolute left-3.5 flex items-center text-gray-400">
                    <Phone size={17} />
                  </div>
                  <input
                    type="tel"
                    disabled={otpState === "otp-sent" || otpState === "verified"}
                    value={phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="e.g 12345678901"
                    className="w-full rounded-[16px] bg-transparent py-3.5 pl-10 pr-16 text-xs sm:text-sm font-medium text-[#111111] outline-none placeholder:text-gray-400 disabled:text-gray-500"
                  />

                  {/* Inline Verify Button */}
                  {otpState !== "verified" && (
                    <button
                      type="button"
                      disabled={otpState !== "ready"}
                      onClick={handleSendOtp}
                      className={`absolute right-2 rounded-full px-2.5 py-1 text-[11px] font-bold transition-all ${
                        otpState === "ready"
                          ? "bg-[#0047FF] text-white hover:bg-[#0036CC] active:scale-95 cursor-pointer shadow-sm"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Verify
                    </button>
                  )}

                  {otpState === "verified" && (
                    <span className="absolute right-3 text-xs font-bold text-gray-400">
                      Verify
                    </span>
                  )}
                </div>
              </div>

              {/* Error messages */}
              {otpState === "error-invalid" && (
                <p className="text-[11px] font-semibold text-red-500">Invalid Number.</p>
              )}
              {otpState === "error-registered" && (
                <p className="text-[11px] font-semibold text-red-500">
                  Number has already been registered.
                </p>
              )}

              {/* OTP Sub-box when OTP sent */}
              {(otpState === "otp-sent" || otpState === "verifying" || otpState === "verified") && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-2 space-y-1"
                >
                  <div
                    className={`relative flex items-center justify-between rounded-[14px] border px-3 py-2.5 ${
                      otpState === "verified"
                        ? "border-[#0047FF] bg-[#F0F5FF]"
                        : "border-gray-300 bg-white"
                    }`}
                  >
                    <input
                      type="text"
                      maxLength={6}
                      disabled={otpState === "verified"}
                      value={otpCode}
                      onChange={(e) => handleOtpChange(e.target.value)}
                      placeholder="INPUT OTP"
                      className="w-28 text-xs sm:text-sm font-bold tracking-widest text-[#111111] outline-none placeholder:font-normal placeholder:tracking-normal placeholder:text-gray-400"
                    />

                    {otpState === "otp-sent" && (
                      <div className="flex items-center gap-2 text-[10px]">
                        <button
                          type="button"
                          onClick={handleSendOtp}
                          disabled={resendTimer > 0}
                          className={`font-semibold ${
                            resendTimer > 0
                              ? "text-gray-400 cursor-not-allowed"
                              : "text-[#0047FF] hover:underline cursor-pointer"
                          }`}
                        >
                          Resend OTP
                        </button>
                        <span className="font-bold text-[#0047FF]">
                          {resendTimer > 0 ? `1:${resendTimer.toString().padStart(2, "0")}` : ""}
                        </span>
                      </div>
                    )}

                    {otpState === "verifying" && (
                      <span className="text-[11px] font-bold text-[#0047FF] animate-pulse">
                        Verifying...
                      </span>
                    )}

                    {otpState === "verified" && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#0047FF]">
                        <CheckCircle2 size={13} /> Verified
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Email Address Field */}
            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-bold tracking-wider text-[#111111] uppercase">
                EMAIL ADDRESS
              </label>
              <div className="relative flex items-center">
                <div className="pointer-events-none absolute left-3.5 flex items-center text-gray-400">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g your@mail.com"
                  className="w-full rounded-[14px] border border-gray-300 py-3 pl-10 pr-4 text-xs sm:text-sm font-medium text-[#111111] outline-none transition-all placeholder:text-gray-400 focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/10"
                />
              </div>
            </div>

          </div>

          {/* 3. Free XaneTag */}
          <div className="space-y-1 text-left">
            <label className="text-[11px] font-bold tracking-wider text-[#111111] uppercase">
              FREE XANETAG
            </label>
            <div className="relative flex items-center">
              <div className="pointer-events-none absolute left-3.5 flex items-center text-gray-400">
                <User size={18} />
              </div>
              <input
                type="text"
                required
                value={freeTag}
                onChange={(e) => handleFreeTagChange(e.target.value)}
                placeholder="e.g yourname_22.xane"
                className="w-full rounded-[14px] border border-gray-300 py-3 pl-11 pr-4 text-sm font-medium text-[#111111] outline-none transition-all placeholder:text-gray-400 focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/10"
              />
            </div>
            <p className="text-[10px] text-gray-400">
              Must contain letters, numbers and underscores.
            </p>
          </div>

          {/* 4. Premium XaneTag (Optional) */}
          <div className="rounded-[18px] border border-[#0047FF]/30 bg-[#F0F5FF] p-4 text-left space-y-1.5 transition-all">
            <label className="text-[11px] font-bold tracking-wider text-[#0047FF] uppercase">
              PREMIUM XANETAG (OPTIONAL)
            </label>
            <div className="relative flex items-center">
              {/* Blue Xane Icon Badge matching Figma 1:1 */}
              <div className="pointer-events-none absolute left-3 flex h-6 w-6 items-center justify-center rounded-md bg-[#0047FF] p-1 shadow-sm">
                <img src={xaneIcon} alt="Xane" className="h-full w-full object-contain brightness-0 invert" />
              </div>
              {/* Crystal-clear, bold @ symbol in high contrast #0047FF */}
              <span className="pointer-events-none absolute left-10 sm:left-11 text-base font-black text-[#0047FF] select-none">
                @
              </span>
              <input
                type="text"
                value={premiumTag.replace(/^@/, "")}
                onChange={(e) => handlePremiumTagChange(e.target.value)}
                placeholder="yourname.xane"
                className="w-full rounded-[12px] border border-[#0047FF]/40 bg-white py-2.5 pl-15 sm:pl-16 pr-4 text-xs sm:text-sm font-semibold text-[#111111] outline-none placeholder:text-gray-400 placeholder:font-normal focus:border-[#0047FF] focus:ring-4 focus:ring-[#0047FF]/15"
              />
            </div>
            <p className="text-[10px] font-medium text-gray-500">
              Refer 10 people in 14 days to own it.
            </p>
          </div>

          {/* 5. Submit Button */}
          <motion.button
            type="submit"
            whileHover={isFormValid ? { scale: 1.02 } : {}}
            whileTap={isFormValid ? { scale: 0.98 } : {}}
            disabled={!isFormValid || isSubmitting}
            className={`flex w-full items-center justify-center gap-2 rounded-full py-3.5 sm:py-4 text-sm sm:text-base font-bold transition-all shadow-md ${
              isFormValid
                ? "bg-[#0047FF] text-white hover:bg-[#0036CC] active:scale-[0.98] cursor-pointer"
                : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-80"
            }`}
          >
            <span>{isSubmitting ? "Submitting..." : "Join Waitlist"}</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <ArrowRight size={13} strokeWidth={3} />
            </div>
          </motion.button>

          {/* 6. Social Proof Avatars */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="flex -space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#0047FF] text-[9px] font-bold text-white">
                D
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#00C853] text-[9px] font-bold text-white">
                S
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#FFB300] text-[9px] font-bold text-white">
                K
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-bold leading-tight text-[#111111]">
                Early users already in.
              </span>
              <span className="text-[10px] leading-tight text-gray-500">
                Join before public launch.
              </span>
            </div>
          </div>

        </form>
      </motion.div>
    </div>
  );
};

export default WaitlistForm;
