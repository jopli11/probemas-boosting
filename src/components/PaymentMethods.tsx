import { paymentMethods } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function PaymentMethods() {
  return (
    <section className="py-16">
      <div className="page-container space-y-8">
        <SectionHeading title="Payment Methods" />
        <div className="h-1 w-16 rounded-full bg-probemas-primary" />
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-6">
          {paymentMethods.map((method) => (
            <div
              key={method.name}
              className="flex h-16 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-probemas-text"
            >
              {method.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

