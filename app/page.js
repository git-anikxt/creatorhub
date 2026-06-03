"use client";
import Link from "next/link";
import { ArrowRight, Heart, Users, TrendingUp, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
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

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight">
                Support creators
                <span className="gradient-text block mt-1">you believe in.</span>
              </h1>

              <p style={{color:'var(--color-text-muted)'}} className="text-lg mt-6 max-w-lg leading-relaxed">
                Help developers, designers, writers and makers bring their ideas to life — through direct, meaningful community support.
              </p>

              <div className="flex gap-3 mt-10 flex-wrap">
                <Link href="/login" className="btn-primary">
                  Start Creating
                  <ArrowRight size={16} />
                </Link>
                <Link href="/about" className="btn-ghost">
                  Learn More
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10">
                {[
                  { label: "Creators", value: "500+" },
                  { label: "Raised", value: "₹25L+" },
                  { label: "Supporters", value: "10K+" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white">{s.value}</div>
                    <div style={{color:'var(--color-text-faint)'}} className="text-xs mt-0.5 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="glass-card p-6 relative">
                <div style={{background:'rgba(99,102,241,0.06)',borderBottom:'1px solid var(--color-border)'}} className="flex items-center justify-between pb-5 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="avatar w-12 h-12 text-lg">A</div>
                    <div>
                      <div className="font-semibold text-white">Aniket Sharma</div>
                      <div style={{color:'var(--color-text-muted)'}} className="text-sm">Full Stack Developer</div>
                    </div>
                  </div>
                  <span className="badge">Active</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid var(--color-border)',borderRadius:'var(--radius-md)'}} className="p-4">
                    <div style={{color:'var(--color-text-muted)'}} className="text-xs uppercase tracking-widest mb-1">Raised</div>
                    <div className="text-2xl font-bold text-white">₹18,400</div>
                  </div>
                  <div style={{background:'rgba(255,255,255,0.03)',border:'1px solid var(--color-border)',borderRadius:'var(--radius-md)'}} className="p-4">
                    <div style={{color:'var(--color-text-muted)'}} className="text-xs uppercase tracking-widest mb-1">Supporters</div>
                    <div className="text-2xl font-bold text-white">128</div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span style={{color:'var(--color-text-muted)'}}>Goal Progress</span>
                    <span className="font-semibold" style={{color:'#a5b4fc'}}>63%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div className="progress-bar-fill" style={{width:'63%'}}></div>
                  </div>
                  <div className="flex justify-between text-xs mt-2" style={{color:'var(--color-text-faint)'}}>
                    <span>₹18,400 raised</span>
                    <span>Goal: ₹30,000</span>
                  </div>
                </div>

                <div className="flex gap-2 mt-5 pt-5" style={{borderTop:'1px solid var(--color-border)'}}>
                  <button className="btn-primary flex-1 justify-center" style={{fontSize:'0.85rem',padding:'0.5rem 1rem'}}>☕ Buy a Chai</button>
                  <button className="btn-ghost flex-1 justify-center" style={{fontSize:'0.85rem',padding:'0.5rem 1rem'}}>View Page</button>
                </div>
              </div>

              {/* Floating cards */}
              <div className="glass-card absolute -top-4 -right-4 px-4 py-3 flex items-center gap-2" style={{borderRadius:'var(--radius-lg)'}}>
                <Heart size={14} style={{color:'#f87171'}} />
                <span style={{fontSize:'0.8rem',color:'var(--color-text-muted)'}}>New support from <b style={{color:'white'}}>priya_dev</b></span>
              </div>
              <div className="glass-card absolute -bottom-4 -left-4 px-4 py-3 flex items-center gap-2" style={{borderRadius:'var(--radius-lg)'}}>
                <span style={{fontSize:'0.8rem',color:'var(--color-text-muted)'}}>₹250 from <b style={{color:'white'}}>rahul_codes</b></span>
                <span className="text-green-400 text-xs font-semibold">+₹250</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="badge mb-4 mx-auto" style={{display:'inline-flex'}}>Why CreatorHub</div>
            <h2 className="text-4xl font-bold tracking-tight">Everything creators need</h2>
            <p style={{color:'var(--color-text-muted)'}} className="text-lg mt-4 max-w-lg mx-auto">A simple, powerful platform built for the modern independent creator.</p>
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
                <p style={{color:'var(--color-text-muted)',fontSize:'0.9rem',lineHeight:'1.7'}}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{background:'var(--color-surface)',borderTop:'1px solid var(--color-border)',borderBottom:'1px solid var(--color-border)'}} className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Heart size={22} />, value: "₹25L+", label: "Funds Raised", sub: "across all creators" },
              { icon: <Users size={22} />, value: "10K+", label: "Supporters", sub: "active community" },
              { icon: <TrendingUp size={22} />, value: "500+", label: "Creators", sub: "and growing" },
            ].map((s) => (
              <div key={s.label} className="stat-card flex items-center gap-5">
                <div className="avatar w-12 h-12">{s.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-white">{s.value}</div>
                  <div className="font-medium mt-0.5">{s.label}</div>
                  <div style={{color:'var(--color-text-faint)',fontSize:'0.8rem'}}>{s.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="badge mb-3" style={{display:'inline-flex'}}>Community</div>
              <h2 className="text-4xl font-bold tracking-tight">Featured Creators</h2>
            </div>
            <Link href="/login" style={{color:'var(--color-primary)',fontSize:'0.9rem',fontWeight:500,display:'flex',alignItems:'center',gap:'0.35rem',textDecoration:'none'}}>View all <ArrowRight size={14} /></Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Aryan Mehta", role: "OSS Developer", raised: "₹22,000", supporters: 89 },
              { name: "Priya Singh", role: "UI/UX Designer", raised: "₹15,500", supporters: 64 },
              { name: "Rahul Das", role: "Content Creator", raised: "₹31,200", supporters: 142 },
            ].map((c, i) => (
              <div key={i} className="glass-card glass-card-hover p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="avatar w-12 h-12 text-lg">{c.name[0]}</div>
                  <div>
                    <div className="font-semibold text-white">{c.name}</div>
                    <div style={{color:'var(--color-text-muted)',fontSize:'0.85rem'}}>{c.role}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <span style={{color:'var(--color-text-muted)'}}>Raised</span>
                  <span className="font-semibold" style={{color:'#a5b4fc'}}>{c.raised}</span>
                </div>
                <div className="progress-bar-track mb-3">
                  <div className="progress-bar-fill" style={{width:`${Math.min((parseInt(c.raised.replace(/[^0-9]/g,''))/30000)*100,100)}%`}}></div>
                </div>
                <div style={{color:'var(--color-text-faint)',fontSize:'0.8rem'}}>{c.supporters} supporters</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding hero-mesh relative overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <div className="badge mb-6 mx-auto" style={{display:'inline-flex'}}>Get Started Today</div>
          <h2 className="text-5xl font-extrabold tracking-tight max-w-2xl mx-auto">
            Launch your creator journey
          </h2>
          <p style={{color:'var(--color-text-muted)'}} className="mt-5 text-lg max-w-lg mx-auto">
            Build your page, connect with supporters, and receive direct funding from your community.
          </p>
          <div className="flex gap-3 mt-10 justify-center flex-wrap">
            <Link href="/login" className="btn-primary" style={{padding:'0.8rem 2rem',fontSize:'1rem'}}>
              Create Your Page <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn-ghost" style={{padding:'0.8rem 2rem',fontSize:'1rem'}}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
