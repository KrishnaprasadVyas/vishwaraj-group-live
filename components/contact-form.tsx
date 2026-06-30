"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setMessage("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json().catch(() => ({}))) as { error?: string; message?: string };

    if (!response.ok) {
      setStatus("error");
      setMessage(payload.error ?? "Unable to send your message right now.");
      return;
    }

    setStatus("success");
    setMessage(payload.message ?? "Your inquiry has been sent successfully.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-4xl border border-border bg-white p-6 shadow-[0_24px_60px_rgba(17,24,39,0.06)] sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-primary">Name</label>
          <input id="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} className="h-12 rounded-2xl border border-border bg-surface px-4 text-primary outline-none transition placeholder:text-secondary focus:border-[rgba(249,115,22,0.45)] focus:bg-white" placeholder="Enter your name" />
          {errors.name ? <p id="name-error" role="alert" className="text-sm text-red-600">{errors.name.message}</p> : null}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm font-medium text-primary">Phone</label>
            <input id="phone" type="tel" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} className="h-12 rounded-2xl border border-border bg-surface px-4 text-primary outline-none transition placeholder:text-secondary focus:border-[rgba(249,115,22,0.45)] focus:bg-white" placeholder="Enter your phone number" />
            {errors.phone ? <p id="phone-error" role="alert" className="text-sm text-red-600">{errors.phone.message}</p> : null}
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm font-medium text-primary">Email</label>
            <input id="email" type="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} className="h-12 rounded-2xl border border-border bg-surface px-4 text-primary outline-none transition placeholder:text-secondary focus:border-[rgba(249,115,22,0.45)] focus:bg-white" placeholder="Enter your email" />
            {errors.email ? <p id="email-error" role="alert" className="text-sm text-red-600">{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-primary">Message</label>
          <textarea id="message" rows={6} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} {...register("message")} className="rounded-2xl border border-border bg-surface px-4 py-3 text-primary outline-none transition placeholder:text-secondary focus:border-[rgba(249,115,22,0.45)] focus:bg-white" placeholder="Tell us about your packaging requirements" />
          {errors.message ? <p id="message-error" role="alert" className="text-sm text-red-600">{errors.message.message}</p> : null}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(249,115,22,0.32)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          Send Inquiry
        </button>

        {status !== "idle" ? (
          <p role="status" aria-live="polite" className={`text-sm ${status === "success" ? "text-emerald-700" : "text-red-600"}`}>
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
