"use client";

import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion, Variants } from "framer-motion";
import { Mail, Check, Copy, ExternalLink, X, Send, Loader2 } from "lucide-react";

interface EmailModalContextType {
  openEmailModal: (email: string, trigger: HTMLElement) => void;
}

const EmailModalContext = createContext<EmailModalContextType | undefined>(undefined);

export function useEmailModal() {
  const context = useContext(EmailModalContext);
  if (!context) {
    throw new Error("useEmailModal must be used within an EmailModalProvider");
  }
  return context;
}

export function EmailModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [toast, setToast] = useState("");
  const [copied, setCopied] = useState(false);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [loadingOption, setLoadingOption] = useState<"gmail" | "outlook" | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  
  // Respect user preference for reduced motion
  const shouldReduceMotion = useReducedMotion();

  // Detect screen size for responsive animation states
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openEmailModal = (emailAddress: string, trigger: HTMLElement) => {
    setEmail(emailAddress);
    setTriggerElement(trigger);
    setCopied(false);
    setLoadingOption(null);
    setIsOpen(true);
  };

  const closeEmailModal = useCallback(() => {
    setIsOpen(false);
    if (triggerElement) {
      setTimeout(() => {
        triggerElement.focus();
      }, 0);
    }
  }, [triggerElement]);

  // Close on Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEmailModal();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeEmailModal]);

  // Trap focus inside modal
  useEffect(() => {
    if (!isOpen) return;

    const modalElement = modalRef.current;
    if (!modalElement) return;

    const focusableElements = modalElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  const handleCopy = () => {
    // Optional Analytics dispatch
    trackAction("Copy Email");

    navigator.clipboard.writeText(email);
    setCopied(true);
    setToast("Email address copied successfully!");
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);

    setTimeout(() => {
      setToast("");
    }, 3000);
  };

  const triggerGmailOpen = () => {
    if (loadingOption) return;
    trackAction("Open Gmail");

    setLoadingOption("gmail");
    setTimeout(() => {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`, 
        "_blank", 
        "noopener,noreferrer"
      );
      setLoadingOption(null);
    }, 250); // maximum 250ms loading to prevent double tabs
  };

  const triggerOutlookOpen = () => {
    if (loadingOption) return;
    trackAction("Open Outlook");

    setLoadingOption("outlook");
    setTimeout(() => {
      window.open(
        `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}`, 
        "_blank", 
        "noopener,noreferrer"
      );
      setLoadingOption(null);
    }, 250); // maximum 250ms loading to prevent double tabs
  };

  // Analytics Integration Point
  const trackAction = (action: string) => {
    if (typeof window !== "undefined") {
      // Dispatch custom analytics events in production
      const anyWindow = window as Window & {
        gtag?: (event: string, actionName: string, config: Record<string, unknown>) => void;
      };
      if (anyWindow.gtag) {
        anyWindow.gtag("event", "email_interaction", {
          event_category: "Contact",
          event_label: email,
          interaction_type: action
        });
      }
    }
  };

  // Animation configurations (respect prefers-reduced-motion)
  const overlayTransition = shouldReduceMotion ? { duration: 0.15 } : { duration: 0.25 };
  
  const modalVariants: Variants = isMobile
    ? {
        initial: { y: "100%", opacity: 1 },
        animate: { 
          y: 0, 
          opacity: 1, 
          transition: shouldReduceMotion 
            ? { duration: 0.2 } 
            : { type: "spring", damping: 30, stiffness: 280 } 
        },
        exit: { 
          y: "100%", 
          opacity: 1, 
          transition: shouldReduceMotion 
            ? { duration: 0.15 } 
            : { type: "spring", damping: 35, stiffness: 300 } 
        }
      }
    : {
        initial: { scale: 0.96, opacity: 0 },
        animate: { 
          scale: 1, 
          opacity: 1, 
          transition: shouldReduceMotion 
            ? { duration: 0.2 } 
            : { type: "spring", damping: 25, stiffness: 220 } 
        },
        exit: { 
          scale: 0.96, 
          opacity: 0, 
          transition: { duration: 0.18, ease: "easeIn" } 
        }
      };

  const toastVariants: Variants = isMobile
    ? {
        initial: { opacity: 0, y: 20, x: "-50%" },
        animate: { 
          opacity: 1, 
          y: 0, 
          x: "-50%", 
          transition: shouldReduceMotion 
            ? { duration: 0.2 } 
            : { type: "spring", damping: 25, stiffness: 200 } 
        },
        exit: { opacity: 0, y: 20, x: "-50%" }
      }
    : {
        initial: { opacity: 0, x: 50 },
        animate: { 
          opacity: 1, 
          x: 0, 
          transition: shouldReduceMotion 
            ? { duration: 0.2 } 
            : { type: "spring", damping: 25, stiffness: 200 } 
        },
        exit: { opacity: 0, x: 50 }
      };

  const buttonHover = shouldReduceMotion 
    ? {} 
    : { scale: 1.018, y: -2 };

  const buttonTap = shouldReduceMotion 
    ? {} 
    : { scale: 0.97 };

  return (
    <EmailModalContext.Provider value={{ openEmailModal }}>
      {children}

      {/* Global Email Modal Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-0 sm:p-4">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              transition={overlayTransition}
              onClick={closeEmailModal}
              className="absolute inset-0 bg-[#001529]/80 backdrop-blur-sm dark:bg-black/90"
            />

            {/* Modal Box with Glassmorphism and Dark Mode support */}
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              variants={modalVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative w-full rounded-t-[2.5rem] rounded-b-none bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 pb-12 shadow-[0_-12px_40px_rgba(0,21,41,0.15)] border-t border-white/40 dark:border-slate-800/60 z-10 sm:rounded-[2.25rem] sm:max-w-[420px] sm:shadow-[0_24px_64px_rgba(0,21,41,0.18)] sm:border sm:pb-6"
            >
              {/* Decorative top drag bar for bottom-sheet feel on mobile */}
              <div className="w-12 h-1 bg-zinc-300/80 dark:bg-zinc-700/80 rounded-full mx-auto mb-5 sm:hidden" />

              {/* Close Button */}
              <button
                onClick={closeEmailModal}
                className="absolute top-5 right-5 text-slate-500 hover:text-[#001529] dark:hover:text-white p-1.5 rounded-full hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 outline-none"
                aria-label="Close contact options modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title & Email Display */}
              <div className="mb-6 mt-2 text-center pr-6 pl-2">
                <h3 id="modal-title" className="text-lg font-bold text-[#001529] dark:text-white mb-2 leading-tight">
                  Choose how you&apos;d like to contact us
                </h3>
                <p className="text-sm font-mono font-semibold text-[#FF5A00] select-all break-all px-3.5 py-2.5 bg-[#001529]/5 dark:bg-slate-950/40 rounded-2xl border border-[#001529]/5 dark:border-slate-950/20">
                  {email}
                </p>
              </div>

              {/* Options list */}
              <div className="flex flex-col gap-3">
                {/* 1. Gmail */}
                <motion.button
                  onClick={triggerGmailOpen}
                  disabled={loadingOption !== null}
                  aria-label="Open in Gmail"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="flex items-center justify-between w-full p-4 rounded-2xl border border-zinc-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 hover:border-[#FF5A00]/20 text-[#001529] dark:text-zinc-200 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 outline-none disabled:opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 dark:bg-red-500/10 text-red-500 group-hover:scale-105 transition-transform">
                      {loadingOption === "gmail" ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Mail className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold">Open in Gmail</div>
                      <div className="text-xs text-zinc-400">Open Gmail in a new tab</div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-[#FF5A00] transition-colors" />
                </motion.button>

                {/* 2. Outlook */}
                <motion.button
                  onClick={triggerOutlookOpen}
                  disabled={loadingOption !== null}
                  aria-label="Open in Outlook"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="flex items-center justify-between w-full p-4 rounded-2xl border border-zinc-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 hover:border-[#FF5A00]/20 text-[#001529] dark:text-zinc-200 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 outline-none disabled:opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-500 group-hover:scale-105 transition-transform">
                      {loadingOption === "outlook" ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-bold">Open in Outlook</div>
                      <div className="text-xs text-zinc-400">Open Outlook webmail in a new tab</div>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-[#FF5A00] transition-colors" />
                </motion.button>

                {/* 3. Copy address */}
                <motion.button
                  onClick={handleCopy}
                  aria-label="Copy email address to clipboard"
                  whileHover={buttonHover}
                  whileTap={buttonTap}
                  className="flex items-center justify-between w-full p-4 rounded-2xl border border-zinc-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-800 hover:border-[#FF5A00]/20 text-[#001529] dark:text-zinc-200 transition-all text-left group cursor-pointer shadow-sm hover:shadow-md focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2 outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-500/10 text-[#FF5A00] group-hover:scale-105 transition-transform">
                      <AnimatePresence mode="wait">
                        {copied ? (
                          <motion.div
                            key="copied-icon"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Check className="h-5 w-5 text-emerald-500" />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy-icon"
                            initial={{ scale: 0.6, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.6, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            <Copy className="h-5 w-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <div>
                      <div className="h-5 overflow-hidden">
                        <AnimatePresence mode="wait">
                          {copied ? (
                            <motion.div
                              key="copied-text"
                              initial={{ y: 15, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -15, opacity: 0 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="text-sm font-bold text-emerald-600 dark:text-emerald-400"
                            >
                              Copied ✓
                            </motion.div>
                          ) : (
                            <motion.div
                              key="copy-text"
                              initial={{ y: 15, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -15, opacity: 0 }}
                              transition={{ duration: 0.18, ease: "easeOut" }}
                              className="text-sm font-bold"
                            >
                              Copy Email Address
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="text-xs text-zinc-400">Copy address to clipboard</div>
                    </div>
                  </div>
                  <Copy className="h-4 w-4 text-slate-400 group-hover:text-[#FF5A00] transition-colors" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Toast Notification (Responsive position) */}
      <AnimatePresence>
        {toast && (
          <div 
            className={`fixed z-50 pointer-events-none px-4 w-full max-w-[340px] ${
              isMobile 
                ? "bottom-28 left-1/2 -translate-x-1/2" 
                : "bottom-6 right-6"
            }`}
          >
            <motion.div
              variants={toastVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex items-center gap-2.5 px-4 py-3 bg-[#001529] dark:bg-slate-950 text-white rounded-xl shadow-lg text-sm border border-white/10 dark:border-zinc-800"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0">
                <Check className="h-3 w-3" />
              </div>
              <span className="font-medium text-zinc-100">{toast}</span>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </EmailModalContext.Provider>
  );
}
