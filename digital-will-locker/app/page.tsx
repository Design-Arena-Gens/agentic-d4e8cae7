import {
  ArrowRight,
  BadgeCheck,
  FileLock2,
  FileText,
  LifeBuoy,
  Lock,
  Mail,
  Shield,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Encrypted Document Vault",
    description:
      "Bank-grade encryption keeps wills, directives, insurance files, and legacy media safely organized in one place.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Contact Controls",
    description:
      "Pre-approve the people who will receive access, define specific documents they can view, and set release conditions.",
    icon: Users,
  },
  {
    title: "Guided Executor Playbook",
    description:
      "Step-by-step instructions, contact lists, and timelines prepared in advance so your executor spends less time guessing.",
    icon: FileText,
  },
  {
    title: "Real-Time Activity Trails",
    description:
      "Transparent logs notify you whenever files are updated, shared, or viewed, keeping you in control at all times.",
    icon: BadgeCheck,
  },
];

const steps = [
  {
    title: "Collect & Upload",
    detail:
      "Digitize wills, trusts, insurance, financial account summaries, and personal messages. Smart templates help you fill gaps.",
  },
  {
    title: "Assign Access Rules",
    detail:
      "Select trusted contacts, define who gets what, and layer in approvals from your attorney, executor, or financial planner.",
  },
  {
    title: "Activate Legacy Mode",
    detail:
      "Choose release triggers like legal confirmation, keyholder approval, or time-delay verification to unlock the vault.",
  },
];

const safeguards = [
  {
    title: "Layered Encryption",
    detail: "AES-256 at rest, TLS 1.3 in transit, plus split-key decryption for your most sensitive files.",
    icon: Shield,
  },
  {
    title: "Zero-Knowledge Architecture",
    detail: "Your private data stays private—only you and your approved contacts can decrypt content.",
    icon: Lock,
  },
  {
    title: "Automated Integrity Checks",
    detail: "Daily integrity sweeps ensure files remain unaltered, with notarized hash history for legal confidence.",
    icon: FileLock2,
  },
  {
    title: "Emergency Support Team",
    detail: "Certified estate concierges guide executors 24/7 so loved ones never feel stuck.",
    icon: LifeBuoy,
  },
];

