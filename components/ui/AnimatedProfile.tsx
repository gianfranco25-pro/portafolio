import React, { useState } from "react";

// Íconos reales según archivos en /public
const icons = [
  { src: "/React.svg", alt: "React" },
  { src: "/JavaScript.svg", alt: "JavaScript" },
  { src: "/Next.js.svg", alt: "Next.js" },
  { src: "/TypeScript.svg", alt: "TypeScript" },
  { src: "/HTML.svg", alt: "HTML5" },
  { src: "/CSS.svg", alt: "CSS3" },
  { src: "/python.svg", alt: "Python" },
  { src: "/SQL.svg", alt: "SQL" },
  { src: "/oracle.svg", alt: "Oracle" },
  { src: "/cloud.svg", alt: "Cloud" },
];

// Íconos que irán alrededor del perfil (en el borde) - divididos
const borderIconsRight = [
  { src: "/React.svg", alt: "React" },
  { src: "/JavaScript.svg", alt: "JavaScript" },
];

const borderIconsLeft = [
  { src: "/TypeScript.svg", alt: "TypeScript" },
];

// Órbitas con el mismo color que el perfil - 3 órbitas
const orbits = [
  { 
    radiusX: 220, 
    radiusY: 85, 
    speed: 35, 
    color: "rgba(168,85,247,0.7)",
    glowColor: "#a855f7"
  },
  { 
    radiusX: 220, 
    radiusY: 85, 
    speed: 42, 
    color: "rgba(168,85,247,0.7)",
    glowColor: "#a855f7"
  },
  { 
    radiusX: 260, 
    radiusY: 100, 
    speed: 50, 
    color: "rgba(168,85,247,0.7)",
    glowColor: "#a855f7"
  },
];

// Distribuir los íconos entre las órbitas - 3 órbitas con mejor distribución
const iconsByOrbit = [
  [icons[2], icons[4], icons[5]], // Next.js, HTML5, CSS
  [icons[6], icons[7]], // Python, SQL
  [icons[8], icons[9]], // Oracle, Cloud
];

