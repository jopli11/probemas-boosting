"use client";

import { useState } from "react";
import { servicesCategories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(servicesCategories[0]?.id);
  const activeCategory = servicesCategories.find((c) => c.id === activeId) ?? servicesCategories[0];

  return (
    <section id="services" className="py-16">
      <div className="page-container space-y-10">
        <SectionHeading
          title="Special Services For Our Unique Customers"
          subtitle="Pick a category to see how we can help."
        />
        <div className="grid gap-6 lg:grid-cols-[280px,1fr]">
          <div className="card-surface flex overflow-x-auto lg:flex-col">
            {servicesCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveId(category.id)}
                  className={`flex-1 whitespace-nowrap px-4 py-3 text-left text-sm font-medium transition hover:bg-white/5 lg:flex-none ${
                    isActive
                      ? "bg-probemas-primary text-black lg:rounded-xl"
                      : "text-probemas-muted"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="card-surface p-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold">{activeCategory?.label}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-probemas-muted">
                Services
              </span>
            </div>
            <p className="text-probemas-muted">{activeCategory?.description}</p>
            <div className="flex gap-4 overflow-x-auto">
              {activeCategory?.gallery.map((img) => (
                <div
                  key={img}
                  className="min-w-[180px] flex-1 rounded-xl border border-white/10 bg-gradient-to-br from-probemas-bgSoft to-probemas-bg p-4 text-center text-sm text-probemas-muted"
                >
                  <div className="mb-3 h-32 w-full rounded-lg bg-black/20" />
                  <p className="truncate">{img}</p>
                  <p className="text-xs text-probemas-muted/70">
                    Replace with gallery art
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

