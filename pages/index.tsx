import * as React from "react";
import { Box, Card, Grid, GridItem, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Footer from "components/footer";

export default function Home() {
  const router = useRouter();
  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    const storageToken = localStorage.getItem("accessToken");

    // This should be a check for a valid access token when the component first mounts
    if (storageToken && !accessToken) {
      setAccessToken(storageToken);
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
        .catch((error) => {
          // Access token is stale, redirect to login page
          localStorage.removeItem("accessToken");
          router.push("/login");
        });
    }
  }, [accessToken, router]);

  if (!accessToken) {
    return null;
  }

  return (
    <>
      <Grid>
        <Heading
          bgImg="homescreen-background.jpg"
          textAlign={"center"}
          height="200"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "100% 25%", // Adjust the values here
          }}
        >
          Welcome To DnD Mobile
        </Heading>
      </Grid>

      <Heading size="md" fontWeight="bold" p="3">
        Now that you are here...
      </Heading>

      <GridItem>
        <Box p="3">
          This application was made to make your DnD experience mobile friendly
          and easy to use! You can create your own characters, read up on the
          monsters you will be facing, keep track of your inventory, and even
          play campaigns with other adventurers! We also have a map tab to help
          you identify your current location and enable you to take a peak at
          your world (which is still a work in progress)! If you ever have any
          questions, suggestions, or concerns, please feel free to contact me at
          my email. The link to the information is down below.
        </Box>
      </GridItem>
      <Footer></Footer>
    </>
  );
}
