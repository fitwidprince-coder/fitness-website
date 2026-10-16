"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import {
  X,
  Send,
  Loader2,
  Minimize2,
  Maximize2,
  Phone,
  Bot,
  Sparkles,
} from "lucide-react";

const countries = [
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸", pattern: /^\d{10}$/, placeholder: "1234567890", digits: 10 },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳", pattern: /^\d{10}$/, placeholder: "9876543210", digits: 10 },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧", pattern: /^\d{10,11}$/, placeholder: "7123456789", digits: [10, 11] as number[] },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦", pattern: /^\d{10}$/, placeholder: "1234567890", digits: 10 },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺", pattern: /^\d{9}$/, placeholder: "412345678", digits: 9 },
  { code: "AE", name: "UAE", dialCode: "+971", flag: "🇦🇪", pattern: /^\d{9}$/, placeholder: "501234567", digits: 9 },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬", pattern: /^\d{8}$/, placeholder: "91234567", digits: 8 },
];

const goals = [
  { name: "Muscle Building", icon: "💪", bgColor: "bg-gradient-to-r from-blue-500 to-purple-600" },
  { name: "Fat Loss", icon: "🔥", bgColor: "bg-gradient-to-r from-red-500 to-orange-600" },
  { name: "Strength Training", icon: "🏋️", bgColor: "bg-gradient-to-r from-gray-700 to-gray-900" },
  { name: "Endurance", icon: "🏃", bgColor: "bg-gradient-to-r from-green-500 to-emerald-600" },
  { name: "General Fitness", icon: "⭐", bgColor: "bg-gradient-to-r from-yellow-500 to-amber-600" },
  { name: "Weight Gain", icon: "📈", bgColor: "bg-gradient-to-r from-indigo-500 to-blue-600" },
  { name: "Body Transformation", icon: "🔄", bgColor: "bg-gradient-to-r from-purple-500 to-pink-600" },
  { name: "Back Injury Rehabilitation", icon: "🩺", bgColor: "bg-gradient-to-r from-teal-500 to-cyan-600" },
  { name: "Quitting Alcohol", icon: "🚫", bgColor: "bg-gradient-to-r from-rose-500 to-red-600" },
  { name: "Liver & Lung Detox Support", icon: "🌿", bgColor: "bg-gradient-to-r from-lime-500 to-green-600" },
  { name: "Sports Performance", icon: "⚽", bgColor: "bg-gradient-to-r from-orange-500 to-red-600" },
];

type Step =
  | "goal"
  | "allergies"
  | "diseases"
  | "name"
  | "email"
  | "phone"
  | "complete";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WELCOME_MESSAGE =
  "👋 Welcome to **TWP** (TransformWithPrince)!\n\nComplete your transformation journey in **3 steps**.\n\n📱 What's your main fitness goal? Select one or more options:";

const STEP_META: Record<
  Exclude<Step, "complete">,
  { number: number; label: string; total: number }
> = {
  goal: { number: 1, label: "Your Goals", total: 3 },
  allergies: { number: 2, label: "Health Info", total: 3 },
  diseases: { number: 2, label: "Health Info", total: 3 },
  name: { number: 3, label: "Your Details", total: 3 },
  email: { number: 3, label: "Your Details", total: 3 },
  phone: { number: 3, label: "Your Details", total: 3 },
};

