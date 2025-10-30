// components/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-6">
      {/* Full-width border line */}
      <div className="border-t border-gray-800 w-full"></div>

      {/* Centered text */}
      <div className="flex flex-col items-center justify-center text-center py-4">
        <p className="text-sm text-gray-400">
          © {currentYear} Espaço ao Cubo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
