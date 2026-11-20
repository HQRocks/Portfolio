export default function SpaceBackground() {
  return (
    <div className="fixed inset-0 w-screen h-screen pointer-events-none -z-10 overflow-hidden bg-[#030712]">
      
      {/* CSS Styles for Twinkling & Smooth Shooting Stars */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes shoot {
          0% { 
            transform: translateY(0) translateX(0) rotate( 240deg); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          30% { 
            transform: translateY(350px) translateX(-450px) rotate( 240deg); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(350px) translateX(-450px) rotate( 240deg); 
            opacity: 0; 
          }
        }
        .star-twinkle { animation: twinkle 3s infinite ease-in-out; }

        /* Single reusable class using a fallback color if none is provided */
        .shooting-star {
          position: absolute;
          width: 5px;
          height: 150px;
          background: linear-gradient(180deg, rgba(255,255,255,1) 0%, var(--star-color, rgba(165,243,252,0.6)) 40%, rgba(255,255,255,0) 100%);
          border-radius: 50%;
          opacity: 0;
          animation: shoot 7s infinite ease-in-out;
        }
          
        }
      `}</style>

      {/* Deep Space Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#0b0f19] to-[#030712]"></div>

      {/* Subtle Nebula Glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_70%_30%,_#4f46e5_0%,_transparent_60%)]"></div>

      {/* Scattered Twinkling Stars (More stars, varied sizes and colors) */}
      <div className="absolute top-10 left-[15%] w-1 h-1 bg-white rounded-full star-twinkle"></div>
      <div className="absolute top-24 left-[80%] w-1.5 h-1.5 bg-indigo-200 rounded-full star-twinkle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-[25%] w-1 h-1 bg-blue-200 rounded-full star-twinkle" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-[70%] w-2 h-2 bg-purple-200 rounded-full star-twinkle" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-[10%] w-1 h-1 bg-white rounded-full star-twinkle" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-1/2 left-[90%] w-1.5 h-1.5 bg-indigo-300 rounded-full star-twinkle" style={{ animationDelay: '2.5s' }}></div>
      <div className="absolute top-[65%] left-[35%] w-1 h-1 bg-white rounded-full star-twinkle" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-[75%] left-[75%] w-1.5 h-1.5 bg-blue-300 rounded-full star-twinkle" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute top-[85%] left-[20%] w-2 h-2 bg-white rounded-full star-twinkle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-[90%] left-[60%] w-1 h-1 bg-indigo-200 rounded-full star-twinkle" style={{ animationDelay: '1.8s' }}></div>

      {/* Shooting Stars using the SAME class, changing color inline via `--star-color` */}
      
      {/* 1. Default Cyan/Blue shooting star */}
      <div className="absolute top-[15%] right-[20%] shooting-star" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>

      {/* 2. Orange shooting star (just passing a custom CSS variable inline!) */}
      <div 
        className="absolute top-[40%] right-[10%] shooting-star" 
        style={{ 
          animationDelay: '3.5s', 
          animationDuration: '8s', 
          '--star-color': 'rgba(251, 146, 60, 0.6)' 
        } as React.CSSProperties}
      ></div>

    </div>
  );
}