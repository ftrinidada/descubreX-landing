export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 px-6 py-14">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#EB376A] mb-6">
          Términos y Condiciones de Uso
        </h1>

        <p><strong>Última actualización:</strong> noviembre de 2025</p>
        <p className="mt-4">
          <strong>DescubreX</strong>, con sede en Del. Cuauhtémoc, Ciudad de México, México,
          pone a disposición del público la aplicación móvil y el sitio web “DescubreX”
          bajo los siguientes Términos y Condiciones de Uso.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Objeto</h2>
        <p>DescubreX es una plataforma informativa que ofrece datos turísticos, negocios locales y números de emergencia.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Uso permitido</h2>
        <p>El uso de DescubreX es gratuito, personal y no comercial. El usuario se compromete a usarla de manera responsable conforme a las leyes mexicanas.</p>

        <ul className="list-disc list-inside mt-2 mb-4">
          <li>No utilizar con fines ilícitos.</li>
          <li>No alterar ni copiar su contenido.</li>
          <li>No introducir virus o software dañino.</li>
          <li>No usar los datos con fines publicitarios sin autorización.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Propiedad intelectual</h2>
        <p>Todo el contenido, logotipos e interfaz son propiedad de DescubreX o de sus respectivos titulares.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Información publicada</h2>
        <p>DescubreX procura mantener la información actualizada, pero no garantiza su exactitud o disponibilidad permanente.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Servicios de terceros</h2>
        <p>La app usa <strong>Apple Maps</strong> y <strong>Google Maps</strong>. El uso se rige por sus propios términos:</p>
        <ul className="list-disc list-inside">
          <li><a href="https://maps.google.com/help/terms_maps.html" target="_blank" className="underline text-[#EB376A]">Google Maps Terms of Service</a></li>
          <li><a href="https://www.apple.com/legal/internet-services/maps/terms-en.html" target="_blank" className="underline text-[#EB376A]">Apple Maps Terms of Use</a></li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitación de responsabilidad</h2>
        <p>El uso de la app es bajo el propio riesgo del usuario. DescubreX no será responsable de daños, errores o inexactitudes de la información.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Política de privacidad</h2>
        <p>El uso de DescubreX está sujeto al Aviso de Privacidad disponible en <a href="#/privacidad" className="underline text-[#EB376A]">https://www.descubrex.com/#/privacidad</a>.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Cambios y actualizaciones</h2>
        <p>DescubreX puede modificar estos términos en cualquier momento. Las actualizaciones se publicarán en el sitio web oficial.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contacto</h2>
        <p>
          Para dudas o aclaraciones, puede comunicarse a: <br />
          <strong>contacto@descubrex.com</strong> — Tel: <strong>55 4961 6019</strong>
        </p>

        <p className="mt-6 text-sm text-neutral-400">
          Del. Cuauhtémoc, Ciudad de México, México — © {new Date().getFullYear()} DescubreX
        </p>
      </div>
    </div>
  );
}