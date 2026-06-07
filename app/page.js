"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ArrowRight, Heart, Users, TrendingUp, Zap, Shield, Globe, GitBranch, UserRound } from "lucide-react";

const founders = [
  {
    name: "Aniket Sharma",
    role: "Full Stack Developer",
    badge: "Founder",
    avatar: "A",
    username: "aniketsharma",
    github: "https://github.com/aniketsharma",
    linkedin: "https://linkedin.com/in/anikxtsharma",
    about:
      "Building AI workflow automations, modern web applications, creator tools, and intuitive user experiences. Passionate about full-stack development, automation, and product design.",
  },
  {
    name: "Deep Singh",
    role: "Full Stack Developer",
    badge: "Founder",
    avatar: "D",
    username: "deepsingh7505",
    github: "https://github.com/deepsingh7505",
    linkedin: "https://linkedin.com/in/deepsingh7505",
    about:
      "Building scalable full-stack applications with Next.js, React, and modern web technologies. Focused on creating performant products, clean architectures, and developer-friendly solutions.",
  },
];



export default function Home() {
  const { data: session } = useSession();
  const [activeFounderIndex, setActiveFounderIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const activeFounder = founders[activeFounderIndex];

  useEffect(() => {
    if (isCarouselPaused) return;

    const interval = setInterval(() => {
      setActiveFounderIndex((currentIndex) => (currentIndex + 1) % founders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  return (
    <>
      {/* Hero */}
      <section className="hero-mesh dot-grid relative overflow-hidden section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative z-10">
              <div className="badge mb-6">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                Creator Funding Platform
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Support creators
                <span className="gradient-text block mt-1">you believe in.</span>
              </h1>

              <p style={{ color: 'var(--color-text-muted)' }} className="text-lg mt-6 max-w-lg leading-relaxed">
                Help developers, designers, writers and makers bring their ideas to life — through direct, meaningful community support.
              </p>

              <div className="flex gap-3 mt-10 flex-wrap">
                <Link
                  href={session ? "/dashboard" : "/login"}
                  className="btn-primary"
                >
                  {session ? "Go To Dashboard" : "Become a Creator"}
                  <ArrowRight size={16} />
                </Link>

                <Link href="/about" className="btn-ghost">
                  Learn More
                </Link>
              </div>
</div>
<div className="relative z-10">
  <div
    className="glass-card glass-card-hover p-6"
    onMouseEnter={() => setIsCarouselPaused(true)}
    onMouseLeave={() => setIsCarouselPaused(false)}
    style={{
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
    }}
  >
    <div key={activeFounder.name} className="founder-spotlight-slide">
      {/* Header */}
      <div
        className="flex items-center justify-between gap-4 mb-6"
        style={{
          padding: "1rem",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid var(--color-border)",
        }}
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="avatar w-12 h-12 text-lg">
            {activeFounder.avatar}
          </div>

          <div className="min-w-0">
            <h3
              className="font-semibold truncate"
              style={{
                color: "white",
                fontSize: "1.15rem",
                lineHeight: 1.2,
              }}
            >
              {activeFounder.name}
            </h3>

            <p
              className="truncate"
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9rem",
              }}
            >
              {activeFounder.role}
            </p>
          </div>
        </div>

        <span className="badge">
          {activeFounder.badge}
        </span>
      </div>

      {/* Connect With Me */}
      <div className="mb-4">
        <p
          style={{
            color: "var(--color-text-muted)",
            marginBottom: "0.6rem",
            fontSize: "0.9rem",
          }}
        >
          Connect With Me
        </p>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          style={{
            padding: "1rem",
            borderRadius: "14px",
            border: "1px solid var(--color-border)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          <Link
            href={activeFounder.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost founder-social-link justify-center w-full"
            style={{
              borderRadius: "12px",
              padding: "0.78rem 1rem",
              background: "rgba(255,255,255,0.035)",
              color: "white",
              fontWeight: "600",
            }}
          >
            <GitBranch size={17} />
            GitHub
          </Link>

          <Link
            href={activeFounder.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost founder-social-link justify-center w-full"
            style={{
              borderRadius: "12px",
              padding: "0.78rem 1rem",
              background: "rgba(255,255,255,0.035)",
              color: "white",
              fontWeight: "600",
            }}
          >
            <UserRound size={17} />
            LinkedIn
          </Link>
        </div>
      </div>

      {/* About */}
      <div className="mb-5">
        <p
          style={{
            color: "var(--color-text-muted)",
            marginBottom: "0.6rem",
            fontSize: "0.9rem",
          }}
        >
          About
        </p>

        <div
          style={{
            minHeight: "8.6rem",
            padding: "1rem",
            borderRadius: "14px",
            border: "1px solid var(--color-border)",
            background: "rgba(255,255,255,0.02)",
            color: "white",
            lineHeight: "1.7",
          }}
        >
          {activeFounder.about}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={`/${activeFounder.username}`}
          className="btn-primary flex-1 justify-center"
          style={{
            borderRadius: "14px",
            padding: "0.8rem",
            textDecoration: "none",
          }}
        >
          Support Creator
        </Link>

        <Link
          href={`/${activeFounder.username}`}
          className="btn-ghost flex-1 justify-center"
          style={{
            borderRadius: "14px",
            padding: "0.8rem",
            textDecoration: "none",
          }}
        >
          View Page
        </Link>
      </div>
    </div>

    <div className="flex items-center justify-center gap-2 mt-5">
      {founders.map((founder, index) => (
        <button
          key={founder.name}
          type="button"
          aria-label={`Show ${founder.name}`}
          aria-current={index === activeFounderIndex}
          onClick={() => setActiveFounderIndex(index)}
          className="founder-dot"
          style={{
            width: index === activeFounderIndex ? "1.35rem" : "0.55rem",
            height: "0.55rem",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            background:
              index === activeFounderIndex
                ? "linear-gradient(135deg, var(--color-primary), #a78bfa)"
                : "rgba(255,255,255,0.22)",
            boxShadow:
              index === activeFounderIndex
                ? "0 0 16px var(--color-primary-glow)"
                : "none",
            transition: "all var(--transition)",
          }}
        />
      ))}
    </div>
  </div>
</div>
</div> 
</div> 
</section>                               
      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>Why FundFlow</div>
            <h2 className="text-4xl font-bold tracking-tight">Everything creators need</h2>
            <p style={{ color: 'var(--color-text-muted)' }} className="text-lg mt-4 max-w-lg mx-auto">A simple, powerful platform built for the modern independent creator.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: <Zap size={20} />, title: "Instant Payments", desc: "Receive funds directly to your Razorpay account with zero delays and full transparency." },
              { icon: <Shield size={20} />, title: "Secure & Trusted", desc: "Bank-grade encryption and trusted payment infrastructure protect every transaction." },
              { icon: <Globe size={20} />, title: "Your Own Page", desc: "A dedicated creator page with your bio, goal tracking, and supporter wall." },
            ].map((f) => (
              <div key={f.title} className="glass-card glass-card-hover p-7">
                <div className="avatar w-10 h-10 text-sm mb-4">{f.icon}</div>
                <h3 className="font-semibold text-white text-lg mb-2">{f.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: '1.7' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Benefits */}
      <section style={{ paddingBottom: "4rem" }}>
        <div className="container-custom">

          <div className="grid md:grid-cols-3 gap-5">

            <div className="glass-card glass-card-hover p-7">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Launch Your Creator Page
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.7",
                }}
              >
                Create your personal support page in minutes and start receiving contributions.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-7">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Accept Payments Securely
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.7",
                }}
              >
                Powered by Razorpay for fast and reliable transactions across India.
              </p>
            </div>

            <div className="glass-card glass-card-hover p-7">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="font-semibold text-white text-xl mb-3">
                Share Once, Get Supported
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  lineHeight: "1.7",
                }}
              >
                Send your unique FundFlow link to your audience and receive direct support.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Social Proof & Trust */}
      <section className="section-padding" style={{background:'linear-gradient(135deg,rgba(99,102,241,0.05),rgba(192,132,252,0.03))'}}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge mb-4 mx-auto" style={{ display: 'inline-flex' }}>Trusted by Creators</div>
            <h2 className="text-4xl font-bold tracking-tight">Join creators worldwide</h2>
            <p style={{ color: 'var(--color-text-muted)' }} className="text-lg mt-4 max-w-lg mx-auto">Real creators, real support, real impact.</p>
          </div>

          {/* Product Benefits */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: '👤', title: 'Creator Profiles', desc: 'Build your unique profile and showcase your work' },
              { icon: '🎯', title: 'Funding Goals', desc: 'Set and track your funding objectives' },
              { icon: '💌', title: 'Community Support', desc: 'Receive direct support from your audience' },
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div style={{fontSize:'2.5rem',marginBottom:'0.75rem'}}>{item.icon}</div>
                <h3 style={{fontSize:'1rem',fontWeight:700,color:'var(--color-text)',marginBottom:'0.4rem'}}>{item.title}</h3>
                <p style={{fontSize:'0.85rem',color:'var(--color-text-muted)',lineHeight:'1.6'}}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: '🔒', title: 'Secure Payments', desc: 'Bank-grade encryption with Razorpay' },
              { icon: '⚡', title: 'Instant Payouts', desc: 'Receive funds directly to your account' },
              { icon: '📊', title: 'Transparent Contributions', desc: 'Complete visibility over all transactions' },
            ].map((item, i) => (
              <div key={i} style={{padding:'1.5rem',borderRadius:'var(--radius-lg)',background:'rgba(255,255,255,0.02)',border:'1px solid var(--color-border)',textAlign:'center'}}>
                <div style={{fontSize:'2rem',marginBottom:'0.75rem'}}>{item.icon}</div>
                <h3 style={{fontWeight:600,color:'var(--color-text)',marginBottom:'0.4rem'}}>{item.title}</h3>
                <p style={{fontSize:'0.85rem',color:'var(--color-text-muted)'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">

          <div className="text-center mb-12">
            <div className="badge mb-4">
              How It Works
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold">
              Start receiving support in 3 steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">

            <div className="glass-card p-7">
              <div className="text-5xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-3">
                Create Your Page
              </h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Set up your profile, bio and funding goal.
              </p>
            </div>

            <div className="glass-card p-7">
              <div className="text-5xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-3">
                Share Your Link
              </h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Share your FundFlow page with your audience.
              </p>
            </div>

            <div className="glass-card p-7">
              <div className="text-5xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-3">
                Receive Support
              </h3>
              <p style={{ color: "var(--color-text-muted)" }}>
                Receive contributions securely through Razorpay.
              </p>
            </div>

          </div>

        </div>
      </section>
      <section className="section-padding">
        <div className="container-custom">

          <div className="glass-card p-8">

            <h2 className="text-3xl font-bold mb-6">
              🛡️ Secure & Trusted
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div>✓ Secure payments powered by Razorpay</div>
              <div>✓ Direct creator payouts</div>
              <div>✓ Transparent supporter contributions</div>
              <div>✓ No complicated setup</div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-mesh relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="badge mb-6 mx-auto" style={{ display: 'inline-flex' }}>Get Started Today</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Launch your creator journey
          </h2>
          <p style={{ color: 'var(--color-text-muted)' }} className="mt-5 text-base sm:text-lg max-w-lg mx-auto">
            Build your page, connect with supporters, and receive direct funding from your community.
          </p>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <Link href="/login" className="btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '0.95rem' }}>
              Create Your Page <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn-ghost" style={{ padding: '0.8rem 2rem', fontSize: '0.95rem' }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .founder-spotlight-slide {
          animation: founderSpotlightIn 420ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .founder-social-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
        }

        .founder-dot:hover {
          background: rgba(255, 255, 255, 0.36) !important;
          transform: translateY(-1px);
        }

        @keyframes founderSpotlightIn {
          from {
            opacity: 0;
            transform: translateX(18px) scale(0.985);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .founder-spotlight-slide {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
