"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { X, Send, Loader2, Minimize2, Maximize2, Phone, Bot, Sparkles, Brain, Target, Flame, Heart } from "lucide-react";
import { toast } from 'sonner';

// Country data for phone number selection
const countries = [
  { code: 'US', name: 'United States', dialCode: '+1', flag: '🇺🇸', pattern: /^\d{10}$/, placeholder: '1234567890', digits: 10 },
  { code: 'IN', name: 'India', dialCode: '+91', flag: '🇮🇳', pattern: /^\d{10}$/, placeholder: '9876543210', digits: 10 },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44', flag: '🇬🇧', pattern: /^\d{10,11}$/, placeholder: '7123456789', digits: [10, 11] },
  { code: 'CA', name: 'Canada', dialCode: '+1', flag: '🇨🇦', pattern: /^\d{10}$/, placeholder: '1234567890', digits: 10 },
  { code: 'AU', name: 'Australia', dialCode: '+61', flag: '🇦🇺', pattern: /^\d{9}$/, placeholder: '412345678', digits: 9 },
  { code: 'DE', name: 'Germany', dialCode: '+49', flag: '🇩🇪', pattern: /^\d{10,11}$/, placeholder: '15123456789', digits: [10, 11] },
  { code: 'FR', name: 'France', dialCode: '+33', flag: '🇫🇷', pattern: /^\d{9}$/, placeholder: '612345678', digits: 9 },
  { code: 'IT', name: 'Italy', dialCode: '+39', flag: '🇮🇹', pattern: /^\d{9,10}$/, placeholder: '3123456789', digits: [9, 10] },
  { code: 'ES', name: 'Spain', dialCode: '+34', flag: '🇪🇸', pattern: /^\d{9}$/, placeholder: '612345678', digits: 9 },
  { code: 'BR', name: 'Brazil', dialCode: '+55', flag: '🇧🇷', pattern: /^\d{10,11}$/, placeholder: '11987654321', digits: [10, 11] },
  { code: 'JP', name: 'Japan', dialCode: '+81', flag: '🇯🇵', pattern: /^\d{9,10}$/, placeholder: '9012345678', digits: [9, 10] },
  { code: 'CN', name: 'China', dialCode: '+86', flag: '🇨🇳', pattern: /^\d{11}$/, placeholder: '13123456789', digits: 11 },
  { code: 'KR', name: 'South Korea', dialCode: '+82', flag: '🇰🇷', pattern: /^\d{9,10}$/, placeholder: '1023456789', digits: [9, 10] },
  { code: 'SG', name: 'Singapore', dialCode: '+65', flag: '🇸🇬', pattern: /^\d{8}$/, placeholder: '91234567', digits: 8 },
  { code: 'AE', name: 'UAE', dialCode: '+971', flag: '🇦🇪', pattern: /^\d{9}$/, placeholder: '501234567', digits: 9 },
];

