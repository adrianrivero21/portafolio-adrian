import { useEffect, useState } from "react";

const Text = () => {

  const words = ["INSPIRE", "HABLE", "SIENTA", "DESCUBRA", "EVOLUCIONE", "SE HAGA REALIDAD" ];

  const [index, setIndex] = useState(0);

  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // inicia desvanecimiento
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(false); // reaparece
      }, 500); // duración del fade
    }, 3000); // cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-3xl font-semibold text-center mt-10  px-10 py-40" style={{ fontSize: '140px', color: '#000000ff'}}>
      Haz que tu idea.{" "}
      <span
        className={`inline-block transition-opacity duration-500 ${
          fade ? "opacity-0" : "opacity-100"
        } text-blue-500`} 
      >
        {words[index]}
      </span>
    </div>
  );
};

export default Text