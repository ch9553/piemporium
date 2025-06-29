
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow fade out animation to complete
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50 animate-fade-out">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl mb-6 animate-scale-out">
            <span className="text-white font-bold text-4xl drop-shadow-lg" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent animate-fade-out" 
              style={{ fontFamily: 'Dancing Script, cursive' }}>
            Piemporium
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl mb-6 animate-pulse">
          <span className="text-white font-bold text-4xl drop-shadow-lg" style={{ fontFamily: 'Times New Roman, serif' }}>π</span>
        </div>
        <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent animate-fade-in" 
            style={{ 
              fontFamily: 'Dancing Script, cursive',
              animation: 'fadeIn 2s ease-in-out, textGlow 2s ease-in-out infinite alternate'
            }}>
          Piemporium
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-400"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
