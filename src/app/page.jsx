"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentImage, setCurrentImage] = useState("/profiledager.png");
  const [opacity, setOpacity] = useState(1);
  const images = ["/profiledager.png", "/profile2.png", "/profile3.jpg"];
  const [showIframe, setShowIframe] = useState(false);

  const buttons = [
    { text: "PEPILOVER", className: "bg-gradient-to-r from-[#19CD05] to-[#A4DA94] text-black font-medium" },
    { text: "PROGRAMMER", className: "border-[#FFA100] border-[2px] text-white font-medium" },
    { text: "GUITAR LOVER", className: "bg-gradient-to-r from-[#FFA100] to-[#FFFFFF] text-black font-medium" },
    { text: "HTML No es un lenguaje.", className: "border-[2px] border-[#19CD05] text-white font-medium" },
    { text: "ONICHAN uwu", className: "bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] text-black font-medium" },
    { text: "(˃ ᵕ ˂)", className: "bg-gradient-to-r from-[#FFA100] to-[#FFFFFF] font-medium" },
    { text: "COBRO 10$", className: "bg-gradient-to-r from-[#FF0000] to-[#FFFFFF] font-medium" },
    { text: "CONTENT CREATOR", className: "border-[#FFFFFF] border-[2px] text-white font-medium" },
  ];

  const handleImageClick = () => {
    setShowIframe(true); // Mostrar el iframe al hacer clic en la imagen
  };

  const handleCloseIframe = () => {
    setShowIframe(false); // Cerrar el iframe
  };
  

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage(prevImage => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setOpacity(1);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
        <>
          <style jsx>{`
            @keyframes gradientMove {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }

            .gradientText {
              background: linear-gradient(90deg, #FFA100, #FFFFFF);
              background-size: 200% 200%;
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              animation: gradientMove 3s ease infinite;
            }

            .imageContainer {
              width: 370px; /* Establece el ancho deseado */
              height: 480px; /* Establece la altura deseada */
              position: relative; /* Necesario para el contenedor de la imagen */
              overflow: hidden; /* Oculta cualquier parte de la imagen que exceda el contenedor */
              transition: opacity 0.5s ease; /* Transición de opacidad */
              opacity: ${opacity}; /* Aplica la opacidad */
            }

            .image {
              transition: opacity 0.5s ease; /* Transición de opacidad para la imagen */
            }
          `}</style>


          <header className="mt-8 flex justify-between">
            <Image src="/logo.png" className="cursor-pointer" width={191} height={40} alt="Logo pepino" />
            <Link href="mailto:dotdager@pepinillos.com" className="text-white px-5 py-2 border-[2px] rounded-[99px] border-[#FFA100] text-[14px] hover:text-black hover:bg-[#FFA100]">CONTACTAME</Link>
          </header>

          <main>
            <div className="flex justify-between mt-[64px]">
              <div>
                <h1 className="mb-1 text-[75px] w-[600px] text-white">A <span className="gradientText">FULL STACK</span> SENIOR <span className="gradientText">.</span></h1>
                <p className="text-white w-[600px] mb-11">Soy un creador de contenido apasionado con un gran interés en la programación, la música, los pepinillos y la filosofía. Me encanta combinar estos intereses, reflexionando sobre la vida mientras disfruto de un buen pepinillo y creando contenido que resuena con mi audiencia.</p>
                
                <div className="flex">
                  <Link href="mailto:dotdager@pepinillos.com" className="text-[18px] text-black font-medium px-5 py-2 bg-gradient-to-r from-[#FFA100] to-[#FFFFFF] rounded-[99px] transition duration-300 hover:from-[#D68700] hover:to-[#D3D3D3]">CONTACTAME ˃.˂</Link>
                </div>
              </div>

              <div className="imageContainer" style={{ opacity }}>
                <Image className="image rounded-[40px]" src={currentImage} layout="fill" objectFit="cover" alt="Dot Dager Picture" />
              </div>
            </div>
          </main>


      <div className="overflow-hidden mt-[88px] relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {buttons.concat(buttons).map((button, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded-[99px] ${button.className}`}
            >
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

          <div className="flex justify-center mt-[88px]">
            <Image className="rounded-[32px] shadow-xl shadow-orange-500/20 mb-[80px]" src="/miniaturadager.png" width={800} height={400} alt="Miniatura Dager HTML es un lenguaje"></Image>
          </div>

          <div>
            <h2 className="text-[75px] text-white mb-[12px]">SOBRE MI</h2>
            <p className="mb-[34px] text-white w-[900px]">¡Hola! Soy Mariano, pero en el mundo digital me conocen como Dot Dager. Soy apasionado del desarrollo web y un entusiasta de la tecnología. En mi tiempo libre, disfruto compartiendo mis ideas y proyectos con el mundo, y creo firmemente que la música es el mejor aliado para criticar PHP. Cualquier retraso en mis entregas se debe a que he estado comiendo mucho pepino.</p>
            <Image className="mb-[80px] shadow-xl shadow-orange-500/20 rounded-[32px]" src="/miniaturadager2.png" width={900} height={470} alt="Miniatura de dager con gato pachoncho"></Image>
          </div>

          <div className="mb-40 relative">

          <a href="#" onClick={handleImageClick}><Image src="/lumberjack.png" width={600} height={500} className="absolute right-[0px] bottom-0" alt="Lumberjack de dager"/></a>

          {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full h-full max-w-3xl max-h-3xl">
            <iframe
              src="https://tbot.xyz/lumber/"
              className="w-full h-full"
              title="Lumberjack Iframe"
            />
            <button
              onClick={handleCloseIframe}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

            <h2 className="text-[75px] text-white mb-10">MIS INTERESES</h2>

            <div className="text-white mb-8">
              <h3 className="text-[40px]">- PROGRAMACION</h3>
              <p>La fusión perfecta entre arte y precisión.</p>
            </div>
            
            <div className="text-white mb-8">
              <h3 className="text-[40px]">- GATOS</h3>
              <p>Compañeros silenciosos que siempre están ahí.</p>
            </div>

            <div className="text-white mb-8">
              <h3 className="text-[40px]">GUITARRAS</h3>
              <p>Sonidos que inspiran y relajan el alma. (Y para criticar PHP)</p>
            </div>

            <div className="text-white mb-8">
              <h3 className="text-[40px]">- FILOSOFIA (me gusta sofia)</h3>
              <p>El examen constante del pensamiento y la existencia.</p>
            </div>

            <div className="text-white mb-8">
              <h3 className="text-[40px]">- PEPINOS</h3>
              <p>Un placer culinario inesperado y delicioso en las mañanas.</p>
            </div>
          </div>

          <div className="text-white text-center mb-[150px]">
            <h2 className="text-[75px] mb-[30px]">CONTACTAME</h2>
            <p className="text-[30px]">dotdager@pepinillos.com</p>
          </div>
        </>
    </>
  );
}