import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useScript(url) {
  const router = useRouter();
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = url;
    document.body.appendChild(script);

    // Needed for cleaning residue left by the external script that can only be removed by reloading the page
    const onRouterChange = () => {
      router.events.on("routeChangeStart", onRouterChange);
    };

    return () => {
      router.events.off("routeChangeStart", onRouterChange);

      document.body.removeChild(script);
      router.reload();
    };
  }, [router]);
}
