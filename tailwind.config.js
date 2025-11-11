@import "tailwindcss";
@reference "tailwindcss/utilities";
@import "./theme.css";

/* Estilos globales DescubreX */
@layer base {
  html, body {
    @apply bg-black text-white scroll-smooth;
  }
  a {
    @apply text-brand hover:text-accent transition-colors;
  }
  button {
    @apply focus:outline-none;
  }
}

/* Scrollbar */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background-color: #EB376A; border-radius: 4px; }
::-webkit-scrollbar-track { background-color: #111; }
