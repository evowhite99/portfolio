"use client";
//import Image from "next/image";
//import PageTransition from "./components/PageTransition";
//import React, { Suspense, useState, useEffect } from "react";
//import dynamic from "next/dynamic";
//import { Canvas, useThree } from "@react-three/fiber";
import React, { useState, useEffect } from "react";

//import { OrbitControls, Environment } from "@react-three/drei";
import Footer from "./components/footer";
import Header from "./components/header";
import Presentation from "./components/presentation";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Tools from "./components/tools";
import Message from "./components/message";
import Background from "./components/background";

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [language, setLanguage] = useState("ES");
  const [isLoading, setIsLoading] = useState(true); // Estado para gestionar el estado de carga

  useEffect(() => {
    // Este efecto solo se ejecuta en el lado del cliente
    const storedLanguage = window.localStorage.getItem("language") || "ES";
    setLanguage(storedLanguage);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const offset = window.innerHeight / 4; // Ajusta este valor según el tamaño de tu viewport y las secciones

        if (
          rect.top <= window.innerHeight / 2 + offset &&
          rect.bottom >= window.innerHeight / 2 - offset &&
          sectionHeight > offset * 2 // Verifica que la sección tenga suficiente altura
        ) {
          current = index;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative z-10 flex min-h-screen flex-col">
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-blue-400 z-50">
          <div className="text-white text-2xl">Cargando...</div>
        </div>
      )}
      <Background currentSection={currentSection} setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <Header language={language} setLanguage={setLanguage} />
          <section>
            <Presentation language={language} />
          </section>
          <section>
            <AboutMe language={language} />
          </section>
          <section>
            <Projects language={language} />
          </section>
          <section>
            <Tools language={language} />
          </section>
          <section>
            <Message language={language} />
          </section>
          <Footer language={language} />
        </>
      )}
    </main>
  );
}
