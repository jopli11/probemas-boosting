import Image from "next/image";
import { paymentMethods } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const brandStyles: Record<
  string,
  {
    bg: string;
    invert?: boolean;
  }
> = {
  Visa: { bg: "#1a1f71", invert: true },
  Mastercard: { bg: "#000000", invert: true },
  "Google Pay": { bg: "#ffffff", invert: false },
  "Apple Pay": { bg: "#ffffff", invert: false },
  Skrill: { bg: "#811f68" },
  Trustly: { bg: "#39b54a" },
  iDEAL: { bg: "#ffffff", invert: false },
  SEPA: { bg: "#ffffff", invert: false },
  Interac: { bg: "#f9b819" },
  Zelle: { bg: "#6d1ed4", invert: true },
  paysafecard: { bg: "#0d9dda" },
  Crypto: { bg: "#f7931a" },
};

export function PaymentMethods() {
  return (
    <section className="py-16">
      <div className="page-container space-y-8">
        <SectionHeading title="Payment Methods" />
        <div className="h-1 w-16 rounded-full bg-probemas-primary" />
        <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
          {paymentMethods.map((method) => {
            const style = brandStyles[method.name] ?? { bg: "rgba(255,255,255,0.04)" };
            return (
              <div
                key={method.name}
                className="flex h-16 items-center justify-center rounded-xl border border-white/10 px-4"
                style={{ backgroundColor: style.bg }}
              >
                {method.logo ? (
                  <Image
                    src={method.logo}
                    alt={method.name}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                    style={style.invert ? { filter: "brightness(0) invert(1)" } : undefined}
                  />
                ) : (
                  <span className="text-center text-xs font-semibold leading-tight text-white">
                    {method.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

