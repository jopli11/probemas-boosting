"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { promotions } from "@/lib/content";

type Promotion = (typeof promotions)[number];

function formatTimeLeft(expiresAt?: Promotion["expiresAt"]) {
  if (!expiresAt) return null;

  const target = new Date(expiresAt).getTime();
  if (Number.isNaN(target)) return null;

  const diff = target - Date.now();
  if (diff <= 0) return "Ends soon";

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (v: number) => String(v).padStart(2, "0");

  return `${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export function PromoBanner() {
  const promo = promotions.find((item) => item.active !== false);
  const [timeLeft, setTimeLeft] = useState(() => formatTimeLeft(promo?.expiresAt));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!promo?.expiresAt) return;

    const timer = setInterval(() => {
      setTimeLeft(formatTimeLeft(promo.expiresAt));
    }, 1_000);

    return () => clearInterval(timer);
  }, [promo?.expiresAt]);

  if (!promo) return null;

  const handleCopy = async () => {
    if (!promo.code || typeof navigator === "undefined" || !navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy promo code", error);
    }
  };

  return (
    <section className="border-b border-probemas-primary/30 bg-gradient-to-r from-probemas-primary/25 via-probemas-primary/10 to-probemas-bg">
      <div className="page-container py-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-probemas-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-black shadow-[0_10px_26px_rgba(0,0,0,0.25)]">
              {promo.label ?? "Limited time"}
            </span>
            {timeLeft ? (
              <span className="text-xs text-probemas-text/80">Ends in {timeLeft}</span>
            ) : null}
          </div>

          <div className="flex flex-1 flex-col gap-1 md:px-6">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-base font-semibold text-probemas-text md:text-lg">
                {promo.title}
              </p>
              {promo.discountLabel ? (
                <span className="inline-flex items-center rounded-full border border-black/10 bg-probemas-primary px-3 py-1 text-xs font-semibold text-black shadow-[0_10px_26px_rgba(0,0,0,0.25)]">
                  {promo.discountLabel}
                </span>
              ) : null}
            </div>
            {promo.description ? (
              <p className="text-sm text-probemas-muted">{promo.description}</p>
            ) : null}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
            {promo.code ? (
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-between gap-2 rounded-xl border border-black/10 bg-probemas-primary px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_26px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-probemas-primary/90"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs uppercase text-black/80">Code</span>
                  <span>{promo.code}</span>
                </span>
                <span className="text-[11px] text-black/70">
                  {copied ? "Copied" : "Copy"}
                </span>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
