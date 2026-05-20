"use client"; 

import { useRef } from "react";
import Image from "next/image";
import { MonitorPlay, Tv, Film, Clapperboard, Gamepad2, Headphones, Video, ChevronLeft, ChevronRight } from "lucide-react"; // <-- Adicionei o ChevronLeft e ChevronRight

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    // Fundo geral da página 
    <main className="min-h-screen bg-white">
      
      {/* HEADER com Degradê */}
      <header className="w-full bg-gradient-to-r from-[#011ea6] from-0% to-[#00054f] to-[85%] text-white py-6 px-8 rounded-b-[2rem] md:rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Logo */}
          <div className="flex items-center">
            {/* <Image src="/images/logo.png" alt="FTNet Logo" width={150} height={50} className="object-contain" /> */}
            <span className="font-black text-3xl tracking-tighter">FT<span className="text-blue-400">NET.</span></span>
          </div>

          {/* Navegação  */}
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Quem Somos</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Planos</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Contato</a>
            <a href="#" className="hover:text-blue-300 transition-colors">Contrato</a>
          </nav>
        </div>
      </header>

      <section className="max-w-[95%] mx-auto flex flex-col md:flex-row items-center justify-between pl-8 gap-10">
        
        <div className="w-full md:w-1/2 space-y-2">
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-[1.1]">
            A Ftnet tem <br />
            a conexão <br />
            perfeita <br />
            para você.
          </h1>
          <p className="text-gray-600 text-lg max-w-md leading-relaxed">
            Internet 100% fibra óptica, com velocidade real, estabilidade total e suporte humano sempre você precisar.
          </p>
        </div>

        <div className="w-full md:w-60% flex justify-center md:justify-end">
          <div className="relative w-full aspect-[4/3] -mt-8 md:-mt-30 md:-mr-20">
            <Image 
              src="/images/hero-image.png"  
              alt="Atendente FTNet" 
              fill
              className="object-contain" 
              priority 
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-[2px] bg-blue-800 w-12"></div>
          <h2 className="text-blue-800 font-bold text-xl md:text-2xl tracking-tight">
            Planos com conteúdos exclusivos para você
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><MonitorPlay className="text-blue-600" size={32} /></div>
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><Gamepad2 className="text-green-600" size={32} /></div>
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><Tv className="text-red-600" size={32} /></div>
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><Film className="text-white" size={32} /></div>
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><Headphones className="text-purple-600" size={32} /></div>
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><Video className="text-emerald-600" size={32} /></div>
          <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform"><Clapperboard className="text-gray-300" size={32} /></div>
        </div>
      </section>

     {/* SESSÃO: POR QUE ESCOLHER A FTNET? */}
      <section className="relative w-full bg-gradient-to-r from-[#011ea6] from-0% to-[#00054f] to-[70%] mt-24 md:mt-32">
        
        <div className="absolute bottom-0 left-0 z-10 w-[260px] md:w-[420px] aspect-[8/10] pointer-events-none">
          <Image 
            src="/images/girl-selfie.png" 
            alt="Atendente FTNet Selfie" 
            fill 
            className="object-contain object-left-bottom pointer-events-auto"
            priority 
          />
          
         
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative">

          <div className="hidden md:block md:w-1/3 h-full pointer-events-none"></div>

          <div className="w-full md:w-2/3 py-10 px-8 flex flex-col items-center text-center space-y-6 z-10 md:ml-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Por que escolher a Ftnet?
            </h2>

            <div className="space-y-4 text-gray-200 text-base md:text-lg max-w-3xl font-light leading-relaxed">
              <p>
                Navegue, jogue e assista sem travamentos. Nossa conexão em fibra óptica entrega alta velocidade e desempenho constante, mesmo nos horários de pico.
              </p>
              <p>
                Chega de quedas e dor de cabeça. Com uma estrutura moderna, a FTNET oferece uma conexão segura e contínua, pra você não ficar na mão.
              </p>
              <p>
                A FTNET é da região e entende você. Estamos sempre por perto, oferecendo um serviço mais próximo, confiável e humano.
              </p>
            </div>

            <div className="mt-8 pt-4">
              {/* <Image src="/images/logo-branca.png" alt="FTNet Logo Branca" width={150} height={50} className="object-contain" /> */}
              <span className="font-black text-3xl tracking-tighter text-white drop-shadow-md">FT<span className="text-blue-400">NET.</span></span>
            </div>
          </div>

        </div>
      </section>

      {/* SESSÃO: PLANOS COM CONTEÚDOS (CARROSSEL) */}
      <section className="w-full max-w-7xl mx-auto py-20 px-4 md:px-8">
        
        <div className="flex justify-center mb-12">
          <h3 className="bg-[#011ea6] text-white px-8 py-2.5 rounded-full font-bold text-lg md:text-xl uppercase tracking-wide shadow-md">
            Planos com Conteúdos
          </h3>
        </div>

        <div className="relative w-full flex items-center justify-center group">
          
          <button 
            onClick={() => scroll("left")}
            className="absolute left-2 md:left-0 z-20 w-10 h-10 bg-[#011ea6] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div 
            ref={carouselRef} 
            className="flex overflow-x-auto gap-6 px-12 md:px-20 py-4 snap-x snap-mandatory w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="relative min-w-[280px] md:min-w-[340px] aspect-[1/1.5] snap-center shrink-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white"
              >
                <Image 
                  src={`/images/plano-${item}.png`} 
                  alt={`Plano ${item}`} 
                  fill 
                  className="object-cover" 
                />
                
                
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <button 
            onClick={() => scroll("right")}
            className="absolute right-2 md:right-0 z-20 w-10 h-10 bg-[#011ea6] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

        </div>
      </section>

    </main>
  );
}