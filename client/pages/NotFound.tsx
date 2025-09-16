import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout className="pb-0">
      <div className="mt-6 flex items-center justify-center p-6">
        <div className="text-center rounded-2xl bg-white/70 p-8 shadow-sm ring-1 ring-black/5 backdrop-blur">
          <h1 className="mb-2 text-5xl font-extrabold text-violet-600">404</h1>
          <p className="mb-4 text-base text-muted-foreground">
            Oops! Page not found
          </p>
          <a
            href="/"
            className="inline-block rounded-full bg-gradient-to-tr from-fuchsia-500 to-violet-500 px-5 py-2 text-sm font-medium text-white"
          >
            Return to Home
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
