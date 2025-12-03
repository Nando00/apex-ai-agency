"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import MyModel from "@/components/HexaModel";
import Navigation from "@/components/Navigation";
import RotatingText from "@/components/RotatingText";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterReveal from "@/components/FooterReveal";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Script from "next/script";

export default function Home() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const initVanta = () => {
      // Check if scripts are loaded and effect isn't already set
      if ((window as any).THREE && (window as any).VANTA && !vantaEffect) {
        try {
          setVantaEffect(
            (window as any).VANTA.DOTS({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0xadb5bd,
              color2: 0xadb5bd,
              backgroundColor: 0x212529,
              showLines: false
            })
          );
          // Clear interval once initialized
          if (intervalId) clearInterval(intervalId);
        } catch (error) {
          console.error("Vanta initialization error:", error);
        }
      }
    };

    // Poll every 100ms to check for scripts
    intervalId = setInterval(initVanta, 100);

    // Stop polling after 5 seconds to prevent infinite loop if scripts fail
    const timeoutId = setTimeout(() => {
      if (intervalId) clearInterval(intervalId);
    }, 5000);

    // Cleanup
    return () => {
      if (intervalId) clearInterval(intervalId);
      clearTimeout(timeoutId);
      if (vantaEffect) (vantaEffect as any).destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden"
    >
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.dots.min.js"
        strategy="afterInteractive"
      />
      {/* Navigation */}
      <Navigation />

      {/* Main Content Wrapper - Relative and Z-10 to cover the fixed footer */}
      <div className="relative z-10 bg-black">
        {/* Hero Section */}
        <section ref={vantaRef} className="relative h-screen w-full overflow-hidden">
          {/* 3D Canvas Background */}
          <div className="absolute -top-6 right-0 w-full md:w-3/5 h-full" style={{ touchAction: 'pan-y' }}>
            <Canvas camera={{ position: [1, 3.5, 4.5], fov: 50 }} shadows>
              {/* Ambient light for base illumination - very low for dark look */}
              <ambientLight intensity={0} color="#000000" />

              {/* Main Rim Light - Blue */}
              <spotLight
                position={[5, 5, -5]}
                intensity={20}
                angle={0.5}
                penumbra={1}
                color="#0000FF"
                castShadow
              />

              {/* Secondary Rim Light - Purple */}
              <spotLight
                position={[-5, 5, -5]}
                intensity={20}
                angle={0.5}
                penumbra={1}
                color="#FF00FF"
                castShadow
              />

              {/* Front Fill - Low intensity to keep face dark */}
              <directionalLight
                position={[0, 0, 5]}
                intensity={0.5}
                color="#ffffff"
              />



              <MyModel />
              <OrbitControls
                enableDamping
                dampingFactor={0.05}
                rotateSpeed={0.5}
                enableZoom={false}
              />

              {/* Bloom effect for subtle glow */}
              <EffectComposer>
                <Bloom
                  mipmapBlur
                  luminanceThreshold={1.2}
                  luminanceSmoothing={0.5}
                  intensity={0.3}
                  radius={0.4}
                />
              </EffectComposer>
            </Canvas>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full h-full pointer-events-none">

            {/* H1 Section - Aligned with Navigation */}
            <div className="relative lg:absolute lg:inset-0 flex items-center">
              <div className="w-full max-w-[90%] mx-auto px-8">
                <div className="w-full lg:w-1/2 pointer-events-auto pt-32 lg:pt-0">
                  <RotatingText />

                  {/* CTA Button */}
                  <div className="mt-8">
                    <button className="px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                      LEARN MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Section - Empty for now but keeping structure if needed for spacing or future use */}
            <div className="relative lg:absolute lg:inset-0 flex flex-col justify-end items-end pointer-events-none">
              <div className="w-full lg:w-1/2 p-8 lg:p-20 lg:pl-32 pointer-events-auto flex flex-col items-start lg:items-start">
              </div>
            </div>

          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* About Section */}
        <About />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />
      </div>

      {/* Footer Reveal Wrapper - Fixed at bottom, z-0 */}
      <FooterReveal>
        {/* Contact Section */}
        <Contact />

        {/* Footer Section */}
        <Footer />
      </FooterReveal>
    </div>
  );
}
