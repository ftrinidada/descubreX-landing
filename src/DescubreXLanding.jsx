import { useState, useEffect } from "react";

export default function DescubreXLanding() {
  const logoSrc = "/assets/app_icon.png";

  const screenshots = [
    "/assets/0.png",
    "/assets/1.png",
    "/assets/2.png",
    "/assets/3.png",
    "/assets/4.png",
    "/assets/5.png",
    "/assets/6.png",
    "/assets/7.png",
  ];

  const [idx, setIdx] = useState(0);

  // Pre-carga screenshots
  useEffect(() => {
    screenshots.forEach((src) => {
      const i = new Image();
      i.src = src;
    });
  }, []);

  // Carrusel automático
  useEffect(() => {
    if (!screenshots?.length) return;
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % screenshots.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const menu = [
    "/assets/menu_turismo.png",
    "/assets/menu_negocios.png",
    "/assets/menu_emergecia.png",
  ];

  const contact = {
    email: "contacto@descubrex.com",
    phone: "+525549616019",
    phoneDisplay: "55 4961 6019",
    facebook: "https://www.facebook.com/profile.php?id=100063642292282",
    instagram:
      "https://www.instagram.com/descubrex.mx?igsh=MWFhY3pyNzQzMmRqZw%3D%3D&utm_source=qr",
  };

  // Links de tiendas (vacíos por ahora)
  const playStoreUrl = "";
  const appStoreUrl = "";

  // Scroll suave a secciones internas
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="DescubreX"
              className="w-8 h-8 rounded-lg object-contain"
            />
            <span className="font-semibold tracking-wide text-[#EB376A]">
              DescubreX
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
            {/* Scroll interno */}
            <button
              type="button"
              onClick={() => scrollToSection("turismo")}
              className="hover:text-[#EB376A]"
            >
              Turismo
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("negocios")}
              className="hover:text-[#EB376A]"
            >
              Negocios
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("emergencias")}
              className="hover:text-[#EB376A]"
            >
              Emergencias
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="hover:text-[#EB376A]"
            >
              Contacto
            </button>
            {/* Rutas HashRouter para páginas legales */}
            <a href="#/privacidad" className="hover:text-[#EB376A]">
              Privacidad
            </a>
            <a href="#/terminos" className="hover:text-[#EB376A]">
              Términos
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            <span className="text-[#EB376A]">Descubre México</span>{" "}
            <span className="text-white">por estado y municipio</span>
          </h1>
          <p className="mt-5 text-neutral-300 text-lg">
            Una app enfocada para descubrir el <strong>Turismo</strong>,{" "}
            <strong>Negocios y servicios locales</strong> como también números de{" "}
            <strong>Emergencia</strong> por estado y municipio.
          </p>

          {/* Badges tiendas */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            {/* Google Play */}
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 hover:border-[#EB376A] transition-all bg-black px-3 py-2"
              style={{ minWidth: "160px", height: "65px" }}
            >
              <img
                src="/assets/google-play-badge.png"
                alt="Disponible en Google Play"
                className="w-[165px] h-[65px] object-contain"
              />
            </a>

            {/* App Store */}
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 hover:border-[#EB376A] transition-all bg-black px-3 py-2"
              style={{ minWidth: "160px", height: "65px" }}
            >
              <img
                src="/assets/app-store-badge.png"
                alt="Disponible en App Store"
                className="w-[160px] h-[42px] object-contain"
              />
            </a>
          </div>
        </div>

        {/* Slider screenshots */}
        <div className="relative">
          <div className="aspect-[9/19.5] w-full max-w-sm mx-auto rounded-[2rem] border border-white/10 p-2 bg-neutral-900/40 overflow-hidden">
            <img
              key={idx}
              src={screenshots[idx]}
              alt={`App preview ${idx + 1}`}
              className="w-full h-full object-cover rounded-[1.5rem] transition-opacity duration-500 ease-in-out opacity-100"
              onError={(e) => {
                e.currentTarget.src = "/assets/app_icon.png";
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Secciones de la app
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* TURISMO */}
          <div
            id="turismo"
            className="scroll-mt-28 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-[#EB376A] transition text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={menu[0]}
                alt="Turismo"
                className="w-14 h-14 object-contain filter"
                style={{
                  filter:
                    "invert(38%) sepia(87%) saturate(2600%) hue-rotate(320deg) brightness(97%) contrast(95%)",
                }}
                onError={(e) =>
                  (e.currentTarget.src = "/assets/app_icon.png")
                }
              />
            </div>
            <h3 className="font-semibold mb-2">Turismo</h3>
            <p className="text-neutral-300 text-sm">
              Descubre lugares turísticos por estado y municipio.
            </p>
          </div>

          {/* NEGOCIOS */}
          <div
            id="negocios"
            className="scroll-mt-28 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-[#EB376A] transition text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={menu[1]}
                alt="Negocios"
                className="w-14 h-14 object-contain filter"
                style={{
                  filter:
                    "invert(38%) sepia(87%) saturate(2600%) hue-rotate(320deg) brightness(97%) contrast(95%)",
                }}
                onError={(e) =>
                  (e.currentTarget.src = "/assets/app_icon.png")
                }
              />
            </div>
            <h3 className="font-semibold mb-2">Negocios</h3>
            <p className="text-neutral-300 text-sm">
              Negocios y servicios locales: tianguis, comida, belleza,
              mantenimiento y más.
            </p>
          </div>

          {/* EMERGENCIAS */}
          <div
            id="emergencias"
            className="scroll-mt-28 rounded-2xl border border-white/10 bg-neutral-900/40 p-6 hover:border-[#EB376A] transition text-center"
          >
            <div className="flex justify-center mb-4">
              <img
                src={menu[2]}
                alt="Emergencias"
                className="w-14 h-14 object-contain filter"
                style={{
                  filter:
                    "invert(38%) sepia(87%) saturate(2600%) hue-rotate(320deg) brightness(97%) contrast(95%)",
                }}
                onError={(e) =>
                  (e.currentTarget.src = "/assets/app_icon.png")
                }
              />
            </div>
            <h3 className="font-semibold mb-2">Emergencias</h3>
            <p className="text-neutral-300 text-sm">
              Números de emergencia nacionales y locales.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 py-14"
      >
        <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Contacto
          </h2>
          <p className="text-neutral-300">
            ¿Tienes dudas, sugerencias o quieres colaborar? Escríbenos o llámanos.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="px-5 py-3 rounded-2xl bg-white text-neutral-900 font-semibold"
            >
              Enviar correo
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="px-5 py-3 rounded-2xl bg-neutral-900 border border-white/10 hover:bg-neutral-800"
            >
              Llamar {contact.phoneDisplay}
            </a>
          </div>

          {/* Redes como tarjetas */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Facebook */}
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 hover:bg-neutral-800 transition p-4"
              aria-label="Abrir Facebook de DescubreX"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-[#1877F2]"
              >
                <path
                  fill="currentColor"
                  d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.39-3.62 3.51-3.62.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.41v1.69h2.51l-.4 2.9h-2.11V22c4.78-.75 8.44-4.91 8.44-9.93z"
                />
              </svg>
              <span className="font-semibold text-white">
                Facebook
              </span>
            </a>

            {/* Instagram */}
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-neutral-900 hover:bg-neutral-800 transition p-4"
              aria-label="Abrir Instagram de DescubreX"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <defs>
                  <linearGradient
                    id="ig"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#F58529"
                    />
                    <stop
                      offset="50%"
                      stopColor="#DD2A7B"
                    />
                    <stop
                      offset="100%"
                      stopColor="#8134AF"
                    />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#ig)"
                  d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm9 2h-9A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4zm-4.5 3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5-2a1 1 0 110 2 1 1 0 010-2z"
                />
              </svg>
              <span className="font-semibold text-white">
                Instagram
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} DescubreX. Todos los derechos
            reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#/privacidad" className="hover:text-white">
              Aviso de Privacidad
            </a>
            <a href="#/terminos" className="hover:text-white">
              Términos de uso
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}