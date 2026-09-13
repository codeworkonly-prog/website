import { useEffect, useState } from "react";
import logo from "../../imports/iptm-logo.webp";

const Preloader = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);

      setTimeout(() => {
        setVisible(false);
      }, 500);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">

        {/* IPTM Nepal Logo */}
        <div className="relative flex items-center justify-center">
          
          {/* Subtle rotating ring */}
          <div className="preloader-ring absolute inset-[-12px] rounded-full" />

          <img
            src={logo}
            alt="IPTM Nepal"
            className="preloader-logo relative z-10 h-32 w-32 object-contain"
          />
        </div>

        {/* Company Name */}
        <div className="mt-7 overflow-hidden">
          <p className="preloader-title">
            IPTM Nepal
          </p>
        </div>

        {/* Loading Line */}
        <div className="mt-5 h-[3px] w-32 overflow-hidden rounded-full bg-gray-200">
          <div className="preloader-line h-full" />
        </div>

      </div>
    </div>
  );
};

export default Preloader;