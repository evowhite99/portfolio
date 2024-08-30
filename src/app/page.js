"use client";

import React, { useState, useEffect, useMemo, lazy, Suspense } from "react";

import Footer from "./components/footer";
import Header from "./components/header";
import Presentation from "./components/presentation";
import Background from "./components/background";

const AboutMe = lazy(() => import("./components/aboutMe"));
const Projects = lazy(() => import("./components/projects"));
const Tools = lazy(() => import("./components/tools"));
const Message = lazy(() => import("./components/message"));

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [language, setLanguage] = useState("ES"); // Inicializa con "ES" por defecto
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Este código solo se ejecuta en el cliente
    const storedLanguage = window.localStorage.getItem("language") || "ES";
    setLanguage(storedLanguage);

    window.scrollTo(0, 0);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const offset = window.innerHeight / 4;

        if (
          rect.top <= window.innerHeight / 2 + offset &&
          rect.bottom >= window.innerHeight / 2 - offset &&
          sectionHeight > offset * 2
        ) {
          current = index;
        }

        if (rect.top <= window.innerHeight - offset && rect.bottom >= offset) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez en el cliente

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
          <section className="lg:py-0 pt-64 ">
            <Presentation language={language} />
          </section>
          <Suspense fallback={<div>Cargando sección...</div>}>
            <section className="fade-in-left">
              <AboutMe language={language} />
            </section>
            <section className="fade-in-left">
              <Projects language={language} />
            </section>
            <section className="fade-in-left">
              <Tools language={language} />
            </section>
            <section className="fade-in-left">
              <Message language={language} />
            </section>
          </Suspense>
          <Footer language={language} />
        </>
      )}
    </main>
  );
}