const faqs = [
  {
    question: "Is this legally recognized?",
    answer:
      "Your original signed documents stay valid. We complement them with digitized copies, notarized audit trails, and executor instructions to speed verification when the time comes.",
  },
  {
    question: "How do my contacts get access?",
    answer:
      "Each contact receives a secure credential only after your release triggers activate. You can route approval through your attorney or require multi-person confirmation before anything is unlocked.",
  },
  {
    question: "Can professionals collaborate?",
    answer:
      "Yes. Invite attorneys, fiduciaries, or advisors with granular permissions. Every action is logged and exportable for compliance.",
  },
  {
    question: "What if I need help organizing documents?",
    answer:
      "Our onboarding team provides white-glove digitization, categorization, and secure shredding services to ensure nothing is missed.",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_transparent_55%),radial-gradient(circle_at_bottom,_#0f172a_0%,_transparent_60%)]" />
      <div className="absolute inset-y-0 left-1/2 -z-10 h-[120vh] w-[80vw] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <header className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-24 md:flex-row md:items-center md:pt-28">
        <div className="md:w-3/5">
          <span className="inline-flex items-center rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-blue-200">
            Future-ready estate planning
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            Digital Will Locker that unlocks peace of mind and keeps legacies on track.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            Organize, protect, and orchestrate every document, instruction, and personal message. When the moment comes, your
            loved ones receive only what they need—securely, instantly, and without doubt.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
              href="#demo"
            >
              Request a private demo
              <ArrowRight className="ml-2 size-4" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
              href="#security"
            >
              Explore security
            </a>
          </div>
          <div className="mt-12 flex flex-col gap-3 text-sm text-slate-300 md:flex-row md:items-center">
            <div className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-emerald-300" />
              SOC 2 Type II monitored
            </div>
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-emerald-300" />
              Zero-knowledge vault architecture
            </div>
            <div className="flex items-center gap-2">
              <Users className="size-4 text-emerald-300" />
              Estate attorneys & fiduciaries approved
            </div>
          </div>
        </div>

        <div className="relative md:w-2/5">
          <div className="absolute -inset-8 rounded-3xl bg-blue-500/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Legacy Vault Snapshot</h2>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Trusted & Secure
              </span>
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center justify-between text-slate-200">
                  <span>Primary Will</span>
                  <span className="text-xs text-emerald-300">✓ Verified</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">Released to: Alex (Executor) upon attorney confirmation</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center justify-between text-slate-200">
                  <span>Healthcare Directive</span>
                  <span className="text-xs text-emerald-300">✓ Double-signed</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">Immediate access granted to: Dr. Patel & Taylor (Spouse)</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center justify-between text-slate-200">
                  <span>Legacy Messages</span>
                  <span className="text-xs text-blue-300">Scheduled</span>
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Time-release letters for family, unlocked 14 days after vault activation.
                </p>
              </div>
              <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4">
                <p className="text-xs uppercase tracking-wide text-blue-300">Status</p>
                <p className="mt-1 text-sm font-semibold text-white">Legacy Mode armed · 3 verifiers on file</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Designed for modern estate planning teams</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Build a single source of truth that keeps every instruction, credential, and contingency organized and ready when
              your loved ones need it most.
            </p>
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-blue-100"
          >
            Book onboarding session
            <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-transform hover:-translate-y-1"
            >
              <feature.icon className="size-10 text-blue-200 transition group-hover:text-blue-100" />
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{feature.description}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 opacity-0 transition group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Plan every release before it matters</h2>
            <p className="mt-4 text-slate-300">
              Configure Legacy Mode once, then update anytime life changes. Your executor receives a guided checklist, contacts,
              and resource library so they can focus on people—not paperwork.
            </p>
            <ol className="mt-10 space-y-6">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-6">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-500/20 text-lg font-semibold text-blue-100">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6">
              <p className="text-sm uppercase tracking-wide text-emerald-200">Trusted for complex estates</p>
              <p className="mt-3 text-2xl font-semibold text-white">Families in 42 states rely on Digital Will Locker</p>
              <p className="mt-4 text-sm text-emerald-100">
                Concierge onboarding for high-net-worth families, business continuity planning, and philanthropic directives.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-slate-200">Professional integrations</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <Shield className="size-4 text-slate-200" /> Attorney co-sign workflows with document attestation
                </li>
                <li className="flex items-center gap-2">
                  <Users className="size-4 text-slate-200" /> Family office dashboards with custom permissions
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="size-4 text-slate-200" /> Secure API for wealth platforms and trust administrators
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="security"
        className="mx-auto w-full max-w-6xl rounded-[3rem] border border-white/10 bg-gradient-to-br from-blue-600/30 via-slate-900 to-slate-900 px-6 py-20 sm:px-12"
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Security you can hand to your attorney</h2>
            <p className="mt-4 text-slate-200">
              Every safeguard is independently audited and deliberately transparent, so professional advisors can champion your
              plan without compromise.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-emerald-300" />
                Annual penetration testing by CREST-certified teams
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-emerald-300" />
                Tamper-evident audit ledger with time-synced notarization
              </p>
              <p className="flex items-center gap-2">
                <BadgeCheck className="size-4 text-emerald-300" />
                Immutable redundancy across geo-distributed vaults
              </p>
            </div>
          </div>
          <div className="grid flex-1 gap-6 md:grid-cols-2">
            {safeguards.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <item.icon className="size-9 text-blue-200" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">White-glove onboarding built around your family</h2>
            <p className="mt-4 text-slate-300">
              We pair you with a legacy specialist who helps digitize, categorize, and verify every document. Most households are
              fully set up within two weeks.
            </p>
            <form className="mt-8 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Full name"
                  type="text"
                  required
                />
                <input
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  placeholder="Email address"
                  type="email"
                  required
                />
              </div>
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="How can we support your planning?"
                type="text"
              />
              <button
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-200"
                type="submit"
              >
                Schedule consultation
                <ArrowRight className="size-4" />
              </button>
              <p className="text-xs text-slate-400">
                This is a secure inquiry form. Once submitted, our concierge team responds within one business day.
              </p>
            </form>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">Legacy readiness scorecard</h3>
              <p className="mt-3 text-sm text-slate-300">
                Receive a tailored report outlining which documents are complete, which need signatures, and how to close any
                compliance gaps.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-emerald-300" /> Executor readiness checklist
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-emerald-300" /> Tax & insurance coverage snapshot
                </li>
                <li className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-emerald-300" /> Secure message delivery timelines
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-xl font-semibold text-white">Direct line to your concierge</h3>
              <p className="mt-3 text-sm text-slate-300">
                Already working with an estate attorney or family office? We collaborate directly to lighten their workload.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                <p className="flex items-center gap-2">
                  <Mail className="size-4 text-blue-200" />
                  concierge@digitalwilllocker.com
                </p>
                <p className="flex items-center gap-2">
                  <Users className="size-4 text-blue-200" />
                  Virtual workshops for multi-generational families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Frequently asked questions</h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-white">
                  {faq.question}
                  <ArrowRight className="size-4 transition group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Digital Will Locker. Purpose-built for legacy planning.</p>
          <div className="flex flex-wrap gap-4 text-slate-300">
            <a href="#features">Platform</a>
            <a href="#security">Security</a>
            <a href="#demo">Onboarding</a>
            <a href="mailto:privacy@digitalwilllocker.com">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
