"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  MonitorPlay,
  Tv,
  Film,
  Clapperboard,
  Gamepad2,
  Headphones,
  Video,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  Camera,
} from "lucide-react";

export default function Home() {
  const carouselComConteudosRef = useRef<HTMLDivElement>(null);
  const carouselSemConteudosRef = useRef<HTMLDivElement>(null);

  const scroll = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right",
  ) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
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
            <span className="font-black text-3xl tracking-tighter">
              FT<span className="text-blue-400">NET.</span>
            </span>
          </div>

          {/* Navegação  */}
          <nav className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-300 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Quem Somos
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Planos
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Contato
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              Contrato
            </a>
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
            Internet 100% fibra óptica, com velocidade real, estabilidade total
            e suporte humano sempre você precisar.
          </p>
        </div>

        <div className="w-full md:w-60% flex justify-center md:justify-end">
          <div className="relative w-full aspect-[4/3] -mt-8 md:-mt-30 lg:-mt-12 md:-mr-20">
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
          <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <MonitorPlay className="text-blue-600" size={32} />
          </div>
          <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <Gamepad2 className="text-green-600" size={32} />
          </div>
          <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <Tv className="text-red-600" size={32} />
          </div>
          <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <Film className="text-white" size={32} />
          </div>
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <Headphones className="text-purple-600" size={32} />
          </div>
          <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <Video className="text-emerald-600" size={32} />
          </div>
          <div className="w-20 h-20 bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm hover:scale-105 transition-transform">
            <Clapperboard className="text-gray-300" size={32} />
          </div>
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
                Navegue, jogue e assista sem travamentos. Nossa conexão em fibra
                óptica entrega alta velocidade e desempenho constante, mesmo nos
                horários de pico.
              </p>
              <p>
                Chega de quedas e dor de cabeça. Com uma estrutura moderna, a
                FTNET oferece uma conexão segura e contínua, pra você não ficar
                na mão.
              </p>
              <p>
                A FTNET é da região e entende você. Estamos sempre por perto,
                oferecendo um serviço mais próximo, confiável e humano.
              </p>
            </div>

            <div className="mt-8 pt-4">
              {/* <Image src="/images/logo-branca.png" alt="FTNet Logo Branca" width={150} height={50} className="object-contain" /> */}
              <span className="font-black text-3xl tracking-tighter text-white drop-shadow-md">
                FT<span className="text-blue-400">NET.</span>
              </span>
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
            onClick={() => scroll(carouselComConteudosRef, "left")}
            className="absolute left-2 md:left-0 z-20 w-10 h-10 bg-[#011ea6] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={carouselComConteudosRef}
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
            onClick={() => scroll(carouselComConteudosRef, "right")}
            className="absolute right-2 md:right-0 z-20 w-10 h-10 bg-[#011ea6] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* SESSÃO: PLANOS SEM CONTEÚDOS (CARROSSEL 2) */}
      <section className="w-full max-w-7xl mx-auto py-10 px-4 md:px-8 mb-20">
        <div className="flex justify-center mb-12">
          <h3 className="bg-[#011ea6] text-white px-8 py-2.5 rounded-full font-bold text-lg md:text-xl uppercase tracking-wide shadow-md">
            Planos sem Conteúdos
          </h3>
        </div>

        <div className="relative w-full flex items-center justify-center group">
          <button
            onClick={() => scroll(carouselSemConteudosRef, "left")}
            className="absolute left-2 md:left-0 z-20 w-10 h-10 bg-[#011ea6] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={carouselSemConteudosRef}
            className="flex overflow-x-auto gap-6 px-12 md:px-20 py-4 snap-x snap-mandatory w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={`sem-conteudo-${item}`}
                className="relative min-w-[280px] md:min-w-[340px] aspect-[1/1.5] snap-center shrink-0 rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white"
              >
                <Image
                  src={`/images/plano-sem-${item}.png`}
                  alt={`Plano Sem Conteúdo ${item}`}
                  fill
                  className="object-cover"
                />

                <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 text-center p-4">
                  [plano-sem-{item}.png]
                  <br />
                  Descomente a Image
                </div>
              </div>
            ))}
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          <button
            onClick={() => scroll(carouselSemConteudosRef, "right")}
            className="absolute right-2 md:right-0 z-20 w-10 h-10 bg-[#011ea6] text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </section>

      {/* SESSÃO: SUPORTE TODOS OS DIAS */}
      <section className="relative w-full bg-gradient-to-r from-[#011ea6] from-0% to-[#00054f] to-[70%] mt-24 md:mt-32 mb-16">
        {/* Imagem do Técnico */}
        {/* absolute bottom-0 e left-0 cravam a imagem exatamente no canto inferior esquerdo */}
        <div className="absolute bottom-0 left-0 z-10 w-[240px] md:w-[450px] lg:w-[500px] pointer-events-none">
          <Image
            src="/images/tecnico.png"
            alt="Técnico FTNet"
            width={500}
            height={600}
            className="w-full h-auto object-left-bottom pointer-events-auto"
            priority
          />
        </div>

        {/* Grid de Conteúdo */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center relative z-10">
          {/* Espaçador invisível na esquerda pro texto não bater na imagem */}
          <div className="hidden md:block w-[40%] lg:w-[45%] h-full pointer-events-none"></div>

          {/* Textos */}
          {/* A REGRA AQUI É: Se a caixa azul estiver muito alta e cobrir a cabeça do técnico, diminua esse md:py-20 para md:py-12 ou md:py-8 */}
          <div className="w-full md:w-[60%] lg:w-[55%] pt-12 pb-[280px] md:py-12 px-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Com a FTNET <br className="hidden md:block" />
              você tem suporte <br className="hidden md:block" />
              todos os dias da <br className="hidden md:block" />
              semana.
            </h2>

            <div>
              {/* <Image src="/images/logo-branca.png" alt="FTNet Logo" width={120} height={40} className="object-contain" /> */}
              <span className="font-black text-2xl tracking-tighter text-white drop-shadow-md">
                FT<span className="text-blue-400">NET.</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SESSÃO: CANAIS DE ATENDIMENTO */}
      <section className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Título (Esquerda) */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-black leading-[1.1] tracking-tight">
            Outros canais <br className="hidden md:block" />
            de atendimento.
          </h2>
        </div>

        {/* Cards (Direita) */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-6">
          {/* Card 1: WhatsApp */}
          {/* Transformei em tag <a> para você já colocar os links de destino no href */}
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full sm:w-48 p-6 bg-white border border-gray-300 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer aspect-[4/5]"
          >
            <div className="w-24 h-24 bg-[#011ea6] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
              {/* SVG puro do WhatsApp */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </div>
            <span className="text-black font-extrabold text-center text-[15px] leading-tight">
              Autoatendimento <br /> no WhatsApp
            </span>
          </a>

          {/* Card 2: Instagram */}
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full sm:w-48 p-6 bg-white border border-gray-300 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer aspect-[4/5]"
          >
            <div className="w-24 h-24 bg-[#011ea6] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
              {/* Código SVG puro do Instagram */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </div>
            <span className="text-black font-extrabold text-center text-[15px] leading-tight">
              Nossas Redes <br /> Sociais
            </span>
          </a>
 //.
          {/* Card 3: Endereços */}
          <a
            href="#"
            className="flex flex-col items-center justify-center w-full sm:w-48 p-6 bg-white border border-gray-300 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer aspect-[4/5]"
          >
            <div className="w-24 h-24 bg-[#011ea6] rounded-full flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
              <MapPin size={44} strokeWidth={1.5} />
            </div>
            <span className="text-black font-extrabold text-center text-[15px] leading-tight">
              Nossos <br /> endereços
            </span>
          </a>
        </div>
      </section>

      {/* SESSÃO: FOOTER */}
      <footer className="w-full bg-[#011ea6] text-white py-16 px-8 mt-12 border-t border-blue-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Coluna 1: Logo e Sobre (Ocupa 1 parte do grid) */}
          <div className="md:col-span-1 flex flex-col space-y-6">
            {/* Logo */}
            <div>
              {/* <Image src="/images/logo-branca.png" alt="FTNet Logo" width={180} height={60} className="object-contain" /> */}
              <div className="font-black text-4xl tracking-tighter text-white leading-none">
                FT<span className="text-[#ff6600]">NET.</span>
                <br />
                <span className="text-xs font-normal tracking-[0.2em] text-white/80">
                  GRÁFICOS
                </span>
              </div>
              <p className="text-[10px] text-white/60 uppercase tracking-wider mt-1">
                Provedor de internet e serviços gráficos
              </p>
            </div>
            {/* Texto */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              A FTNET oferece internet rápida, estável e com atendimento de
              verdade. Conecte-se com qualidade, suporte ágil e uma empresa que
              está sempre perto de você.
            </p>
          </div>

          {/* Coluna 2: Navegação e Redes Sociais (Ocupa 1 parte do grid) */}
          <div className="md:col-span-1 flex flex-col space-y-10 md:pl-8">
            {/* Links */}
            <nav className="flex flex-col space-y-3 font-medium">
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors text-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors text-lg"
              >
                Quem Somos
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors text-lg"
              >
                Planos
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors text-lg"
              >
                Contato
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors text-lg"
              >
                Contrato
              </a>
            </nav>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              <span className="font-bold text-sm leading-tight uppercase">
                Siga-nos nas
                <br />
                redes sociais
              </span>
              <a
                href="#"
                className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center text-[#011ea6] hover:bg-cyan-300 hover:scale-110 transition-all shadow-md"
              >
                {/* SVG puro do Instagram com a cor azul escuro */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 3: Botão de Ação, Telefones e Endereços (Ocupa 2 partes do grid para ter mais espaço) */}
          <div className="md:col-span-2 flex flex-col items-center md:items-end space-y-8">
            {/* Botão */}
            <a
              href="#"
              className="bg-cyan-400 text-[#011ea6] font-bold text-lg px-8 py-3 rounded-full hover:bg-cyan-300 hover:-translate-y-1 transition-all shadow-lg w-full sm:w-auto text-center"
            >
              Fale com a gente!
            </a>

            {/* Grid de Telefones */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-end w-full">
              {/* Telefone 1 */}
              <div className="border border-cyan-400 rounded-full px-5 py-2 flex flex-col items-center justify-center min-w-[160px] bg-[#011ea6]">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  {/* SVG de Balão de WhatsApp cyan */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  (87) 98170-6368
                </div>
                <span className="text-[10px] text-cyan-400 mt-0.5 font-bold tracking-widest uppercase">
                  Sede
                </span>
              </div>

              {/* Telefone 2 */}
              <div className="border border-cyan-400 rounded-full px-5 py-2 flex flex-col items-center justify-center min-w-[160px] bg-[#011ea6]">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  (87) 98100-7971
                </div>
                <span className="text-[10px] text-cyan-400 mt-0.5 font-bold tracking-widest uppercase">
                  Loja
                </span>
              </div>

              {/* Telefone 3 */}
              <div className="border border-cyan-400 rounded-full px-5 py-2 flex flex-col items-center justify-center min-w-[160px] bg-[#011ea6]">
                <div className="flex items-center gap-2 text-sm font-bold text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  (87) 98112-2451
                </div>
                <span className="text-[10px] text-cyan-400 mt-0.5 font-bold tracking-widest uppercase">
                  Alto da Serra
                </span>
              </div>
            </div>

            {/* Endereços */}
            <div className="text-center md:text-right w-full pt-4">
              <p className="text-[10.5px] font-bold text-white leading-relaxed tracking-wider uppercase">
                END 1: RUA 21 DE ABRIL Nº 4 - CENTRO - SALOÁ / END 2: AVENIDA
                GETÚLIO VARGAS Nº 29 / <br className="hidden md:block" /> END
                03: VILA ALTO DA SERRA EM FRENTE A BR-423
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