export default function AnimatedProfile() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [hoveredBorder, setHoveredBorder] = useState<string | null>(null);
  
  const coreSize = 180;
  const containerSize = 580;
  const center = containerSize / 2;
  const borderRadius = coreSize / 2 - 5; // Superpuesto al borde del perfil

  return (
    <div className="flex items-center justify-center bg-transparent">
      <div
        style={{
          width: containerSize,
          height: containerSize,
          position: "relative",
          transformStyle: "preserve-3d",
          perspective: "1200px"
        }}
      >
        {/* Núcleo (perfil) - FIJO en el centro */}
        <div
          style={{
            width: coreSize,
            height: coreSize,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
            boxShadow: "0 0 70px 20px rgba(139,92,246,0.9), inset 0 0 50px rgba(168,85,247,0.6), 0 0 120px 30px rgba(99,102,241,0.5)",
            borderRadius: "50%",
            border: "4px solid rgba(168,85,247,0.9)",
            background: "radial-gradient(circle, #4c1d95 0%, #2e1065 50%, #1e1b4b 100%)",
            overflow: "hidden"
          }}
        >
          <img
            src="/profile.png"
            alt="Foto de perfil"
            style={{ 
              width: "100%", 
              height: "100%", 
              borderRadius: "50%", 
              objectFit: "cover" 
            }}
          />
        </div>

        {/* Círculo guía para los íconos del borde */}
        {/* Se mueve después del perfil para asegurar que esté por encima visualmente */}
        <svg
          width={containerSize}
          height={containerSize}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 400,
            pointerEvents: "none"
          }}
        >
          <circle
            cx={center}
            cy={center}
            r={coreSize / 2}
            stroke="rgba(168,85,247,0.3)"
            strokeWidth="2"
            fill="none"
            style={{ 
              filter: "blur(1px)",
              opacity: 0.5
            }}
          />
        </svg>

        {/* Íconos en el borde del perfil - 3 girando a la derecha */}
        <div
          style={{
            position: "absolute",
            width: containerSize,
            height: containerSize,
            top: 0,
            left: 0,
            zIndex: 400,
            animation: "rotate-border-right 15s linear infinite"
          }}
        >
          {borderIconsRight.map((icon, idx) => {
            const angle = (idx / borderIconsRight.length) * Math.PI + Math.PI * 0.5; // Solo lado derecho
            const iconRadius = borderRadius;
            const x = Math.cos(angle) * iconRadius;
            const y = Math.sin(angle) * iconRadius;
            const isHovered = hoveredBorder === `right-${idx}`;
            
            return (
              <div
                key={`border-right-${icon.alt}`}
                style={{
                  position: "absolute",
                  left: center + x - 16,
                  top: center + y - 16,
                  width: 32,
                  height: 32,
                  background: isHovered 
                    ? "linear-gradient(135deg, #a855f740 0%, #a855f720 100%)"
                    : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isHovered
                    ? "0 0 35px 10px #a855f7, inset 0 0 15px rgba(255,255,255,0.3), 0 0 50px 8px rgba(168,85,247,0.7)"
                    : "0 0 20px 5px rgba(168,85,247,0.7), inset 0 0 8px rgba(255,255,255,0.1)",
                  border: isHovered 
                    ? "2.5px solid #a855f7"
                    : "2px solid rgba(255,255,255,0.2)",
                  transform: isHovered ? "scale(1.4)" : "scale(1)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  zIndex: isHovered ? 500 : 400
                }}
                onMouseEnter={() => setHoveredBorder(`right-${idx}`)}
                onMouseLeave={() => setHoveredBorder(null)}
              >
                <img 
                  src={icon.src} 
                  alt={icon.alt} 
                  style={{ 
                    width: isHovered ? 26 : 20, 
                    height: isHovered ? 26 : 20,
                    filter: isHovered 
                      ? "drop-shadow(0 0 6px #a855f7) brightness(1.3) saturate(1.2)"
                      : "drop-shadow(0 0 3px rgba(255,255,255,0.3))",
                    transition: "all 0.4s ease"
                  }} 
                />
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-38px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.95)",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                      boxShadow: "0 0 20px #a855f7, 0 4px 15px rgba(0,0,0,0.5)",
                      border: "2px solid #a855f7",
                      animation: "tooltip-appear 0.3s ease",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {icon.alt}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Íconos en el borde del perfil - 2 girando a la izquierda */}
        <div
          style={{
            position: "absolute",
            width: containerSize,
            height: containerSize,
            top: 0,
            left: 0,
            zIndex: 400,
            animation: "rotate-border-left 15s linear infinite reverse"
          }}
        >
          {borderIconsLeft.map((icon, idx) => {
            const angle = (idx / borderIconsLeft.length) * Math.PI - Math.PI * 0.5; // Solo lado izquierdo
            const iconRadius = borderRadius;
            const x = Math.cos(angle) * iconRadius;
            const y = Math.sin(angle) * iconRadius;
            const isHovered = hoveredBorder === `left-${idx}`;
            
            return (
              <div
                key={`border-left-${icon.alt}`}
                style={{
                  position: "absolute",
                  left: center + x - 16,
                  top: center + y - 16,
                  width: 32,
                  height: 32,
                  background: isHovered 
                    ? "linear-gradient(135deg, #a855f740 0%, #a855f720 100%)"
                    : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: isHovered
                    ? "0 0 35px 10px #a855f7, inset 0 0 15px rgba(255,255,255,0.3), 0 0 50px 8px rgba(168,85,247,0.7)"
                    : "0 0 20px 5px rgba(168,85,247,0.7), inset 0 0 8px rgba(255,255,255,0.1)",
                  border: isHovered 
                    ? "2.5px solid #a855f7"
                    : "2px solid rgba(255,255,255,0.2)",
                  transform: isHovered ? "scale(1.4)" : "scale(1)",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  cursor: "pointer",
                  zIndex: isHovered ? 500 : 400
                }}
                onMouseEnter={() => setHoveredBorder(`left-${idx}`)}
                onMouseLeave={() => setHoveredBorder(null)}
              >
                <img 
                  src={icon.src} 
                  alt={icon.alt} 
                  style={{ 
                    width: isHovered ? 32 : 26, 
                    height: isHovered ? 32 : 26,
                    filter: isHovered 
                      ? "drop-shadow(0 0 6px #a855f7) brightness(1.3) saturate(1.2)"
                      : "drop-shadow(0 0 3px rgba(255,255,255,0.3))",
                    transition: "all 0.4s ease"
                  }} 
                />
                {isHovered && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-38px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "rgba(0,0,0,0.95)",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: "700",
                      whiteSpace: "nowrap",
                      boxShadow: "0 0 20px #a855f7, 0 4px 15px rgba(0,0,0,0.5)",
                      border: "2px solid #a855f7",
                      animation: "tooltip-appear 0.3s ease",
                      letterSpacing: "0.5px"
                    }}
                  >
                    {icon.alt}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Renderizar cada órbita que gira completa con sus electrones */}
        {orbits.map((orbit, orbitIdx) => {
          const numElectrons = iconsByOrbit[orbitIdx].length;
          
          return (
            <div
              key={orbitIdx}
              style={{
                position: "absolute",
                width: containerSize,
                height: containerSize,
                top: 0,
                left: 0,
                transformStyle: "preserve-3d",
                animation: `rotate-orbit-${orbitIdx} ${orbit.speed}s linear infinite`
              }}
            >
              {/* Línea de la órbita elíptica con efecto de rastro */}
              <svg
                width={containerSize}
                height={containerSize}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  pointerEvents: "none"
                }}
              >
                <defs>
                  <linearGradient id={`gradient-${orbitIdx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: orbit.glowColor, stopOpacity: 0.2 }} />
                    <stop offset="50%" style={{ stopColor: orbit.glowColor, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: orbit.glowColor, stopOpacity: 0.2 }} />
                  </linearGradient>
                </defs>
                <ellipse
                  cx={center}
                  cy={center}
                  rx={orbit.radiusX}
                  ry={orbit.radiusY}
                  stroke={`url(#gradient-${orbitIdx})`}
                  strokeWidth="1.5"
                  fill="none"
                  style={{ 
                    filter: "blur(0.5px) drop-shadow(0 0 10px " + orbit.glowColor + ")",
                    opacity: 0.9
                  }}
                />
              </svg>

              {/* Electrones FIJOS en la órbita */}
              {iconsByOrbit[orbitIdx].map((icon, iconIdx) => {
                const angle = (iconIdx / numElectrons) * 2 * Math.PI;
                const x = Math.cos(angle) * orbit.radiusX;
                const y = Math.sin(angle) * orbit.radiusY;
                const isHovered = hoveredIcon === `${orbitIdx}-${iconIdx}`;
                
                return (
                  <div
                    key={icon.alt}
                    style={{
                      position: "absolute",
                      left: center + x - 28,
                      top: center + y - 28,
                      width: 56,
                      height: 56,
                      background: isHovered 
                        ? `linear-gradient(135deg, ${orbit.glowColor}40 0%, ${orbit.glowColor}20 100%)`
                        : "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: isHovered
                        ? `0 0 50px 15px ${orbit.glowColor}, inset 0 0 25px rgba(255,255,255,0.4), 0 0 80px 12px ${orbit.color}`
                        : `0 0 30px 8px ${orbit.color}, inset 0 0 12px rgba(255,255,255,0.1)`,
                      border: isHovered 
                        ? `3px solid ${orbit.glowColor}`
                        : "2.5px solid rgba(255,255,255,0.2)",
                      transform: isHovered ? "scale(1.6)" : "scale(1)",
                      transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                      cursor: "pointer",
                      zIndex: isHovered ? 200 : 50,
                      animation: `icon-float ${3 + iconIdx * 0.3}s ease-in-out infinite`
                    }}
                    onMouseEnter={() => setHoveredIcon(`${orbitIdx}-${iconIdx}`)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <img 
                      src={icon.src} 
                      alt={icon.alt} 
                      style={{ 
                        width: isHovered ? 42 : 36, 
                        height: isHovered ? 42 : 36,
                        filter: isHovered 
                          ? `drop-shadow(0 0 10px ${orbit.glowColor}) brightness(1.4) saturate(1.3)`
                          : "drop-shadow(0 0 5px rgba(255,255,255,0.4))",
                        transition: "all 0.5s ease"
                      }} 
                    />
                    {/* Tooltip flotante */}
                    {isHovered && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-45px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "rgba(0,0,0,0.95)",
                          color: "white",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          fontSize: "13px",
                          fontWeight: "700",
                          whiteSpace: "nowrap",
                          boxShadow: `0 0 25px ${orbit.glowColor}, 0 4px 15px rgba(0,0,0,0.5)`,
                          border: `2px solid ${orbit.glowColor}`,
                          animation: "tooltip-appear 0.3s ease",
                          letterSpacing: "0.5px"
                        }}
                      >
                        {icon.alt}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* Animaciones CSS */}
        <style>{`
          @keyframes rotate-orbit-0 {
            0% { 
              transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
            }
            100% { 
              transform: rotateX(360deg) rotateY(0deg) rotateZ(0deg);
            }
          }
          
          @keyframes rotate-orbit-1 {
            0% { 
              transform: rotateX(0deg) rotateY(0deg) rotateZ(60deg);
            }
            100% { 
              transform: rotateX(0deg) rotateY(360deg) rotateZ(60deg);
            }
          }

          @keyframes rotate-orbit-2 {
            0% { 
              transform: rotateX(0deg) rotateY(0deg) rotateZ(120deg);
            }
            100% { 
              transform: rotateX(0deg) rotateY(0deg) rotateZ(480deg);
            }
          }

          @keyframes rotate-border-right {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes rotate-border-left {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes core-pulse {
            0%, 100% {
              box-shadow: 0 0 70px 20px rgba(139,92,246,0.9), inset 0 0 50px rgba(168,85,247,0.6), 0 0 120px 30px rgba(99,102,241,0.5);
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              box-shadow: 0 0 100px 30px rgba(139,92,246,1), inset 0 0 70px rgba(168,85,247,0.8), 0 0 150px 40px rgba(99,102,241,0.7);
              transform: translate(-50%, -50%) scale(1.08);
            }
          }

          @keyframes rotate-ring {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes icon-float {
            0%, 100% { 
              transform: translateY(0px);
            }
            50% { 
              transform: translateY(-8px);
            }
          }

          @keyframes tooltip-appear {
            0% {
              opacity: 0;
              transform: translateX(-50%) translateY(-10px) scale(0.8);
            }
            100% {
              opacity: 1;
              transform: translateX(-50%) translateY(0) scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}