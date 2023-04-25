import * as React from "react";
import { useRouter } from "next/router";

export function useAuth() {
  const router = useRouter();
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const localToken = localStorage.getItem("accessToken");

    // This should be a check for a valid access token when the component first mounts
    if (localToken && !accessToken) {
      setAccessToken(localToken);
    } else if (!accessToken) {
      router.push("/login");
    } else {
      // Call the /profile endpoint with the access token to check if it is stale
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((response) => {
          if (response.status === 401) {
            // Access token is stale, redirect to login page
            localStorage.removeItem("accessToken");
            router.push("/login");
          } else if (response.ok) {
            // Access token is valid, continue rendering the page
            return response.json();
          }
        })
        .catch((err) => {
          console.error(err);
          // Access token is stale, redirect to login page
          localStorage.removeItem("accessToken");
          router.push("/login");
        });
    }
  }, [accessToken, router]);

  return accessToken;
}
