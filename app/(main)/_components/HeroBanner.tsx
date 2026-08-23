"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Truck, Gem, ArrowUpRight } from "lucide-react";

const HeroBanner: React.FC = () => {
  return (
    <section className="w-full mt-4 lg:mt-8 select-none" aria-label="Hero Showcase">
      {/* ── Main Hero Card ── */}
      <div className="relative w-full rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl border border-neutral-800/80 min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] flex items-center">
        
        {/* ── Background Image Layer with Luxury Editorial Visual ── */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero-luxury-editorial.jpg"
            alt="Luxe Exclusive Haute Couture & Modern Luxury Collection"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[center_35%] lg:object-[center_30%] scale-100 transition-transform duration-1000 ease-out hover:scale-105"
          />
          
          {/* Subtle multi-layer gradients for optimal contrast and elegance */}
          {/* Left-to-right gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-neutral-950/20 lg:via-neutral-950/60 lg:to-transparent z-10" />
          
          {/* Bottom-to-top gradient for footer badge blend */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-neutral-950/30 z-10" />
        </div>

        {/* ── Content Container ── */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          
          {/* ── Left Column: Editorial Copy & CTAs ── */}
          <div className="max-w-2xl space-y-6 sm:space-y-8">
            
            {/* Exclusive Season Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-xs font-medium tracking-[0.18em] uppercase text-emerald-300">
                New Season 2026 • Exclusive Curation
              </span>
            </div>

            {/* Main Luxury Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.12] tracking-tight">
                Redefining{" "}
                <span className="font-serif italic font-normal text-emerald-300">
                  Timeless
                </span>{" "}
                <br className="hidden sm:inline" />
                Elegance & Distinction
              </h1>
              
              <p className="text-sm sm:text-base text-neutral-300/90 font-light leading-relaxed max-w-lg pt-2">
                Discover a transcendent collection of haute couture, artisanal accessories, and bespoke essentials crafted for the discerning modern connoisseur.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              {/* Primary CTA */}
              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-white text-neutral-950 font-medium text-sm sm:text-base transition-all duration-300 hover:bg-emerald-300 hover:text-neutral-950 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98]"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all duration-300 active:scale-[0.98]"
              >
                <span>View Lookbook</span>
                <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Trust Points Mini Row */}
            <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-5 sm:gap-8 text-neutral-300 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Certified Authentic</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Complimentary VIP Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-emerald-400" />
                <span>Artisanal Craftsmanship</span>
              </div>
            </div>

          </div>

          {/* ── Right Column: Floating Luxury Spotlight Card ── */}
          <div className="hidden lg:flex flex-col items-end">
            <div className="group relative w-72 rounded-2xl bg-neutral-950/60 backdrop-blur-xl border border-white/15 p-5 shadow-2xl transition-all duration-500 hover:border-emerald-500/40 hover:bg-neutral-950/75">
              
              {/* Top Row: Tag & Status */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-white/10">
                <span className="font-mono uppercase tracking-widest text-[11px] text-emerald-400">Featured Piece</span>
                <span className="flex items-center gap-1.5 text-neutral-300 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Limited Atelier
                </span>
              </div>

              {/* Card Body */}
              <div className="mt-3.5 space-y-1.5">
                <h2 className="text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  Emerald Silk Pleated Ensemble
                </h2>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Tailored wool blazer with emerald pleated evening gown & brass detailing.
                </p>
              </div>

              {/* Rating & Action Row */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center text-amber-400 text-xs">
                    {"★".repeat(5)}
                    <span className="ml-1 text-white font-medium text-xs">4.9</span>
                  </div>
                  <span className="text-[10px] text-neutral-400">Curated Atelier Piece</span>
                </div>
                
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs font-medium text-white group-hover:text-emerald-300 underline underline-offset-4 decoration-emerald-400/50 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* ── Bottom Luxury Editorial Highlights Bar ── */}
        <div className="absolute bottom-0 inset-x-0 z-20 hidden md:grid grid-cols-3 border-t border-white/10 bg-neutral-950/70 backdrop-blur-md text-white text-xs divide-x divide-white/10">
          <div className="py-3.5 px-6 sm:px-10 flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-[11px] font-semibold">01</span>
            <div>
              <p className="font-medium tracking-wide">CURATED ATELIERS</p>
              <p className="text-[11px] text-neutral-400">Handpicked global luxury houses</p>
            </div>
          </div>
          <div className="py-3.5 px-6 sm:px-10 flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-[11px] font-semibold">02</span>
            <div>
              <p className="font-medium tracking-wide">WHITE-GLOVE CONCIERGE</p>
              <p className="text-[11px] text-neutral-400">24/7 personal styling & VIP support</p>
            </div>
          </div>
          <div className="py-3.5 px-6 sm:px-10 flex items-center gap-3">
            <span className="font-mono text-emerald-400 text-[11px] font-semibold">03</span>
            <div>
              <p className="font-medium tracking-wide">CERTIFIED PROVENANCE</p>
              <p className="text-[11px] text-neutral-400">Lifetime guarantee of authentic craft</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroBanner;