const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full bg-[#FCF9F9] p-8">
      {/* 3D Gradients Defs */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <radialGradient id="blood3D" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ff1a1a" />
            <stop offset="40%" stopColor="#b30000" />
            <stop offset="80%" stopColor="#4d0000" />
            <stop offset="100%" stopColor="#1a0000" />
          </radialGradient>

          <linearGradient id="gloss" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
            <stop offset="40%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Main Blood Drop Container */}
      <div className="relative flex flex-col items-center">
        {/* Main 3D Blood Drop */}
        <div className="relative z-20 drop-shadow-2xl">
          <svg width="90" height="130" viewBox="0 0 100 140">
            <path
              d="M50 5 C50 5, 5 70, 5 100 A 45 45 0 1 0 95 100 C95 70, 50 5, 50 5 Z"
              fill="url(#blood3D)"
            />
            <path
              d="M50 10 C50 10, 12 70, 12 95 A 38 38 0 0 0 45 130 C20 100, 30 50, 50 10 Z"
              fill="url(#gloss)"
            />
          </svg>
        </div>

        {/* Falling Blood Drops Area */}
        <div className="relative z-10 w-10 h-28 -mt-2 flex justify-center">
          {/* Drop 1 */}
          <div className="absolute top-0 animate-[drip_2s_infinite_ease-in]">
            <svg
              width="18"
              height="26"
              viewBox="0 0 20 30"
              className="drop-shadow-md"
            >
              <path
                d="M10 0 C10 0, 0 15, 0 22 A 10 10 0 1 0 20 22 C20 15, 10 0, 10 0 Z"
                fill="url(#blood3D)"
              />
              <ellipse
                cx="6"
                cy="18"
                rx="2"
                ry="4"
                fill="rgba(255,255,255,0.5)"
                transform="rotate(-30 6 18)"
              />
            </svg>
          </div>

          {/* Drop 2 */}
          <div className="absolute top-0 animate-[drip_2s_infinite_ease-in] [animation-delay:0.7s]">
            <svg
              width="14"
              height="20"
              viewBox="0 0 20 30"
              className="drop-shadow-md"
            >
              <path
                d="M10 0 C10 0, 0 15, 0 22 A 10 10 0 1 0 20 22 C20 15, 10 0, 10 0 Z"
                fill="url(#blood3D)"
              />
              <ellipse
                cx="6"
                cy="18"
                rx="2"
                ry="4"
                fill="rgba(255,255,255,0.5)"
                transform="rotate(-30 6 18)"
              />
            </svg>
          </div>

          {/* Drop 3 */}
          <div className="absolute top-0 animate-[drip_2s_infinite_ease-in] [animation-delay:1.4s]">
            <svg
              width="10"
              height="15"
              viewBox="0 0 20 30"
              className="drop-shadow-md"
            >
              <path
                d="M10 0 C10 0, 0 15, 0 22 A 10 10 0 1 0 20 22 C20 15, 10 0, 10 0 Z"
                fill="url(#blood3D)"
              />
              <ellipse
                cx="6"
                cy="18"
                rx="2"
                ry="4"
                fill="rgba(255,255,255,0.5)"
                transform="rotate(-30 6 18)"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ECG Line */}
      <div className="mt-2 relative w-64 h-12 flex items-center justify-center">
        <svg className="w-full h-full text-red-600" viewBox="0 0 200 40">
          <path
            d="M20,20 L80,20 L90,5 L105,35 L115,10 L125,25 L130,20 L180,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-[#FCF9F9] via-transparent to-[#FCF9F9] animate-pulse"></div>
      </div>

      {/* Text Slogan */}
      <div className="mt-4 text-center">
        <p className="text-sm font-bold text-red-700 tracking-[0.35em] uppercase">
          Give Blood &bull; Save Life
        </p>
      </div>

      <style jsx>{`
        @keyframes drip {
          0% {
            transform: translateY(0px) scale(0.3);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          75% {
            transform: translateY(85px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(105px) scale(0.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
