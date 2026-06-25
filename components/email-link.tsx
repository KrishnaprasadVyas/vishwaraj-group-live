"use client";

import React from "react";
import { Mail } from "lucide-react";
import { useEmailModal } from "./email-modal-provider";

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

export function EmailLink({ email, className, children }: EmailLinkProps) {
  const { openEmailModal } = useEmailModal();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Preserve standard browser behaviors:
    // If Ctrl, Cmd, Alt, or Shift is held down, or it is a middle mouse click (button 1),
    // do not trigger the custom modal and let the default browser mailto handler execute.
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button === 1) {
      return;
    }

    e.preventDefault();
    openEmailModal(email, e.currentTarget);
  };

  if (children) {
    return (
      <a
        href={`mailto:${email}`}
        onClick={handleClick}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className || "flex gap-4 items-start group cursor-pointer"}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[rgba(249,115,22,0.08)] text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-300">
        <Mail className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[10px] font-bold tracking-[0.18em] text-secondary uppercase font-mono mb-1">
          Email
        </div>
        <div className="text-sm font-semibold text-primary group-hover:text-[#F97316] transition-colors break-all">
          {email}
        </div>
      </div>
    </a>
  );
}
