import React from "react";
import Image from "next/image";


const Header: React.FC = () => {
  return (
      <header className="bg-primary shadow-md p-4 flex justify-between items-center">
          <div className="w-64 h-12 overflow-hidden  flex  items-center">
              <Image src={"/assets/svg/Cubesat_LOGO_Espaco3_Full_Horizontal_Positivo.svg"} alt={""} width={140} height={10} ></Image>
          </div>
          <nav className="space-x-4">
              <a href="#contact" className=" font-bold hover:text-blue-500 transition">
                  Contact Us
              </a>
          </nav>
      </header>
  );
};

export default Header;
