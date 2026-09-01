import { useEffect, useState } from "react";
import { MessageCircle, Check } from "lucide-react";
import CALogo from "../src/assets/CA.png";

/**
 * Thank-you / order-confirmation page for the Landing Page Mastery Program.
 * Same violet palette, type scale, and entrance-animation pattern as
 * HeroSection.jsx, with a WhatsApp CTA styled to match the hero's
 * emerald-outline button. Fully self-contained — no Button.jsx dependency.
 *
 * No name-personalization — this page is shown right after payment, before
 * we necessarily have a clean name to print, so copy stays scoped to "you."
 */

function useEntrance() {
  const [mounted, setMounted] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const step = (extra = "") => {
    if (reduceMotion) return "opacity-100";
    return `transition-all duration-700 ease-out ${extra} ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`;
  };

  const delay = (ms) => (reduceMotion ? undefined : { transitionDelay: `${ms}ms` });

  return { step, delay };
}

export default function ThankYouPage() {
  const { step, delay } = useEntrance();

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-violet-50 via-white to-white">
      <style>{`
        @keyframes heroGlow {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scale(1); }
          50% { opacity: 0.65; transform: translateX(-50%) scale(1.08); }
        }
        @keyframes checkPop {
          0% { transform: scale(0.6); opacity: 0; }
          60% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-glow, .check-pop { animation: none !important; }
        }
      `}</style>

      <div
        className="hero-glow pointer-events-none absolute -top-24 left-1/2 h-[220px] w-[90%] max-w-[1000px] -translate-x-1/2 rounded-full bg-violet-200/40 blur-3xl sm:-top-40 sm:h-[520px]"
        style={{ animation: "heroGlow 6s ease-in-out infinite" }}
      />

      {/* navbar — identical to HeroSection */}
      <nav
        className={`relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:flex-nowrap sm:px-6 sm:py-6 ${step()}`}
        style={delay(0)}
      >
        <a
          href="https://rzp.io/rzp/AD2PP0lT"
          className="flex min-w-0 items-center gap-2 text-sm font-bold text-slate-900 sm:text-lg"
        >
          <img
            src={CALogo}
            alt="Creative Adhyayan"
            className="h-8 w-auto shrink-0 object-contain transition-transform duration-300 hover:rotate-12 sm:h-12"
          />
        </a>
        <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wide text-violet-600 sm:text-sm">
          Order confirmed
        </span>
      </nav>

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 pt-8 pb-10 text-center sm:px-6 sm:pt-12 sm:pb-14">
        {/* check badge — one deliberate motion moment, matching the hero's single glow beat */}
        <div
          className={`check-pop mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-300/60 sm:h-20 sm:w-20 ${step()}`}
          style={{ animation: "checkPop 0.6s ease-out 0.1s backwards", ...delay(0) }}
        >
          <Check className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={3} />
        </div>

        {/* eyebrow */}
        <span
          className={`mt-6 inline-flex items-center gap-1.5 self-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-violet-700 sm:px-4 sm:py-1.5 sm:text-xs ${step()}`}
          style={delay(80)}
        >
          Landing Page Mastery Program
        </span>

        {/* headline */}
        <h1
          className={`mt-4 text-[2rem] font-bold leading-tight tracking-tight text-slate-900 sm:mt-5 sm:text-5xl ${step()}`}
          style={delay(160)}
        >
          You're{" "}
          <span className="bg-violet-600 bg-clip-text text-transparent">
            in
          </span>
          .
        </h1>

        <p
          className={`mx-auto mt-3 max-w-xl text-[15px] font-semibold text-slate-700 sm:mt-4 sm:text-lg ${step()}`}
          style={delay(240)}
        >
          Your seat is confirmed. Day 1 of your 30-day journey starts soon —
          here's what to do in the meantime.
        </p>


        {/* CTA — plain anchor, no external Button component needed */}
        <div
          className={`mt-6 flex flex-col items-center justify-center px-2 sm:mt-8 sm:px-0 ${step()}`}
          style={delay(360)}
        >
          <a
            href="https://wa.me/919899669649"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-emerald-500 bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-emerald-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-200 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Connect On WhatsApp
          </a>
        </div>

        {/* support */}
        <p
          className={`mt-12 text-sm text-slate-500 ${step()}`}
          style={delay(480)}
        >
          Didn't get the confirmation email, or something looks off with your
          order?{" "}
          <a
            href="mailto:support@creativeadhyayan.com"
            className="font-semibold text-violet-600 underline decoration-violet-300 underline-offset-4 hover:text-violet-700"
          >
            support@creativeadhyayan.com
          </a>
        </p>
      </div>
    </section>
  );
}