export function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: WELCOME_MESSAGE, isUser: false, timestamp: new Date() },
  ]);
  const [currentStep, setCurrentStep] = useState<Step>("goal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    goal: "",
    allergies: "",
    diseases: "",
  });
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [submittedPhones, setSubmittedPhones] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedPhones = localStorage.getItem("submittedPhoneNumbers");
    if (savedPhones) {
      setSubmittedPhones(JSON.parse(savedPhones));
    }
  }, []);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsChatOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener("open-chat", handleOpenChat);
    return () => window.removeEventListener("open-chat", handleOpenChat);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isSubmitting]);

  useEffect(() => {
    if (currentStep !== "complete" && inputRef.current && !isSubmitting) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [currentStep, isSubmitting]);

  const getCurrentCountry = () =>
    countries.find((c) => c.dialCode === formData.countryCode) ||
    countries.find((c) => c.code === "IN") ||
    countries[0];

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidPhone = (phone: string) => {
    const digitsOnly = phone.replace(/\D/g, "");
    return getCurrentCountry().pattern.test(digitsOnly);
  };

  const formatPhoneInput = (input: string) => {
    const digitsOnly = input.replace(/\D/g, "");
    const currentCountry = getCurrentCountry();
    const maxDigits = Array.isArray(currentCountry.digits)
      ? currentCountry.digits[1]
      : currentCountry.digits;
    return digitsOnly.slice(0, maxDigits);
  };

  const getPhoneValidationMessage = () => {
    const { name, digits } = getCurrentCountry();
    if (Array.isArray(digits)) {
      return `Enter a valid ${name} number (${digits[0]}–${digits[1]} digits)`;
    }
    return `Enter a valid ${name} number (${digits} digits)`;
  };

  const isPhoneAlreadySubmitted = (phone: string) =>
    submittedPhones.includes(`${formData.countryCode}${phone}`);

  const savePhoneToLocalStorage = (phone: string) => {
    const fullPhone = `${formData.countryCode}${phone}`;
    const updated = [...submittedPhones, fullPhone];
    setSubmittedPhones(updated);
    localStorage.setItem("submittedPhoneNumbers", JSON.stringify(updated));
  };

  const addBotMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { text, isUser: false, timestamp: new Date() },
    ]);
  };

  const toggleGoalSelection = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
  };

  const handleSendMessage = async () => {
    let effectiveInput = currentInput.trim();

    if (currentStep === "goal" && selectedGoals.length > 0) {
      effectiveInput = selectedGoals.join(", ");
    }

    if (currentStep !== "goal" && !effectiveInput) return;
    if (currentStep === "goal" && !effectiveInput) return;

    setMessages((prev) => [
      ...prev,
      { text: effectiveInput, isUser: true, timestamp: new Date() },
    ]);
    setCurrentInput("");
    setIsSubmitting(true);

    let validationError = "";
    const updated = { ...formData };

    switch (currentStep) {
      case "goal": {
        if (!effectiveInput.trim()) {
          validationError = "🎯 Please select at least one goal.";
          break;
        }
        updated.goal = effectiveInput;
        setFormData(updated);
        setSelectedGoals([]);
        setTimeout(() => {
          addBotMessage(
            "✅ Got it! Do you have any food allergies? If yes, please list them (e.g., Dairy, Nuts, Gluten). If none, just say 'none'.",
          );
          setCurrentStep("allergies");
          setIsSubmitting(false);
        }, 700);
        break;
      }

      case "allergies":
        updated.allergies =
          currentInput.trim().toLowerCase() === "none" ? "" : currentInput.trim();
        setFormData(updated);
        setTimeout(() => {
          addBotMessage(
            "✅ Understood. Do you have any medical conditions we should know about? (e.g., Diabetes, High BP). If none, just say 'none'.",
          );
          setCurrentStep("diseases");
          setIsSubmitting(false);
        }, 700);
        break;

      case "diseases":
        updated.diseases =
          currentInput.trim().toLowerCase() === "none" ? "" : currentInput.trim();
        setFormData(updated);
        setTimeout(() => {
          addBotMessage(
            "🙌 Almost done! Step 3 — your contact details.\n\nWhat's your name?",
          );
          setCurrentStep("name");
          setIsSubmitting(false);
        }, 700);
        break;

      case "name":
        updated.name = currentInput.trim();
        setFormData(updated);
        setTimeout(() => {
          addBotMessage(
            `👋 Nice to meet you, **${currentInput.trim()}**! What's your email address?`,
          );
          setCurrentStep("email");
          setIsSubmitting(false);
        }, 700);
        break;

      case "email":
        if (!isValidEmail(currentInput.trim())) {
          validationError =
            "📧 Please enter a valid email address (e.g., name@example.com)";
        } else {
          updated.email = currentInput.trim();
          setFormData(updated);
          setTimeout(() => {
            addBotMessage(
              "✅ Great! What's your phone number? Please enter digits only.",
            );
            setCurrentStep("phone");
            setIsSubmitting(false);
          }, 700);
        }
        break;

      case "phone": {
        const formattedPhone = formatPhoneInput(currentInput);
        if (!isValidPhone(formattedPhone)) {
          validationError = getPhoneValidationMessage();
        } else if (isPhoneAlreadySubmitted(formattedPhone)) {
          validationError =
            "⚠️ This phone number already submitted a request. Please use a different number.";
        } else {
          updated.phone = formattedPhone;
          setFormData(updated);

          try {
            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                name: updated.name,
                email: updated.email,
                phone: `${updated.countryCode}${updated.phone}`,
                subject: `New Client Inquiry - ${updated.name}`,
                message: `
Goal: ${updated.goal}
Allergies: ${updated.allergies || "None"}
Medical Conditions: ${updated.diseases || "None"}
                `.trim(),
              }),
            });

            const result = await response.json();

            if (result.success) {
              savePhoneToLocalStorage(updated.phone);
              addBotMessage(
                `🎉 **You're all set!** A coach from **TWP** will contact you within 24 hours.\n\n📞 **${updated.name}** · ${updated.countryCode}${updated.phone}\n\nLet's transform together! 💪`,
              );
              setFormData({
                name: "",
                email: "",
                countryCode: "+91",
                phone: "",
                goal: "",
                allergies: "",
                diseases: "",
              });
            } else {
              throw new Error("Failed to send");
            }
          } catch (error) {
            console.error("Form submission error:", error);
            addBotMessage(
              "⚠️ Thanks for sharing! There was an issue sending your info. Please contact us directly via WhatsApp or email.",
            );
          } finally {
            setCurrentStep("complete");
            setIsSubmitting(false);
          }
        }
        break;
      }

      default:
        setIsSubmitting(false);
        break;
    }

    if (validationError) {
      setTimeout(() => {
        addBotMessage(validationError);
        setIsSubmitting(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }, 600);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const stepInfo =
    currentStep !== "complete" ? STEP_META[currentStep] : null;

  if (!isChatOpen) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-20 right-4 z-50 w-[min(100vw-2rem,20rem)] rounded-2xl border border-gray-200 bg-white shadow-2xl sm:bottom-24 sm:right-6">
        <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 px-3 py-2.5 text-white">
          <div className="flex min-w-0 items-center gap-2">
            <div className="rounded-lg bg-white/20 p-1.5">
              <Bot size={14} />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-sm font-bold">TWP</h3>
              <p className="truncate text-[10px] text-white/80">
                TransformWithPrince
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-1">
            <button
              type="button"
              onClick={() => setIsMinimized(false)}
              className="cursor-pointer rounded-lg p-1.5 hover:bg-white/20"
              aria-label="Expand chat"
            >
              <Maximize2 size={14} />
            </button>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="cursor-pointer rounded-lg p-1.5 hover:bg-white/20"
              aria-label="Close chat"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[min(640px,calc(100vh-7rem))] sm:w-[400px] sm:rounded-2xl sm:border sm:border-gray-200 sm:shadow-2xl"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Compact header */}
      <div className="shrink-0 bg-gradient-to-r from-orange-600 to-red-600 px-3 py-2.5 text-white sm:rounded-t-2xl">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2">
            <div className="shrink-0 rounded-lg bg-white/20 p-1.5">
              <Bot size={18} />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold leading-tight sm:text-base">
                TWP
              </h3>
              <p className="truncate text-[11px] text-white/85">
                TransformWithPrince
              </p>
            </div>
          </div>
          <div className="flex shrink-0 gap-0.5">
            <button
              type="button"
              onClick={() => setIsMinimized(true)}
              className="hidden cursor-pointer rounded-lg p-1.5 hover:bg-white/20 sm:block"
              aria-label="Minimize"
            >
              <Minimize2 size={16} />
            </button>
            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="cursor-pointer rounded-lg p-1.5 hover:bg-white/20"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Step progress */}
        {stepInfo && (
          <div className="mt-2.5">
            <div className="mb-1 flex items-center justify-between text-[11px]">
              <span className="font-medium">
                Step {stepInfo.number} of {stepInfo.total} · {stepInfo.label}
              </span>
              <span className="text-white/80">
                {Math.round((stepInfo.number / stepInfo.total) * 100)}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/25">
              <div
                className="h-full rounded-full bg-white transition-all duration-500"
                style={{
                  width: `${(stepInfo.number / stepInfo.total) * 100}%`,
                }}
              />
            </div>
            <div className="mt-1.5 flex justify-between gap-1">
              {["Goals", "Health", "Details"].map((label, i) => {
                const n = i + 1;
                const active = n <= stepInfo.number;
                return (
                  <span
                    key={label}
                    className={`flex-1 truncate text-center text-[10px] ${
                      active ? "font-semibold text-white" : "text-white/50"
                    }`}
                  >
                    {n}. {label}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Messages */}
      <div className="min-h-0 flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white p-3 sm:p-4">
        <div className="space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3 py-2.5 sm:max-w-[85%] sm:px-4 sm:py-3 ${
                  message.isUser
                    ? "rounded-br-md bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md"
                    : "rounded-bl-md border border-gray-100 bg-white text-gray-800 shadow-sm"
                }`}
              >
                {!message.isUser && (
                  <div className="mb-1 flex items-center gap-1.5">
                    <Bot size={11} className="text-orange-500" />
                    <span className="text-[10px] font-semibold text-orange-600">
                      TWP
                    </span>
                  </div>
                )}
                <p className="text-[13px] leading-relaxed whitespace-pre-line sm:text-sm">
                  {message.text.split("**").map((part, i) =>
                    i % 2 === 1 ? (
                      <strong key={i}>{part}</strong>
                    ) : (
                      <span key={i}>{part}</span>
                    ),
                  )}
                </p>
              </div>
            </div>
          ))}

          {isSubmitting && (
            <div className="flex justify-start">
              <div className="rounded-2xl rounded-bl-md border border-gray-100 bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-orange-400" />
                    <div
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-red-400"
                      style={{ animationDelay: "0.15s" }}
                    />
                    <div
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-orange-500"
                      style={{ animationDelay: "0.3s" }}
                    />
                  </div>
                  <span className="text-[11px] text-gray-500">TWP is typing…</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      {currentStep !== "complete" && (
        <div className="shrink-0 border-t border-gray-200 bg-white p-3 sm:p-4">
          {currentStep === "phone" && (
            <div className="relative mb-2.5">
              <button
                type="button"
                onClick={() => setShowCountryDropdown((p) => !p)}
                className="flex w-full cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-left text-sm hover:border-orange-400"
              >
                <span>{getCurrentCountry().flag}</span>
                <span className="font-medium">{formData.countryCode}</span>
                <span className="truncate text-gray-500">
                  {getCurrentCountry().name}
                </span>
                <span className="ml-auto text-gray-400">
                  {showCountryDropdown ? "▲" : "▼"}
                </span>
              </button>
              {showCountryDropdown && (
                <div className="absolute bottom-full left-0 right-0 z-10 mb-1 max-h-44 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-lg">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          countryCode: country.dialCode,
                          phone: "",
                        }));
                        setCurrentInput("");
                        setShowCountryDropdown(false);
                      }}
                      className={`flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm hover:bg-orange-50 ${
                        formData.countryCode === country.dialCode
                          ? "bg-orange-50 text-orange-600"
                          : ""
                      }`}
                    >
                      <span>{country.flag}</span>
                      <span className="flex-1">{country.name}</span>
                      <span className="text-gray-500">{country.dialCode}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === "goal" && (
            <div className="mb-2.5">
              <p className="mb-1.5 text-[11px] font-semibold text-gray-600">
                Tap to select one or more goals:
              </p>
              <div className="flex max-h-28 flex-wrap gap-1.5 overflow-y-auto sm:max-h-32">
                {goals.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.name);
                  return (
                    <button
                      key={goal.name}
                      type="button"
                      onClick={() => toggleGoalSelection(goal.name)}
                      className={`flex cursor-pointer items-center gap-1 rounded-lg border px-2 py-1.5 text-[11px] font-medium transition-all sm:text-xs ${
                        isSelected
                          ? `${goal.bgColor} border-transparent text-white shadow-sm`
                          : "border-gray-300 bg-white text-gray-700 hover:border-orange-400 hover:text-orange-600"
                      }`}
                    >
                      <span>{goal.icon}</span>
                      {goal.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <input
              ref={inputRef}
              type={
                currentStep === "email"
                  ? "email"
                  : currentStep === "phone"
                    ? "tel"
                    : "text"
              }
              value={currentInput}
              onChange={(e) =>
                currentStep === "phone"
                  ? setCurrentInput(formatPhoneInput(e.target.value))
                  : setCurrentInput(e.target.value)
              }
              onKeyDown={handleKeyPress}
              placeholder={
                currentStep === "goal"
                  ? "Or type a custom goal…"
                  : currentStep === "allergies"
                    ? "Allergies or 'none'…"
                    : currentStep === "diseases"
                      ? "Conditions or 'none'…"
                      : currentStep === "name"
                        ? "Your name…"
                        : currentStep === "email"
                          ? "your.email@example.com"
                          : `e.g. ${getCurrentCountry().placeholder}`
              }
              className="min-w-0 flex-1 rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
              disabled={isSubmitting}
            />
            <button
              type="button"
              onClick={handleSendMessage}
              disabled={
                (currentStep === "goal"
                  ? selectedGoals.length === 0 && !currentInput.trim()
                  : !currentInput.trim()) || isSubmitting
              }
              className="flex shrink-0 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-3.5 py-2.5 text-white hover:from-orange-600 hover:to-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              aria-label="Send"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <Send size={18} />
              )}
            </button>
          </div>

          {currentStep === "phone" && (
            <p className="mt-1.5 text-[11px] text-gray-500">
              {getPhoneValidationMessage()}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function FloatingContactWithChat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const phoneNumber = "YOUR_PHONE_NUMBER";
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER";

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={`tel:${phoneNumber}`}
          className="group relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-xl transition-all hover:scale-110 sm:h-16 sm:w-16"
          title="Call"
        >
          <Phone size={24} />
        </a>

        <button
          type="button"
          onClick={() => setIsChatOpen(true)}
          className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-xl transition-all hover:scale-110 sm:h-16 sm:w-16"
          title="Chat with TWP"
        >
          <Bot size={26} />
          <Sparkles
            size={12}
            className="absolute top-2 right-2 text-yellow-300"
          />
        </button>

        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello%20TWP%20Team!%20I%20need%20fitness%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-xl transition-all hover:scale-110 sm:h-16 sm:w-16"
          title="WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>

      {isChatOpen && <ChatWidget />}
    </>
  );
}

export function OpenChatTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { onClick, className, ...rest } = props;

  return (
    <button
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        window.dispatchEvent(new CustomEvent("open-chat"));
      }}
      className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-4 py-2 text-white transition-all hover:from-orange-700 hover:to-red-700 hover:shadow-lg ${className || ""}`}
    >
      <Bot size={18} />
      <span>Ask TWP</span>
    </button>
  );
}
