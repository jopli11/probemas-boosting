"use client";

import Image from "next/image";
import { useState } from "react";
import { servicesCategories } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(servicesCategories[0]?.id);
  const activeCategory = servicesCategories.find((c) => c.id === activeId) ?? servicesCategories[0];

  return (
    <section id="services" className="py-16 overflow-hidden">
      <div className="page-container space-y-10">
        <SectionHeading
          title="Special Services For Our Unique Customers"
          subtitle="Pick a category to see how we can help."
        />
        <div className="grid gap-6 items-start lg:grid-cols-[minmax(240px,280px),1fr]">
          <div className="card-surface flex overflow-x-auto lg:flex-col">
            {servicesCategories.map((category) => {
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveId(category.id)}
                  className={`flex flex-1 items-center gap-3 whitespace-nowrap px-4 py-3 text-left text-sm font-medium transition hover:bg-white/5 lg:flex-none ${
                    isActive
                      ? "bg-probemas-primary text-black lg:rounded-xl"
                      : "text-probemas-muted"
                  }`}
                >
                  {category.icon ? (
                    <span className="relative h-6 w-6 overflow-hidden rounded-full bg-white/10">
                      <Image
                        src={category.icon}
                        alt={category.label}
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </span>
                  ) : null}
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>

          <div className="card-surface p-6 space-y-4 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-semibold">{activeCategory?.label}</h3>
              <span className="text-xs uppercase tracking-[0.2em] text-probemas-muted">
                Services
              </span>
            </div>
            <p className="text-probemas-muted">{activeCategory?.description}</p>
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
              {activeCategory?.gallery.map((img) => (
                <div
                  key={img}
                  className="min-w-[72vw] max-w-[320px] flex-1 snap-start rounded-xl border border-white/10 bg-gradient-to-br from-probemas-bgSoft to-probemas-bg p-4 text-center text-sm text-probemas-muted sm:min-w-[220px]"
                >
                  <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg bg-black/20 sm:h-36">
                    <Image
                      src={img}
                      alt={`${activeCategory?.label ?? "Service"} preview`}
                      fill
                      sizes="(min-width: 1024px) 240px, 80vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="text-xs text-probemas-muted/70">Service preview</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