const goals = [
  { name: 'Muscle Building', icon: '💪', color: 'from-blue-500 to-purple-600', bgColor: 'bg-gradient-to-r from-blue-500 to-purple-600' },
  { name: 'Fat Loss', icon: '🔥', color: 'from-red-500 to-orange-600', bgColor: 'bg-gradient-to-r from-red-500 to-orange-600' },
  { name: 'Strength Training', icon: '🏋️', color: 'from-gray-700 to-gray-900', bgColor: 'bg-gradient-to-r from-gray-700 to-gray-900' },
  { name: 'Endurance', icon: '🏃', color: 'from-green-500 to-emerald-600', bgColor: 'bg-gradient-to-r from-green-500 to-emerald-600' },
  { name: 'General Fitness', icon: '⭐', color: 'from-yellow-500 to-amber-600', bgColor: 'bg-gradient-to-r from-yellow-500 to-amber-600' },
  { name: 'Weight Gain', icon: '📈', color: 'from-indigo-500 to-blue-600', bgColor: 'bg-gradient-to-r from-indigo-500 to-blue-600' },
  { name: 'Body Transformation', icon: '🔄', color: 'from-purple-500 to-pink-600', bgColor: 'bg-gradient-to-r from-purple-500 to-pink-600' },
  { name: 'Back Injury Rehabilitation', icon: '🩺', color: 'from-teal-500 to-cyan-600', bgColor: 'bg-gradient-to-r from-teal-500 to-cyan-600' },
  { name: 'Quitting Alcohol', icon: '🚫', color: 'from-rose-500 to-red-600', bgColor: 'bg-gradient-to-r from-rose-500 to-red-600' },
  { name: 'Liver & Lung Detox Support', icon: '🌿', color: 'from-lime-500 to-green-600', bgColor: 'bg-gradient-to-r from-lime-500 to-green-600' },
  { name: 'Sports Performance', icon: '⚽', color: 'from-orange-500 to-red-600', bgColor: 'bg-gradient-to-r from-orange-500 to-red-600' },
];

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function ChatWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentInput, setCurrentInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm **FitAI Pro** 🤖, your intelligent fitness companion! Let's start your transformation journey. What's your name?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [currentStep, setCurrentStep] = useState<
    "name" | "email" | "phone" | "goal" | "allergies" | "diseases" | "additionalInfo" | "complete"
  >("name");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    goal: '',
    allergies: '',
    diseases: '',
    additionalInfo: '',
  });
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [submittedPhones, setSubmittedPhones] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load submitted phones from localStorage on component mount
  useEffect(() => {
    const savedPhones = localStorage.getItem('submittedPhoneNumbers');
    if (savedPhones) {
      setSubmittedPhones(JSON.parse(savedPhones));
    }
  }, []);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsChatOpen(true);
      setIsMinimized(false);
    };
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Auto-focus input after each step change
    if (currentStep !== "complete" && inputRef.current && !isSubmitting) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [currentStep, isSubmitting]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getCurrentCountry = () => {
    return (
      countries.find((country) => country.dialCode === formData.countryCode) ||
      countries.find((country) => country.code === "IN") ||
      countries[0]
    );
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhone = (phone: string): boolean => {
    const currentCountry = getCurrentCountry();
    const digitsOnly = phone.replace(/\D/g, '');
    return currentCountry.pattern.test(digitsOnly);
  };

  const formatPhoneInput = (input: string): string => {
    const digitsOnly = input.replace(/\D/g, '');
    const currentCountry = getCurrentCountry();
    const maxDigits = Array.isArray(currentCountry.digits)
      ? currentCountry.digits[1]
      : currentCountry.digits;

    return digitsOnly.slice(0, maxDigits);
  };

  const getPhoneValidationMessage = (): string => {
    const currentCountry = getCurrentCountry();
    const { name, digits } = currentCountry;

    if (Array.isArray(digits)) {
      return `Please enter a valid ${name} phone number (${digits[0]} to ${digits[1]} digits)`;
    }

    return `Please enter a valid ${name} phone number (exactly ${digits} digits)`;
  };

  const getPhonePlaceholder = (): string => {
    const currentCountry = getCurrentCountry();
    return currentCountry.placeholder;
  };

  const handleCountrySelect = (country: (typeof countries)[number]) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: country.dialCode,
      phone: '',
    }));
    setCurrentInput('');
    setShowCountryDropdown(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const handlePhoneInputChange = (value: string) => {
    const formattedValue = formatPhoneInput(value);
    setCurrentInput(formattedValue);
  };

  const toggleGoalSelection = (goal: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal],
    );
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  // Check if phone number has already been submitted
  const isPhoneAlreadySubmitted = (phone: string): boolean => {
    const fullPhone = `${formData.countryCode}${phone}`;
    return submittedPhones.includes(fullPhone);
  };

  // Save submitted phone to localStorage
  const savePhoneToLocalStorage = (phone: string) => {
    const fullPhone = `${formData.countryCode}${phone}`;
    const updatedPhones = [...submittedPhones, fullPhone];
    setSubmittedPhones(updatedPhones);
    localStorage.setItem('submittedPhoneNumbers', JSON.stringify(updatedPhones));
  };

  const handleSendMessage = async () => {
    let effectiveInput = currentInput.trim();

    if (currentStep === "goal" && selectedGoals.length > 0) {
      effectiveInput = selectedGoals.join(", ");
    }

    // For non-goal steps, require some typed input
    if (currentStep !== "goal" && !effectiveInput) {
      return;
    }

    if (effectiveInput) {
      const userMessage: Message = {
        text: effectiveInput,
        isUser: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
    }

    setCurrentInput("");
    setIsSubmitting(true);

    let validationError = "";
    const updatedFormData = { ...formData };

    switch (currentStep) {
      case "name":
        updatedFormData.name = currentInput;
        setFormData(updatedFormData);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: `👋 Nice to meet you, **${currentInput}**! What's your email address?`,
              isUser: false,
              timestamp: new Date(),
            },
          ]);
          setCurrentStep("email");
          setIsSubmitting(false);
        }, 1000);
        break;

      case "email":
        if (!isValidEmail(currentInput)) {
          validationError = "📧 Please enter a valid email address (e.g., name@example.com)";
        } else {
          updatedFormData.email = currentInput;
          setFormData(updatedFormData);
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                text: "✅ Great! What's your phone number? Please enter digits only.",
                isUser: false,
                timestamp: new Date(),
              },
            ]);
            setCurrentStep("phone");
            setIsSubmitting(false);
          }, 1000);
        }
        break;

      case "phone":
        const formattedPhone = formatPhoneInput(currentInput);
        if (!isValidPhone(formattedPhone)) {
          validationError = getPhoneValidationMessage();
        } else if (isPhoneAlreadySubmitted(formattedPhone)) {
          validationError = "⚠️ This phone number has already submitted a consultation request. Please use a different number or contact support directly.";
        } else {
          updatedFormData.phone = formattedPhone;
          setFormData(updatedFormData);
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                text: "📱 Thanks! Now, what's your main fitness goal? Select one or more options:",
                isUser: false,
                timestamp: new Date(),
              },
            ]);
            setCurrentStep("goal");
            setIsSubmitting(false);
          }, 1000);
        }
        break;

      case "goal":
        {
          const goalText = selectedGoals.length > 0
            ? selectedGoals.join(', ')
            : effectiveInput;

          if (!goalText.trim()) {
            validationError = "🎯 Please select at least one goal or type your goal.";
            break;
          }

          updatedFormData.goal = goalText;
          setFormData(updatedFormData);
          setSelectedGoals([]);
          setTimeout(() => {
            setMessages((prev) => [
              ...prev,
              {
                text: "✅ Got it! Do you have any food allergies? If yes, please list them (e.g., Dairy, Nuts, Gluten). If none, just say 'none'.",
                isUser: false,
                timestamp: new Date(),
              },
            ]);
            setCurrentStep("allergies");
            setIsSubmitting(false);
          }, 1000);
        }
        break;

      case "allergies":
        updatedFormData.allergies = currentInput.toLowerCase() === 'none' ? '' : currentInput;
        setFormData(updatedFormData);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: "✅ Understood. Do you have any medical conditions we should know about? (e.g., Diabetes, High BP). If none, just say 'none'.",
              isUser: false,
              timestamp: new Date(),
            },
          ]);
          setCurrentStep("diseases");
          setIsSubmitting(false);
        }, 1000);
        break;

      case "diseases":
        updatedFormData.diseases = currentInput.toLowerCase() === 'none' ? '' : currentInput;
        setFormData(updatedFormData);
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              text: "✅ Thank you! Is there any additional information you'd like to share about your fitness journey?",
              isUser: false,
              timestamp: new Date(),
            },
          ]);
          setCurrentStep("additionalInfo");
          setIsSubmitting(false);
        }, 1000);
        break;

      case "additionalInfo":
        updatedFormData.additionalInfo = currentInput;
        setFormData(updatedFormData);
        
        try {
          // Check again before submission
          if (isPhoneAlreadySubmitted(updatedFormData.phone)) {
            throw new Error('Phone number already submitted');
          }

          // Submit to Web3Forms
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
              name: updatedFormData.name,
              email: updatedFormData.email,
              phone: `${updatedFormData.countryCode}${updatedFormData.phone}`,
              subject: `New Client Inquiry - ${updatedFormData.name}`,
              message: `
Goal: ${updatedFormData.goal}
Allergies: ${updatedFormData.allergies || 'None'}
Diseases: ${updatedFormData.diseases || 'None'}
Additional Info: ${updatedFormData.additionalInfo || 'None'}
              `.trim(),
            }),
          });

          const result = await response.json();

          if (result.success) {
            // Save phone to localStorage after successful submission
            savePhoneToLocalStorage(updatedFormData.phone);
            
            setMessages(prev => [
              ...prev,
              {
                text: "🎉 **Perfect!** I've received all your information. A fitness expert will contact you within 24 hours to create your personalized fitness plan. \n\n📞 **Contact Details:** \n• Name: " + updatedFormData.name + "\n• Phone: " + updatedFormData.countryCode + updatedFormData.phone + "\n\nThank you for choosing **FitAI Pro**! 🏋️‍♂️💪",
                isUser: false,
                timestamp: new Date(),
              },
            ]);
            setFormData({
              name: '',
              email: '',
              countryCode: '+91',
              phone: '',
              goal: '',
              allergies: '',
              diseases: '',
              additionalInfo: '',
            });
          } else {
            throw new Error('Failed to send message');
          }
        } catch (error) {
          setMessages(prev => [
            ...prev,
            {
              text: "⚠️ Thank you for sharing all the details! There was an issue sending your information. Please contact us directly via email or phone.",
              isUser: false,
              timestamp: new Date(),
            },
          ]);
          console.error('Form submission error:', error);
        } finally {
          setCurrentStep("complete");
          setIsSubmitting(false);
        }
        break;

      default:
        setIsSubmitting(false);
        break;
    }

    if (validationError) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            text: validationError,
            isUser: false,
            timestamp: new Date(),
          },
        ]);
        setIsSubmitting(false);
        setTimeout(() => inputRef.current?.focus(), 100);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    const confirmed = window.confirm("Are you sure you want to restart? This will clear all your current inputs.");
    if (confirmed) {
      setMessages([
        {
          text: "Hello! I'm **FitAI Pro** 🤖, your intelligent fitness companion! Let's start your transformation journey. What's your name?",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
      setCurrentStep("name");
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        goal: '',
        allergies: '',
        diseases: '',
        additionalInfo: '',
      });
      setSelectedGoals([]);
      setCurrentInput("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  // Clear localStorage data (for testing/development)
  const clearStorage = () => {
    const confirmed = window.confirm("Clear all stored phone numbers?");
    if (confirmed) {
      localStorage.removeItem('submittedPhoneNumbers');
      setSubmittedPhones([]);
      toast.success("Storage cleared successfully!");
    }
  };

  if (!isChatOpen) return null;

  if (isMinimized) {
    return (
      <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 text-white rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-white/20 rounded-lg">
              <Bot size={16} />
            </div>
            <div>
              <h3 className="font-bold">FitAI Pro</h3>
              <p className="text-xs text-white/80">AI Fitness Assistant</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(false)}
              className="hover:bg-white/20 rounded-lg p-1.5 transition-colors"
            >
              <Maximize2 size={14} />
            </button>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-white/20 rounded-lg p-1.5 transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[420px] h-[600px] bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
      {/* Enhanced Header with AI Theme */}
      <div className="relative p-4 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 text-white rounded-t-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" />
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-xl">
              <Bot size={24} className="animate-pulse" />
            </div>
            <div>
              <h3 className="font-bold text-lg flex items-center gap-2">
                FitAI Pro 
                <span className="text-xs px-2 py-0.5 bg-white/20 rounded-full">🤖 AI</span>
              </h3>
              <p className="text-sm text-white/90">Intelligent Fitness Assistant</p>
            </div>
          </div>
          
          <div className="flex gap-1">
            <button
              onClick={clearStorage}
              className="text-xs px-2 py-1 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              title="Clear stored data"
            >
              Clear Data
            </button>
            <button
              onClick={resetChat}
              className="text-xs px-3 py-1.5 bg-white/20 hover:bg-white/30 rounded-lg transition-colors flex items-center gap-1"
            >
              <Sparkles size={12} />
              Restart
            </button>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Minimize2 size={16} />
            </button>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>
        
        <div className="relative mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
            <Target size={10} />
            <span>Personalized Plans</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
            <Brain size={10} />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-white/20 px-2 py-1 rounded-full">
            <Heart size={10} />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* Enhanced Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"} animate-fadeIn`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 backdrop-blur-sm ${
                  message.isUser
                    ? "bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-br-none shadow-lg"
                    : "bg-white/90 border border-gray-200/50 text-gray-800 rounded-bl-none shadow-sm"
                }`}
              >
                {!message.isUser && (
                  <div className="flex items-center gap-2 mb-1">
                    <Bot size={12} className="text-orange-500" />
                    <span className="text-xs font-semibold text-orange-600">FitAI Pro</span>
                  </div>
                )}
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                <p className={`text-xs mt-2 ${
                  message.isUser ? "text-white/70" : "text-gray-500"
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isSubmitting && (
            <div className="flex justify-start">
              <div className="bg-white/90 border border-gray-200/50 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                  <span className="text-xs text-gray-600">FitAI is thinking...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Enhanced Input Area */}
      {currentStep !== "complete" && (
        <div className="p-4 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm">
          {currentStep === "phone" && (
            <div className="mb-3 relative">
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                <span className="flex items-center gap-1">
                  <span>🌎 Country Code</span>
                  {isPhoneAlreadySubmitted(formData.phone) && (
                    <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                      Already Submitted
                    </span>
                  )}
                </span>
              </label>
              <button
                type="button"
                onClick={() => setShowCountryDropdown((prev) => !prev)}
                className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-xl text-left text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all hover:border-gray-400"
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{getCurrentCountry().flag}</span>
                  <span className="font-medium">{formData.countryCode}</span>
                  <span className="text-gray-600">{getCurrentCountry().name}</span>
                  <span className="ml-auto text-gray-400 transform transition-transform">
                    {showCountryDropdown ? '▲' : '▼'}
                  </span>
                </span>
              </button>

              {showCountryDropdown && (
                <div className="absolute bottom-full left-0 right-0 mb-2 max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full px-3 py-2.5 text-left text-sm hover:bg-gray-50 flex items-center gap-2 transition-colors ${
                        formData.countryCode === country.dialCode ? 'bg-orange-50 text-orange-600 border-l-4 border-orange-500' : ''
                      }`}
                    >
                      <span className="text-lg">{country.flag}</span>
                      <span className="flex-1 font-medium">{country.name}</span>
                      <span className="text-gray-500">{country.dialCode}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {currentStep === "goal" && (
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-600 mb-2">
                🎯 Tap to select one or more goals:
              </p>
              <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto p-1">
                {goals.map((goal) => {
                  const isSelected = selectedGoals.includes(goal.name);
                  return (
                    <button
                      key={goal.name}
                      type="button"
                      onClick={() => toggleGoalSelection(goal.name)}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent flex items-center gap-1.5 ${
                        isSelected
                          ? `${goal.bgColor} text-white border-transparent shadow-md transform scale-[1.02]`
                          : "bg-white text-gray-700 border-gray-300 hover:border-orange-400 hover:text-orange-600 hover:shadow-sm"
                      }`}
                    >
                      <span className="text-sm">{goal.icon}</span>
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
                  ? handlePhoneInputChange(e.target.value)
                  : setCurrentInput(e.target.value)
              }
              onKeyPress={handleKeyPress}
              placeholder={
                currentStep === "name"
                  ? "Type your name here..."
                  : currentStep === "email"
                  ? "your.email@example.com..."
                  : currentStep === "phone"
                  ? `e.g., ${getPhonePlaceholder()}`
                  : currentStep === "goal"
                  ? "Or type your custom goal..."
                  : currentStep === "allergies"
                  ? "Type allergies or 'none'..."
                  : currentStep === "diseases"
                  ? "Medical conditions or 'none'..."
                  : "Any additional information..."
              }
              className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 placeholder-gray-500 transition-all"
              disabled={isSubmitting}
              autoFocus
            />
            <button
              onClick={handleSendMessage}
              disabled={
                (
                  currentStep === "goal"
                    ? selectedGoals.length === 0 && !currentInput.trim()
                    : !currentInput.trim()
                ) || isSubmitting
              }
              className="px-5 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl hover:from-orange-600 hover:to-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg flex items-center gap-2"
            >
              {isSubmitting ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  <span className="hidden sm:inline">Send</span>
                </>
              )}
            </button>
          </div>
          
          {currentStep === "email" && (
            <p className="text-xs text-gray-500 mt-2 px-1">
              📧 We'll use this to send your personalized fitness plan
            </p>
          )}
          {currentStep === "phone" && (
            <div className="text-xs mt-2 px-1">
              <p className="text-gray-500 mb-1">{getPhoneValidationMessage()}</p>
              {isPhoneAlreadySubmitted(formData.phone) && (
                <p className="text-red-600 font-medium flex items-center gap-1">
                  <span>⚠️</span>
                  This number has already submitted a request
                </p>
              )}
            </div>
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
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Phone Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-2xl group relative"
          title="Call Fitness Expert"
        >
          <Phone size={26} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs animate-pulse">
            📞
          </div>
        </a>

        {/* Enhanced Chat Button with AI Theme */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="cursor-pointer flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 via-red-600 to-orange-500 hover:from-orange-700 hover:via-red-700 hover:to-orange-600 text-white rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-2xl relative group"
          title="Chat with FitAI Pro"
        >
          <div className="relative">
            <Bot size={28} />
            <Sparkles size={12} className="absolute -top-1 -right-1 text-yellow-300" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            AI
          </div>
          
          {/* Tooltip */}
          <div className="absolute -top-14 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="font-semibold">Ask FitAI Pro 🤖</div>
            <div className="text-gray-300">AI Fitness Assistant</div>
          </div>
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=Hello%20FitAI%20Pro%20Team!%20I%20need%20fitness%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white rounded-full shadow-xl transition-all hover:scale-110 hover:shadow-2xl group relative"
          title="Chat on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="28" 
            height="28" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-[#25D366] rounded-full flex items-center justify-center text-xs font-bold">
            💬
          </div>
        </a>
      </div>

      {/* Chat Widget */}
      {isChatOpen && <ChatWidget />}
    </>
  );
}

export function OpenChatTrigger(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { onClick, ...rest } = props;

  return (
    <button
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        const openEvent = new CustomEvent('open-chat');
        window.dispatchEvent(openEvent);
      }}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 transition-all hover:shadow-lg"
    >
      <Bot size={18} />
      <span>Ask FitAI Pro</span>
    </button>
  );
}