import React from "react";

const CircularText = ({
  text = "ISSHO-NI-HATARAKASETE-KUDASAI.  MAJIMENI-TANOSHIKU-KOTSUKOTSUTO.   TIISANA-KOTOKARA-TEINEINI.   SUNAONA-KOKORO-DE-MANABIMASU. ",
  radius = 300,
  duration = "50s",
}) => {
  const characters = text.split("");
  const degreeStep = 360 / characters.length;

  const injectStyles = `
    @keyframes circle-rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
  `;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      <style>{injectStyles}</style>

      <div
        style={{
          position: "relative",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          animation: `circle-rotate ${duration} linear infinite`,
          zIndex: 1,
        }}
      >
        {characters.map((char, i) => (
          <span
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              display: "inline-block",
              fontSize: "1rem",
              fontWeight: "500",
              color: "#343434",
              fontFamily: "sans-serif",
              lineHeight: "1",
              transform: `translateX(-50%) rotate(${i * degreeStep}deg)`,
              transformOrigin: `center ${radius}px`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CircularText;
