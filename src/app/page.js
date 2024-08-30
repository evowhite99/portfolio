"use client";
//import Image from "next/image";
//import PageTransition from "./components/PageTransition";
//import React, { Suspense, useState, useEffect } from "react";
//import dynamic from "next/dynamic";
//import { Canvas, useThree } from "@react-three/fiber";
import { throttle } from "lodash";
import React, { useState, useEffect, lazy, Suspense } from "react";

//import { OrbitControls, Environment } from "@react-three/drei";
import Footer from "./components/footer";
import Header from "./components/header";
import Presentation from "./components/presentation";
import AboutMe from "./components/aboutMe";
import Background from "./components/background";

const Projects = lazy(() => import("./components/projects"));
const Tools = lazy(() => import("./components/tools"));
const Message = lazy(() => import("./components/message"));

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [language, setLanguage] = useState("ES");
  const [isLoading, setIsLoading] = useState(true); // Estado para gestionar el estado de carga

  useEffect(() => {
    // Este efecto solo se ejecuta en el lado del cliente
    const storedLanguage = window.localStorage.getItem("language") || "ES";
    setLanguage(storedLanguage);

    window.scrollTo(0, 0);

    // Simula un tiempo de carga mínimo para la pantalla de "Cargando..."
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 0); // Reduce este tiempo si es posible

    const handleScroll = throttle(() => {
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

        if (rect.top <= window.innerHeight - offset && rect.bottom >= offset) {
          section.classList.add("show");
        } else {
          section.classList.remove("show");
        }
      });

      setCurrentSection(current);
    }, 0); // Ajusta el tiempo según sea necesario

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout); // Limpia el timeout

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="relative z-10 flex min-h-screen flex-col">
      <>
        <Background
          currentSection={currentSection}
          setIsLoading={setIsLoading}
        />
        <Header language={language} setLanguage={setLanguage} />
        <section className="lg:py-0 pt-64">
          <Presentation language={language} />
        </section>
        <section className="fade-in-left">
          <AboutMe language={language} />
        </section>
        <Suspense fallback={null}>
          <section className="fade-in-left">
            <Projects language={language} />
          </section>
        </Suspense>
        <Suspense fallback={null}>
          <section className="fade-in-left">
            <Tools language={language} />
          </section>
        </Suspense>
        <Suspense fallback={null}>
          <section className="fade-in-left">
            <Message language={language} />
          </section>
        </Suspense>
        <Footer language={language} />
      </>
    </main>
  );
}
