import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center gradient-hero">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-8xl font-black text-white">404</h1>
        <p className="text-2xl text-white/90">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-xl hover:shadow-glow transition-all hover:scale-105"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
