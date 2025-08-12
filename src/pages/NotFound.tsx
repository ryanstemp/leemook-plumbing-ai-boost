import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import notFound from "@/assets/not-found.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <img
          src={notFound}
          alt="Page not found – plumber looking at a map"
          className="mx-auto w-full max-w-md rounded-lg border mb-4"
          loading="lazy"
          width={800}
          height={450}
        />
        <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
        <a href="/" className="text-primary underline-offset-4 hover:underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
