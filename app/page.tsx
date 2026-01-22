"use client";

import React, { useState } from "react";

const BUSINESS_EMAIL = "truepathadvocates26@gmail.com";
const EMAIL_MAILTO = `mailto:${BUSINESS_EMAIL}`;
const FORM_ENDPOINT = "https://formspree.io/f/mgooejgr";

// Simple inline SVG logo
function Logo({ className = "w-12 h-12" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-label="TruePath Advocates logo" role="img">
      <defs>
        <linearGradient id="pathGrad" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#05C3DD" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#FF6A00" />
        </linearGradient>
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#FFD54A" />
          <stop offset="100%" stopColor="#FFA31A" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="40" r="22" fill="url(#sunGrad)" />
      <path d="M10 170c50-80 80-60 120-120" stroke="url(#pathGrad)" strokeWidth="16" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 text-lg text-gray-700">{subtitle}</p>
        ) : null}
      </div>

      <div className="mt-10">{children}</div>
    </section>
  );
}



function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {

  return (
    <div className="rounded-2xl bg-white/70 backdrop-blur shadow-sm p-6 text-center">
      <div className="text-3xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}

function Service({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {

  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="shrink-0">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

async function copyToClipboard(text: string) {

  try {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (e) {}
  return false;
}

export default function TruePathAdvocatesSite() {
  const [zelleCopied, setZelleCopied] = useState(false);

  const handleZelleCopy = async () => {
    const ok = await copyToClipboard(BUSINESS_EMAIL);
    if (ok) {
      setZelleCopied(true);
      setTimeout(() => setZelleCopied(false), 1600);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-300 via-fuchsia-300 to-orange-200" />
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl opacity-60 bg-cyan-400" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full blur-3xl opacity-60 bg-orange-300" />

        <nav className="mx-auto max-w-6xl flex items-center justify-between px-4 py-5">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <span className="font-extrabold tracking-tight text-xl">TruePath Advocates</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#about" className="hover:opacity-80">About</a>
            <a href="#pricing" className="hover:opacity-80">Pricing</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-gray-900 text-white shadow hover:-translate-y-0.5 transition">
              <CheckIcon /> Free Consultation
            </a>
            <a
              href="#donate"
              className="ml-3 inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-black text-white shadow hover:-translate-y-0.5 transition"
            >
              Donate
            </a>
          </div>
        </nav>

        <div className="mx-auto max-w-6xl px-4 pt-10 pb-20 md:pt-14 md:pb-28">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm shadow-sm ring-1 ring-white/50">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Now accepting new clients in the Bay Area
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                Guiding You Through{" "}
                <span className="bg-gradient-to-r from-cyan-600 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent">
                  Healthcare’s Maze
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                We help you understand benefits, resolve billing issues, navigate Medi-Cal/Medicare, and fight claim denials — with care and clarity.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-gray-900 text-white px-5 py-3 shadow hover:-translate-y-0.5 transition">
                  Book a Free Call
                </a>
                <a href="#services" className="rounded-2xl bg-white/70 backdrop-blur px-5 py-3 ring-1 ring-black/10 hover:bg-white transition">
                  See Services
                </a>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <Stat value="24–72h" label="Typical Resolution Window" />
                <Stat value="$99" label="Flat Benefit Review" />
                <Stat value="5★" label="Client Care Focus" />
              </div>
            </div>

            <div className="relative">
              <div className="w-full rounded-3xl bg-white/70 p-6 shadow ring-1 ring-black/10">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-2xl p-4 bg-cyan-50 ring-1 ring-cyan-100">
                    <div className="font-semibold">Insurance Paperwork</div>
                    <p className="mt-1 text-gray-600">We break down EOBs and handle forms step-by-step.</p>
                  </div>
                  <div className="rounded-2xl p-4 bg-fuchsia-50 ring-1 ring-fuchsia-100">
                    <div className="font-semibold">Claim Appeals</div>
                    <p className="mt-1 text-gray-600">We prepare strong appeals for denied claims.</p>
                  </div>
                  <div className="rounded-2xl p-4 bg-orange-50 ring-1 ring-orange-100">
                    <div className="font-semibold">Bill Reviews</div>
                    <p className="mt-1 text-gray-600">Spot errors, negotiate, and set payment plans.</p>
                  </div>
                  <div className="rounded-2xl p-4 bg-emerald-50 ring-1 ring-emerald-100">
                    <div className="font-semibold">Medi-Cal & Medicare</div>
                    <p className="mt-1 text-gray-600">Eligibility, applications, and follow-through.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Services */}
      <Section id="services" title="What We Do" subtitle="Practical, patient-first advocacy you can count on.">
        <div className="grid md:grid-cols-3 gap-6">
          <Service title="Insurance Paperwork Support" desc="From forms to EOBs, we translate the jargon and handle the steps so you don’t have to." icon={<Logo className="w-8 h-8" />} />
          <Service title="Claims & Denials Appeals" desc="We assemble documentation and build a clear case to challenge unfair denials." icon={<Logo className="w-8 h-8" />} />
          <Service title="Medical Bill Reviews" desc="We check for coding errors, double charges, and help you negotiate workable plans." icon={<Logo className="w-8 h-8" />} />
          <Service title="Medi-Cal & Medicare Navigation" desc="Eligibility checks, applications, renewals, and benefits coordination." icon={<Logo className="w-8 h-8" />} />
          <Service title="Provider Coordination" desc="Warm handoffs, referrals, pre-authorizations, and records requests." icon={<Logo className="w-8 h-8" />} />
          <Service title="Patient Rights Guidance" desc="Know your rights. We help file grievances and escalate when needed." icon={<Logo className="w-8 h-8" />} />
          <Service title="DME, Medication & Incontinence Supplies" desc="We assist with durable medical equipment (DME), medication coordination, and access to incontinence supplies by working directly with providers, pharmacies, and supply vendors." icon={<Logo className="w-8 h-8" />} />
          <Service title="Medical Transportation Assistance" desc="We help arrange and coordinate non-emergency medical transportation (NEMT), including rides to appointments, therapy, and pharmacy visits, working with health plans and transportation providers." icon={<Logo className="w-8 h-8" />} />
          <Service title="Mental Health & Substance Use Treatment Resources" desc="We help locate and connect clients with mental health facilities and substance use treatment programs, including detox, outpatient, and residential rehabilitation services, based on individual needs and coverage." icon={<Logo className="w-8 h-8" />} />
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="Why TruePath?" subtitle="Local. Compassionate. Relentless about getting you answers.">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <ul className="space-y-4">
            {[
              "Bay Area roots with a community-first approach",
              "Clear, plain-English explanations at every step",
              "Fast turnaround and proactive follow-ups",
              "Strict confidentiality and HIPAA-conscious workflows",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-3xl bg-white p-6 shadow ring-1 ring-gray-200">
            <h3 className="text-lg font-semibold">How it works</h3>
            <ol className="mt-3 space-y-3 text-gray-700 list-decimal list-inside">
              <li>Free 15-minute call to understand your situation.</li>
              <li>Sign a service agreement & confidentiality form.</li>
              <li>We gather documents and create your action plan.</li>
              <li>We execute the plan and keep you updated.</li>
            </ol>
          </div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" title="Simple Pricing" subtitle="Transparent options — pick what fits your needs.">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white shadow ring-1 ring-gray-200 p-6">
            <div className="text-sm font-semibold text-cyan-700">Starter</div>
            <div className="mt-1 text-3xl font-extrabold">$99</div>
            <p className="mt-2 text-gray-600">Flat benefit review: coverage check + action plan.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckIcon /> Coverage review</li>
              <li className="flex items-center gap-2"><CheckIcon /> 1 action plan</li>
              <li className="flex items-center gap-2"><CheckIcon /> 1 week email support</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-xl bg-gray-900 text-white px-4 py-2">Get Started</a>
          </div>

          <div className="rounded-2xl bg-white shadow-lg ring-2 ring-fuchsia-300 p-6">
            <div className="text-sm font-semibold text-fuchsia-700">Advocacy</div>
            <div className="mt-1 text-3xl font-extrabold">$65/hr</div>
            <p className="mt-2 text-gray-600">Hands-on navigation, paperwork, calls, and follow-ups.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckIcon /> Forms & submissions</li>
              <li className="flex items-center gap-2"><CheckIcon /> Provider coordination</li>
              <li className="flex items-center gap-2"><CheckIcon /> Weekly updates</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-xl bg-gray-900 text-white px-4 py-2">Book Time</a>
          </div>

          <div className="rounded-2xl bg-white shadow ring-1 ring-gray-200 p-6">
            <div className="text-sm font-semibold text-orange-700">Claim Appeal</div>
            <div className="mt-1 text-3xl font-extrabold">$250</div>
            <p className="mt-2 text-gray-600">One formal appeal: documentation, letter, submission.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckIcon /> Records + evidence</li>
              <li className="flex items-center gap-2"><CheckIcon /> Appeal letter</li>
              <li className="flex items-center gap-2"><CheckIcon /> Submission & follow-up</li>
            </ul>
            <a href="#contact" className="mt-6 inline-block rounded-xl bg-gray-900 text-white px-4 py-2">Start Appeal</a>
          </div>
        </div>
      </Section>

      {/* Donate */}
<Section
  id="donate"
  title="Donate"
  subtitle="Your support helps TruePath Advocates continue serving our community. Thank you."
>
  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

    {/* Venmo */}
    <div
      className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-white p-5 shadow-sm transition
      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/40
      min-h-[200px]"
    >
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-blue-600" aria-hidden="true">
          <path d="M19.8 4.8c.4.7.6 1.6.6 2.7 0 2.6-2.1 6.7-3.8 9.5h-4.6l-2.4-14h4l1.3 10.5c1.2-2 2.7-5.2 2.7-7.4 0-.9-.2-1.5-.4-2.1l3-1.2z" />
        </svg>
        <h3 className="text-lg font-semibold text-blue-700">Venmo</h3>
      </div>

      <p className="mt-2 text-[13px] text-blue-700/80">Quick & easy mobile payments</p>

      <a
        href="https://venmo.com/u/TruepathAdvocates"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm
        hover:bg-blue-700 hover:shadow transition"
      >
        Donate via Venmo
      </a>
    </div>

    {/* Cash App */}
    <div
      className="group relative overflow-hidden rounded-2xl border border-green-500/30 bg-black p-5 shadow-sm transition
      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30
      min-h-[200px]"
    >
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-green-400" aria-hidden="true">
          <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm.6 5.2c-1.4 0-2.4.8-2.8 2.1l-2 .6.5 1.7 1.8-.5c.2 1 .8 1.7 2 2l-.5 1.8 1.7.5.6-2c1.4 0 2.4-.8 2.8-2.1l2-.6-.5-1.7-1.8.5c-.2-1-.8-1.7-2-2l.5-1.8-1.7-.5-.6 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-green-300">Cash App</h3>
      </div>

      <p className="mt-2 text-[13px] text-green-200/80">Fast, simple donations</p>

      <a
        href="https://cash.app/$Truepathadvocates"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-black shadow-sm
        hover:bg-green-400 hover:shadow transition"
      >
        Donate via Cash App
      </a>
    </div>

    {/* Zelle */}
    <div
      className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-black p-5 shadow-sm transition
      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30
      min-h-[200px]"
    >
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-purple-400" aria-hidden="true">
          <path d="M4 6h16v3H9l11 9v3H4v-3h11L4 9V6z" />
        </svg>
        <h3 className="text-lg font-semibold text-purple-300">Zelle</h3>
      </div>

      <p className="mt-2 text-[13px] text-purple-200/80">Send directly from your bank</p>

      <p className="mt-3 text-sm font-semibold text-purple-100 break-words">
        {BUSINESS_EMAIL}
      </p>

      <button
        type="button"
        onClick={handleZelleCopy}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-purple-500/60 bg-purple-500/10
        px-4 py-2 text-sm font-semibold text-purple-100 shadow-sm
        hover:bg-purple-500/20 hover:shadow transition"
      >
        {zelleCopied ? "✅ Copied!" : "📋 Tap to Copy Zelle Email"}
      </button>

      <p className="mt-2 text-xs text-purple-200/70">
        If copy doesn’t work on some browsers, tap and hold the email to select/copy.
      </p>
    </div>

    {/* PayPal */}
    <div
      className="group relative overflow-hidden rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm transition
      hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/40
      min-h-[200px]"
    >
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-blue-700" aria-hidden="true">
          <path d="M7.5 20H5l2-14h6.5c4 0 6.5 1.7 6.5 5.2 0 4.2-3 6.8-7.7 6.8h-2L9.5 20z" />
        </svg>
        <h3 className="text-lg font-semibold text-blue-900">PayPal</h3>
      </div>

      <p className="mt-2 text-[13px] text-blue-900/70">Donate securely with PayPal</p>

      <a
        href="https://www.paypal.com/ncp/payment/HTZK4BJMG4CJJ"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm
        hover:bg-blue-800 hover:shadow transition"
      >
        Donate with PayPal
      </a>
    </div>

  </div>
</Section>


      {/* Contact */}
      <Section id="contact" title="Let’s Talk" subtitle="Fill this out and we’ll reach out within 1 business day.">
        <p className="mt-2 mb-6 text-sm text-gray-700">
          Prefer email instead?{" "}
          <a href={EMAIL_MAILTO} className="font-semibold underline underline-offset-4">
            {BUSINESS_EMAIL}
          </a>
        </p>

        <form
          action={FORM_ENDPOINT}
          method="POST"
          className="grid md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow ring-1 ring-gray-200"
        >
          {/* IMPORTANT: change this to your real domain after you go live */}
          <input type="hidden" name="_next" value="/thanks" />

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium">Full Name</label>
            <input id="name" name="name" required className="mt-1 rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required className="mt-1 rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="message" className="text-sm font-medium">How can we help?</label>
            <textarea id="message" name="message" rows={5} className="mt-1 rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>

          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
            <button type="submit" className="rounded-2xl bg-gray-900 text-white px-5 py-3 hover:-translate-y-0.5 transition">
              Send Message
            </button>
          </div>
        </form>
      </Section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="font-semibold">TruePath Advocates</span>
          </div>
          <nav className="flex gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} TruePath Advocates. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
