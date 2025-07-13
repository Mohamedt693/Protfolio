"use client"
import { useState, useEffect } from 'react';
import React, { Suspense, lazy } from 'react';
const About = lazy(() => import('@/components/About'));
const Contact = lazy(() => import('@/components/Contact'));
const Footer = lazy(() => import('@/components/Footer'));
const Header = lazy(() => import('@/components/Header'));
const Navbar = lazy(() => import('@/components/Navbar'));
const Skills = lazy(() => import('@/components/Skills'));
const Work = lazy(() => import('@/components/Work'));

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState("")

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light'
    }
  },[isDarkMode])


  return (
    <div>
    <Suspense fallback={null}>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
    </Suspense>
    <Suspense fallback={null}>
      <Header isDarkMode={isDarkMode}/>
    </Suspense>
    <Suspense fallback={null}>
      <About isDarkMode={isDarkMode}/>
    </Suspense>
    <Suspense fallback={null}>
      <Skills isDarkMode={isDarkMode}/>
    </Suspense>
    <Suspense fallback={null}>
      <Work isDarkMode={isDarkMode}/>
    </Suspense>
    <Suspense fallback={null}>
      <Contact isDarkMode={isDarkMode}/>
    </Suspense>
    <Suspense fallback={null}>
      <Footer isDarkMode={isDarkMode}/>
    </Suspense>
    </div>
  );
}
